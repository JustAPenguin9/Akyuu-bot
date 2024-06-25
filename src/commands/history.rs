use poise::serenity_prelude::{ButtonStyle, InteractionResponseType, User};
use sqlx::types::chrono;

use crate::{Context, Error};

// TODO: parse winner and loser ids in the form `id:000000000000`

/// View yours or another users profile
#[poise::command(prefix_command, slash_command)]
pub async fn profile(
	ctx: Context<'_>,
	#[description = "See the profile of another user"] other: Option<User>,
) -> Result<(), Error> {
	let user = other.unwrap_or(ctx.author().clone());
	let id = user.id.as_u64();
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

	// NOTE: finding the avatar url like this is dumb and should be moved elsewhere
	let default_avatar = if user.discriminator == 0u16 {
		// modern user
		format!("https://cdn.discordapp.com/embed/avatars/{}.png", user.id.as_u64() >> (22 % 6))
	} else {
		// legacy user
		format!("https://cdn.discordapp.com/embed/avatars/{}.png", user.discriminator % 5)
	};

	ctx.send(|m| {
		m.embed(|e| {
			e.colour(0xB3E04D)
				.title(&user.name)
				.thumbnail(user.avatar_url().unwrap_or(default_avatar))
				.field("Wins", wins, true)
				.field("Losses", losses, true)
				.field("W/L Ratio", format!("{:.2}", ratio), true)
				.field("Total games played", wins + losses, true)
		})
		.reply(true)
	})
	.await?;

	Ok(())
}

/// Record a win over another player
#[poise::command(prefix_command, slash_command)]
pub async fn win(
	ctx: Context<'_>,
	#[description = "Who you beat"] other: User,
	#[description = "Games played (default 1)"]
	#[min = 1]
	games_played: Option<u32>,
) -> Result<(), Error> {
	result(ctx, ctx.author().clone(), other, games_played.unwrap_or(1), 0).await
}

/// Record a loss over another player
#[poise::command(prefix_command, slash_command)]
pub async fn loss(
	ctx: Context<'_>,
	#[description = "Who you loss to"] other: User,
	#[description = "Games played (default 1)"]
	#[min = 1]
	games_played: Option<u32>,
) -> Result<(), Error> {
	result(ctx, other, ctx.author().clone(), games_played.unwrap_or(1), 0).await
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

/// only for win, loss, and set commands not the to command
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
		ctx.send(|b| b.content("Nice try.").ephemeral(true)).await?;
		return Ok(());
	};

	// find out who called the command
	let other = if ctx.author().id == winner.id { loser.clone() } else { winner.clone() };

	let btn_id_yes = format!("{}yes", ctx.id());
	let btn_id_no = format!("{}no", ctx.id());

	let msg = ctx
		.send(|b| {
			b.content(format!(
				"<@{}> {} - {} <@{}>, is this true <@{}>?",
				winner.id, wins, losses, loser.id, other.id
			))
			.components(|c| {
				c.create_action_row(|ar| {
					ar.create_button(|b| {
						b.style(ButtonStyle::Success).label("Yes").custom_id(&btn_id_yes)
					})
					.create_button(|b| {
						b.style(ButtonStyle::Danger).label("No").custom_id(&btn_id_no)
					})
				})
			})
		})
		.await?;

	let interaction = msg
		.message()
		.await?
		.await_component_interaction(ctx)
		.author_id(other.id)
		.timeout(std::time::Duration::from_secs(30))
		.filter(move |press| press.data.custom_id.starts_with(&ctx_id.to_string()))
		.await;

	let btn_id = match &interaction {
		Some(p) => &p.data.custom_id,
		None => {
			msg.edit(ctx, |b| b.content("No more time left...").components(|c| c)).await?;
			return Ok(());
		}
	};

	if *btn_id == btn_id_yes {
		// record wins
		if losses == 0 {
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
		} else {
			// record a full set
			let time = chrono::Utc::now();

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
			.execute(&ctx.data().pool)
			.await?;

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
			.execute(&ctx.data().pool)
			.await?;

			interaction
				.unwrap()
				.create_interaction_response(ctx, |b| {
					b.kind(InteractionResponseType::UpdateMessage).interaction_response_data(|d| {
						d.content(format!(
							"~~<@{}> {} - {} <@{}>, is this true <@{}>?~~ Recorded!",
							winner.id, wins, losses, loser.id, other.id
						))
						.components(|c| c)
					})
				})
				.await?;
		};
	} else if *btn_id == btn_id_no {
		interaction
			.unwrap()
			.create_interaction_response(ctx, |b| {
				b.kind(InteractionResponseType::UpdateMessage).interaction_response_data(|b| {
					b.content("Seems like i'm not going to record anything today.")
						.components(|c| c)
				})
			})
			.await?;
	}

	Ok(())
}

// TODO: give_to_role, remove_to_role, is_to, and to

// /// Give the TO role to a user
// #[poise::command(slash_command, required_permissions = "MANAGE_ROLES")]
// pub async fn give_to_role(
//     ctx: Context<'_>,
//     #[description = "Who to give the role to"] user: User,
// ) -> Result<(), Error> {
//     todo!()
// }

// /// Remove the TO role from a user
// #[poise::command(slash_command, required_permissions = "MANAGE_ROLES")]
// pub async fn remove_to_role(
//     ctx: Context<'_>,
//     #[description = "Who to remove the role from"] user: User,
// ) -> Result<(), Error> {
//     todo!()
// }

// /// Returns true if the caller has the TO role
// async fn is_to(ctx: Context<'_>) -> Result<bool, Error> {
//     // let role = ctx.guild_id().ok_or()?.roles(ctx.http()).await?.get(&"TO");
//     // if ctx.author().has_role(ctx.http(), ctx.guild()?, )
//
//     todo!()
// }

// /// Record a set between 2 players (for TOs use only)
// // #[poise::command(slash_command, check = "is_to")]
// #[poise::command(slash_command)]
// pub async fn to(
// 	ctx: Context<'_>,
// 	#[description = "Player 1"] player1: User,
// 	#[description = "Player 1 wins / player 2 losses"]
// 	#[min = 0]
// 	p1_wins: u32,
// 	#[description = "Player 2"] player2: User,
// 	#[description = "Player 1 losses / player 2 wins"]
// 	#[min = 0]
// 	p2_wins: u32,
// ) -> Result<(), Error> {
// 	todo!()
// }
