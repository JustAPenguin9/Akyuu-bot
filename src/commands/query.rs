use poise::serenity_prelude::{
	ComponentInteractionCollector, CreateActionRow, CreateButton, CreateEmbed,
	CreateInteractionResponse, CreateInteractionResponseMessage,
};
use poise::{ChoiceParameter, CreateReply};

use crate::types::{CharacterChoices, MoveData};
use crate::{Context, Error};

/// Query the frame data for a characters move (alias for move)
#[poise::command(prefix_command, slash_command, aliases("q", "move", "m"))]
pub async fn query(
	ctx: Context<'_>,
	#[description = "Character whose move you want to query"] character: CharacterChoices,
	#[description = "Move you want to query"] input: String,
) -> Result<(), Error> {
	query_inner(ctx, character, input).await
}

/// Query the frame data for a characters move (alias for query)
#[poise::command(slash_command, rename = "move")]
pub async fn query_alias(
	ctx: Context<'_>,
	#[description = "Character whose move you want to query"] character: CharacterChoices,
	#[description = "Move you want to query"] input: String,
) -> Result<(), Error> {
	query_inner(ctx, character, input).await
}

async fn query_inner(
	ctx: Context<'_>,
	character: CharacterChoices,
	input: String,
) -> Result<(), Error> {
	let row = sqlx::query!(
		"SELECT * FROM `moves` WHERE `character` = ? and find_in_set(?, `lables`) > 0;",
		&character.name(),
		&input
	)
	.fetch_all(&ctx.data().pool)
	.await?;

	if row.is_empty() {
		ctx.say("Can't seem to find that move...").await?;
		return Ok(());
	}

	if row.len() > 1 {
		ctx.say(
			"There are multiple results when there should only be one! Someone should fix that... \
			until then I'm only using the first result.",
		)
		.await?;
	}

	let data: MoveData = serde_json::from_str(&row[0].data)?;

	let (embeds, _titles) = create_move_embeds(data, &character, &input);

	let ctx_id = ctx.id();
	let btn_id_prev = format!("{}prev", ctx_id);
	let btn_id_next = format!("{}next", ctx_id);

	// referencing the poise paginate builtin
	if embeds.len() > 1 {
		let mut page = 0;

		ctx.send(CreateReply::default().embed(embeds[page].clone()).components(vec![
			CreateActionRow::Buttons(vec![
				CreateButton::new(&btn_id_prev).emoji('◀'),
				CreateButton::new(&btn_id_next).emoji('▶'),
			]),
		]))
		.await?;

		while let Some(press) = ComponentInteractionCollector::new(ctx)
			.author_id(ctx.author().id)
			.timeout(std::time::Duration::from_secs(120))
			.filter(move |press| press.data.custom_id.starts_with(&ctx_id.to_string()))
			.await
		{
			if press.data.custom_id == btn_id_prev {
				if page == 0 {
					page = embeds.len() - 1;
				} else {
					page -= 1;
				}
			} else if press.data.custom_id == btn_id_next {
				if page == embeds.len() - 1 {
					page = 0;
				} else {
					page += 1
				}
			}

			press
				.create_response(
					ctx,
					CreateInteractionResponse::UpdateMessage(
						CreateInteractionResponseMessage::default().embed(embeds[page].clone()),
					),
				)
				.await?;
		}
	} else {
		ctx.send(CreateReply::default().embed(embeds[0].clone())).await?;
	}

	Ok(())
}

fn create_move_embeds(
	data: MoveData,
	character: &CharacterChoices,
	backup_title: &String,
) -> (Vec<CreateEmbed>, Vec<String>) {
	let mut embeds = vec![];
	let mut titles = vec![];

	for (n, var) in data.variations.iter().enumerate() {
		let mut embed = CreateEmbed::new();

		embed = embed.colour(0xB3E04D);

		if let Some(title) = &var.title {
			let real_title = format!("{} {}", character.name(), title);
			embed = embed.title(real_title);
			titles.push(title.into());
		} else {
			embed = embed.title(backup_title);
			titles.push(backup_title.clone() + " " + n.to_string().as_str());
		}

		// frame data
		if let Some(startup) = &var.startup {
			embed = embed.field("startup", startup, true);
		} else {
			embed = embed.field("startup", "?", true);
		}
		if let Some(active) = &var.active {
			embed = embed.field("active", active, true);
		} else {
			embed = embed.field("active", "?", true);
		}
		if let Some(recovery) = &var.recovery {
			embed = embed.field("recovery", recovery, true);
		} else {
			embed = embed.field("recovery", "?", true);
		}
		if let Some(damage) = &var.damage {
			embed = embed.field("damage", damage, true);
		} else {
			embed = embed.field("damage", "?", true);
		}
		if let Some(stun) = &var.stun {
			embed = embed.field("stun", stun, true);
		} else {
			embed = embed.field("stun", "?", true);
		}

		// spellcard cost
		if let Some(cost) = &var.cost {
			embed = embed.field("cost", cost, true);
		}

		// images
		if let Some(thumbnail) = &var.thumbnail {
			embed = embed.thumbnail(thumbnail);
		}
		if let Some(attachment) = &var.attachment {
			embed = embed.image(attachment);
		}

		embeds.push(embed);
	}

	(embeds, titles)
}
