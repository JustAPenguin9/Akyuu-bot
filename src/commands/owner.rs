use poise::{
	serenity_prelude::{
		ActivityData, ButtonStyle, CreateActionRow, CreateButton,
		CreateInteractionResponse, OnlineStatus,
	},
	CreateReply,
};
use tracing::info;

use crate::{Context, Error};

/// Register slash commands to a guild or globally
#[poise::command(prefix_command, hide_in_help, owners_only)]
pub async fn register(ctx: Context<'_>) -> Result<(), Error> {
	poise::builtins::register_application_commands_buttons(ctx).await?;
	Ok(())
}

/// Set Akyuu's status
// FIX: this doesnt work and i dont know why it takes forever to load
#[poise::command(prefix_command, hide_in_help, owners_only)]
pub async fn activity(ctx: Context<'_>, activity: Option<String>) -> Result<(), Error> {
	dbg!(&activity);
	match activity {
		Some(a) => {
			dbg!(&a);
			let words: Vec<&str> = a.split_whitespace().collect();
			dbg!(&words);

			match words.first().unwrap().to_lowercase().as_ref() {
				"default" => {
					ctx.serenity_context().set_presence(
						Some(ActivityData::listening("Kosuzu ramble")),
						OnlineStatus::Online,
					);
					info!("Activity changed");
				}
				"playing" => {
					dbg!(words[1..].join(" "));
					ctx.serenity_context().set_presence(
						Some(ActivityData::playing(words[1..].join(" "))),
						OnlineStatus::Online,
					);
					info!("Activity changed");
				}
				// NOTE: streaming requires a url argument if we want this to be an option
				// "streaming" => {
				// 	ctx.serenity_context().set_presence(
				// 		Some(ActivityData::streaming(words[1..].join(" "))),
				// 		OnlineStatus::Online,
				// 	);
				// 	info!("Activity changed");
				// },
				"listening" => {
					ctx.serenity_context().set_presence(
						Some(ActivityData::listening(words[1..].join(" "))),
						OnlineStatus::Online,
					);
					info!("Activity changed");
				}
				"watching" => {
					ctx.serenity_context().set_presence(
						Some(ActivityData::watching(words[1..].join(" "))),
						OnlineStatus::Online,
					);
					info!("Activity changed");
				}
				"custom" => {
					ctx.serenity_context().set_presence(
						Some(ActivityData::custom(words[1..].join(" "))),
						OnlineStatus::Online,
					);
					info!("Activity changed");
				}
				"competing" => {
					ctx.serenity_context().set_presence(
						Some(ActivityData::competing(words[1..].join(" "))),
						OnlineStatus::Online,
					);
					info!("Activity changed");
				}
				_ => {
					ctx.say(
						"Unknown activity, please start with `playing`, `listening`, \
						`watching`, `custom`, `competing`, or `default`",
					)
					.await?;
				}
			};
		}
		None => {
			ctx.serenity_context().reset_presence();
			info!("Activity reset");
		}
	}

	Ok(())
}

/// Clear the move database
// TODO: this
#[poise::command(prefix_command, hide_in_help, owners_only)]
pub async fn resetmoves(ctx: Context<'_>) -> Result<(), Error> {
	let btn_id_yes = format!("{}yes", ctx.id());

	let reply = ctx
		.send(CreateReply::default().content("Are you sure?").components(vec![
			CreateActionRow::Buttons(vec![
				CreateButton::new(btn_id_yes).label("Yes").style(ButtonStyle::Danger),
			]),
		]))
		.await?;

	let interaction =
		reply.message().await?.await_component_interaction(ctx).author_id(ctx.author().id).await;

	if let Some(press) = &interaction {
		// FIX: the character sql files are not working when used though sqlx but are working in
		// all other scenarios
		ctx.reply("currently not working").await?;

		// sqlx::query("DELETE from `moves`;").execute(&ctx.data().pool).await?;

		// the sql files must be explicitly written out
		// sqlx::query_file!("character-sql/byakuren.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/doremy.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/futo.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/ichirin.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/joon.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/kasen.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/koishi.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/kokoro.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/mami.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/marisa.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/miko.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/mokou.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/nitori.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/reimu.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/reisen.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/sukuna.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/sumi.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/tenshi.sql").execute(&ctx.data().pool).await?;
		// sqlx::query_file!("character-sql/yukari.sql").execute(&ctx.data().pool).await?;

		press.create_response(ctx, CreateInteractionResponse::Pong).await?;
	}

	Ok(())
}
