use poise::serenity_prelude::{Channel, CreateMessage};
use tracing::info;

use crate::{Context, Error};

#[derive(poise::ChoiceParameter, Debug)]
pub enum EditChoices {
	Add,
	Remove,
	Query,
}

/// Edit the servers config (admins only)
#[poise::command(
	prefix_command,
	hide_in_help,
	guild_only,
	required_permissions = "ADMINISTRATOR",
	subcommands("squiroll_channel"),
	subcommand_required
)]
pub async fn config(_ctx: Context<'_>) -> Result<(), Error> {
	Ok(())
}

/// Set which channels are subscribed to squiroll lobby updates
#[poise::command(prefix_command)]
pub async fn squiroll_channel(
	ctx: Context<'_>,
	opt: Option<String>,
	channel: Option<Channel>,
) -> Result<(), Error> {
	match opt.unwrap_or(String::new()).to_lowercase().as_str() {
		"add" => {
			if channel.is_none() {
				ctx.reply("missing channel").await?;
				return Ok(());
			}
			for (channelid, _) in &*ctx.data().squiroll_messages.read().await {
				if channel.as_ref().unwrap().id().get() == *channelid {
					ctx.reply("channel already registered").await?;
					return Ok(());
				}
			}
			// channel not already registered and can be added
			let message = channel
				.as_ref()
				.unwrap()
				.id()
				.send_message(ctx.http(), CreateMessage::new().content("init"))
				.await?;
			info!("sent new squiroll message {}", message.id.get());
			sqlx::query!(
				r#"INSERT INTO `guild` (`guild_id`, `config`)
					VALUES ( ?, JSON_INSERT('{}', '$.squiroll_messages', JSON_ARRAY(JSON_ARRAY(?,?))) )
				ON DUPLICATE KEY UPDATE
				`config` = IF(JSON_CONTAINS_PATH(`config`, 'all', '$.squiroll_messages'),
					JSON_ARRAY_APPEND(`config`, '$.squiroll_messages', JSON_ARRAY(?,?)),
					JSON_INSERT(`config`, '$.squiroll_messages', JSON_ARRAY(JSON_ARRAY(?,?)))
				)"#,
				channel.clone().unwrap().guild().unwrap().guild_id.get(),
				channel.as_ref().unwrap().id().get(),
				message.id.get(),
				channel.as_ref().unwrap().id().get(),
				message.id.get(),
				channel.as_ref().unwrap().id().get(),
				message.id.get()
			)
			.execute(&ctx.data().pool)
			.await?;
			ctx.data()
				.squiroll_messages
				.write()
				.await
				.push((channel.unwrap().id().get(), message.id.get()));
			info!("saved the message {} to the database and local vec", message.id.get());
		}
		"remove" => {
			if channel.is_none() {
				ctx.reply("missing channel").await?;
				return Ok(());
			}
			// TODO: this
			ctx.reply("todo").await?;
		}
		"removeall" => {
			// TODO: this
			ctx.reply("todo").await?;
		}
		_ => {
			ctx.reply("available options are `add [channel]`, `remove [channel]`, and `removeall`")
				.await?;
		}
	}
	Ok(())
}
