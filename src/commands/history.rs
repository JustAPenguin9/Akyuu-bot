use poise::{
	serenity_prelude::{
		self as serenity, ButtonStyle, CreateActionRow, CreateButton, CreateEmbed,
		CreateInteractionResponse, CreateInteractionResponseMessage, User,
	},
	CreateReply,
};
use sqlx::types::chrono;
use tracing::info;

use crate::{Context, Error};

// TODO: parse winner and loser ids in the form `id:000000000000`

/// View yours or another users profile
#[poise::command(prefix_command, slash_command)]
pub async fn profile(
	ctx: Context<'_>,
	#[description = "See the profile of another user"] other: Option<serenity::User>,
) -> Result<(), Error> {
	let user = other.unwrap_or(ctx.author().clone());
	let id = u64::from(user.id);
	let losses = sqlx::query!("SELECT * FROM `history` WHERE `loser` = ?", &id)
		.fetch_all(&ctx.data().pool)
		.await?
		.iter()
		// i dont know why the games_played is a Option
		.fold(0, |acc, x| acc + x.games_played.unwrap_or(1)) as f32;
	let wins = sqlx::query!("SELECT * FROM `history` WHERE `winner` = ?", &id)
		.fetch_all(&ctx.data().pool)
		.await?
		.iter()
		// i still dont know why the games_played is a Option
		.fold(0, |acc, x| acc + x.games_played.unwrap_or(1)) as f32;

	// can't divide by 0
	let ratio = if losses == 0.0 { wins } else { wins / losses };

	ctx.send(
		CreateReply::default().embed(
			CreateEmbed::new()
				.colour(0xB3E04D)
				.title(&user.name)
				.thumbnail(user.avatar_url().unwrap_or_else(|| user.default_avatar_url()))
				.field("Wins", wins.to_string(), true)
				.field("Losses", losses.to_string(), true)
				.field("W/L Ratio", format!("{:.2}", ratio), true)
				.field("Total games", (wins + losses).to_string(), true),
		),
	)
	.await?;

	Ok(())
}

/// Record a win over another player
#[poise::command(prefix_command, slash_command)]
pub async fn win(
	ctx: Context<'_>,
	#[description = "Who you beat"] opponent: User,
	#[description = "Games played (default 1)"]
	#[min = 1]
	games_played: Option<u32>,
) -> Result<(), Error> {
	result(ctx, ctx.author().clone(), opponent, games_played.unwrap_or(1), 0).await
}

/// Record a loss over another player
#[poise::command(prefix_command, slash_command)]
pub async fn loss(
	ctx: Context<'_>,
	#[description = "Who you loss to"] opponent: User,
	#[description = "Games played (default 1)"]
	#[min = 1]
	games_played: Option<u32>,
) -> Result<(), Error> {
	result(ctx, opponent, ctx.author().clone(), games_played.unwrap_or(1), 0).await
}

/// Record the results of a whole set
#[poise::command(slash_command)]
pub async fn set(
	ctx: Context<'_>,
	#[description = "Your wins"]
	#[min = 0]
	wins: u32,
	#[description = "Opponent"] opponent: User,
	#[description = "Opponents wins / Your losses"]
	#[min = 0]
	losses: u32,
) -> Result<(), Error> {
	result(ctx, ctx.author().clone(), opponent, wins, losses).await
}

/// Only for win, loss, and set commands not the to command
async fn result(
	ctx: Context<'_>,
	winner: User,
	loser: User,
	wins: u32,
	losses: u32,
) -> Result<(), Error> {
	let ctx_id = ctx.id();

	// no cheating
	if winner.bot || loser.bot || winner.id == loser.id || (wins == 0 && losses == 0) {
		ctx.send(CreateReply::default().content("Nice try.").ephemeral(true)).await?;
		return Ok(());
	};

	// find out who called the command
	let other = if ctx.author().id == winner.id { loser.clone() } else { winner.clone() };

	let btn_id_yes = format!("{}yes", ctx.id());
	let btn_id_no = format!("{}no", ctx.id());

	let reply = ctx
		.send(
			CreateReply::default()
				.content(format!(
					"<@{}> {} - {} <@{}>, is this true <@{}>?",
					winner.id, wins, losses, loser.id, other.id
				))
				.components(vec![CreateActionRow::Buttons(vec![
					CreateButton::new(&btn_id_yes).label("Yes").style(ButtonStyle::Success),
					CreateButton::new(&btn_id_no).label("No").style(ButtonStyle::Danger),
				])]),
		)
		.await?;

	let interaction = reply
		.message()
		.await?
		.await_component_interaction(ctx)
		.author_id(other.id)
		.timeout(std::time::Duration::from_secs(60))
		.filter(move |press| press.data.custom_id.starts_with(&ctx_id.to_string()))
		.await;

	let btn_id = match &interaction {
		Some(p) => &p.data.custom_id,
		None => {
			reply.edit(ctx, CreateReply::default().content("No more time left...")).await?;
			return Ok(());
		}
	};

	if *btn_id == btn_id_yes {
		if losses == 0 {
			// record only wins
			sqlx::query!(
				r#"INSERT INTO `history` (
					`winner`,
					`loser`,
					`games_played`,
					`recorded_by`
				) VALUES (?, ?, ?, ?)"#,
				u64::from(winner.id),
				u64::from(loser.id),
				wins,
				u64::from(ctx.author().id)
			)
			.execute(&ctx.data().pool)
			.await?;
			info!("Recored 1 row to the database");
		} else {
			// record a full set
			let time = chrono::Utc::now();
			let (winner_result, loser_result) = tokio::join!(
				sqlx::query!(
					r#"INSERT INTO `history` (
						`winner`,
						`loser`,
						`games_played`,
						`recorded_at`,
						`recorded_by`
					) VALUES (?, ?, ?, ?, ?)"#,
					u64::from(winner.id),
					u64::from(loser.id),
					wins,
					time,
					u64::from(ctx.author().id)
				)
				.execute(&ctx.data().pool),
				sqlx::query!(
					r#"INSERT INTO `history` (
						`winner`,
						`loser`,
						`games_played`,
						`recorded_at`,
						`recorded_by`
					) VALUES (?, ?, ?, ?, ?)"#,
					u64::from(loser.id),
					u64::from(winner.id),
					losses,
					time,
					u64::from(ctx.author().id)
				)
				.execute(&ctx.data().pool),
			);

			// FIX: this is probably not very good
			// bubble up errors
			winner_result?;
			loser_result?;
			info!("Recored 2 rows to the database");
		};

		interaction
			.unwrap()
			.create_response(
				ctx,
				CreateInteractionResponse::UpdateMessage(
					CreateInteractionResponseMessage::default().content(format!(
						"~~<@{}> {} - {} <@{}>, is this true <@{}>?~~ Recorded!",
						winner.id, wins, losses, loser.id, other.id
					)),
				),
			)
			.await?;
	} else if *btn_id == btn_id_no {
		interaction
			.unwrap()
			.create_response(
				ctx,
				CreateInteractionResponse::UpdateMessage(
					CreateInteractionResponseMessage::default().content(format!(
						"~~<@{}> {} - {} <@{}>, is this true <@{}>?~~ <@{}> said no!",
						winner.id, wins, losses, loser.id, other.id, other.id
					)),
				),
			)
			.await?;
	}

	Ok(())
}
