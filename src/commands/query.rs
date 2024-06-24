use poise::serenity_prelude::{self, CollectComponentInteraction, CreateEmbed};

use crate::types::{CharacterChoices, MoveData};
use crate::{Context, Error};

/// Query the frame data for a characters move (alias for move)
#[poise::command(prefix_command, track_edits, slash_command, aliases("q", "move", "m"))]
pub async fn query(
	ctx: Context<'_>,
	#[description = "Character whose move you want to query"] character: CharacterChoices,
	#[description = "Move you want to query"] input: String,
) -> Result<(), Error> {
	query_inner(ctx, character, input).await
}

/// Query the frame data for a characters move (alias for query)
#[poise::command(prefix_command, track_edits, slash_command, rename = "move")]
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
		"SELECT * FROM `moves` where `character` = ? and find_in_set(?, `lables`) > 0;",
		&character.to_string(),
		&input
	)
	.fetch_all(&ctx.data().pool)
	.await?;

	if row.is_empty() {
		ctx.say("Can't seem to find that move...").await?;
		return Ok(());
	}

	if row.len() > 1 {
		ctx.say("There are multiple results when there should only be one! Someone should fix that... until then I'm only using the first result.").await?;
	}

	let data: MoveData = serde_json::from_str(&row[0].data)?;

	let (embeds, titles) = create_move_embeds(data, &character, &input);

	let ctx_id = ctx.id();
	let btn_id_prev = format!("{}prev", ctx_id);
	let btn_id_next = format!("{}next", ctx_id);

	// referencing the poise paginate builtin
	if embeds.len() > 1 {
		let mut page = 0;

		ctx.send(|r| {
			r.embeds = vec![embeds[page].clone()];
			r.components(|c| {
				c.create_action_row(|ar| {
					ar.create_button(|b| b.emoji('◀').custom_id(&btn_id_prev))
						.create_button(|b| b.emoji('▶').custom_id(&btn_id_next))
				})
			})
		})
		.await?;

		while let Some(press) = CollectComponentInteraction::new(ctx)
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
				.create_interaction_response(ctx, |b| {
					b.kind(serenity_prelude::InteractionResponseType::UpdateMessage)
						.interaction_response_data(|d| d.set_embed(embeds[page].clone()))
				})
				.await?;
		}
	} else {
		ctx.send(|r| {
			r.embeds = vec![embeds[0].clone()];
			r
		})
		.await?;
	}

	Ok(())
}

fn create_move_embeds(
	data: MoveData,
	character: &CharacterChoices,
	q: &String,
) -> (Vec<CreateEmbed>, Vec<String>) {
	// FIX: could be cleaner
	let mut embeds = vec![];
	// TODO: something with this variable
	let mut titles = vec![];

	for var in data.variations.iter() {
		let mut embed = CreateEmbed::default();

		embed.colour(0xB3E04D);

		if let Some(title) = &var.title {
			let real_title = format!("{} {}", character.to_string(), title);
			embed.title(real_title);
			titles.push(title.into());
		} else {
			embed.title(q);
			titles.push("missing title".into());
		}

		// frame data
		if let Some(startup) = &var.startup {
			embed.field("startup", startup, true);
		} else {
			embed.field("startup", "?", true);
		}
		if let Some(active) = &var.active {
			embed.field("active", active, true);
		} else {
			embed.field("active", "?", true);
		}
		if let Some(recovery) = &var.recovery {
			embed.field("recovery", recovery, true);
		} else {
			embed.field("recovery", "?", true);
		}
		if let Some(damage) = &var.damage {
			embed.field("damage", damage, true);
		} else {
			embed.field("damage", "?", true);
		}
		if let Some(stun) = &var.stun {
			embed.field("stun", stun, true);
		} else {
			embed.field("stun", "?", true);
		}

		// spellcard cost
		if let Some(cost) = &var.cost {
			embed.field("cost", cost, true);
		}

		// images
		if let Some(thumbnail) = &var.thumbnail {
			embed.thumbnail(thumbnail);
		}
		if let Some(attachment) = &var.attachment {
			embed.image(attachment);
		}

		embeds.push(embed);
	}

	return (embeds, titles);
}
