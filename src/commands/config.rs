use poise::serenity_prelude::{Channel, CreateMessage, GuildId};
use tracing::{error, info};

use crate::{types::GuildConfig, Context, Error};

/// Edit the servers config (admins only)
#[poise::command(
	prefix_command,
	hide_in_help,
	guild_only,
	required_permissions = "ADMINISTRATOR",
	subcommands("squiroll_channel"),
	subcommand_required
)]
pub async fn config(ctx: Context<'_>) -> Result<(), Error> {
	ctx.reply("Available subcommands: `squiroll_channel`").await?;
	Ok(())
}

#[derive(poise::ChoiceParameter, Debug)]
pub enum SquirollChannelChoices {
	Add,
	List,
	Remove,
	RemoveAll,
}

/// Set which channels are subscribed to squiroll lobby updates
#[poise::command(prefix_command)]
pub async fn squiroll_channel(
	ctx: Context<'_>,
	opt: Option<SquirollChannelChoices>,
	channel: Option<Channel>,
) -> Result<(), Error> {
	info!("{:?}", opt);
	if opt.is_none() {
		ctx.reply(
			"available options are `list`, `add [channel]`, `remove [channel]`, and `removeall`",
		)
		.await?;
		return Ok(());
	}
	let opt = opt.unwrap();
	match opt {
		SquirollChannelChoices::List => {
			let config = get_guild_config(ctx, ctx.guild_id().unwrap()).await;

			if config.is_err() {
				error!("Error receiving config for guild: {:?}", ctx.guild_id());
				ctx.reply("Can not find squiroll channels registered in this guild.").await?;
				return Ok(());
			}

			let squiroll_messages = config.unwrap().squiroll_messages;
			if squiroll_messages.is_none() || squiroll_messages.as_ref().unwrap().len() == 0 {
				ctx.reply("There are no squiroll channels registered in this guild.").await?;
				return Ok(());
			}
			let squiroll_messages = squiroll_messages.unwrap();
			if squiroll_messages.len() == 1 {
				ctx.reply(format!(
					"The current channel is: <#{}>",
					squiroll_messages.first().unwrap().1.get()
				))
				.await?;
			} else {
				let mut msg: String = "The current channels are: ".into();
				for (ch, _) in squiroll_messages {
					msg.push_str("<#");
					msg.push_str(&ch.get().to_string());
					msg.push_str("> ");
				}
				ctx.reply(msg).await?;
			}
		}
		SquirollChannelChoices::Add => {
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

			let channel_id = channel.as_ref().unwrap().id().get();
			let message_id = message.id.get();
			sqlx::query!(
				r#"INSERT INTO `guild` (`guild_id`, `config`)
					VALUES ( ?, JSON_INSERT('{}', '$.squiroll_messages', JSON_ARRAY(JSON_ARRAY(?,?))) )
				ON DUPLICATE KEY UPDATE
				`config` = IF(JSON_CONTAINS_PATH(`config`, 'all', '$.squiroll_messages'),
					JSON_ARRAY_APPEND(`config`, '$.squiroll_messages', JSON_ARRAY(?,?)),
					JSON_INSERT(`config`, '$.squiroll_messages', JSON_ARRAY(JSON_ARRAY(?,?)))
				)"#,
				ctx.guild_id().unwrap().get(),
				channel_id,
				message_id,
				channel_id,
				message_id,
				channel_id,
				message_id
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
		SquirollChannelChoices::Remove => {
			if channel.is_none() {
				ctx.reply("missing channel").await?;
				return Ok(());
			}
			// TODO: this
			ctx.reply("todo").await?;
		}
		SquirollChannelChoices::RemoveAll => {
			// TODO: this
			ctx.reply("todo").await?;
		}
	}
	Ok(())
}

async fn get_guild_config(ctx: Context<'_>, guild_id: GuildId) -> Result<GuildConfig, Error> {
	let guild_id = guild_id.get();
	let row = sqlx::query!("SELECT * FROM `guild` WHERE `guild_id` = ?", guild_id)
		.fetch_one(&ctx.data().pool) // UNIQUE
		.await?;
	let config: GuildConfig = serde_json::from_slice(&row.config)?;
	Ok(config)
}
