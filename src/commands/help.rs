use poise::{serenity_prelude::CreateEmbed, CreateReply};

use crate::{Context, Error};

/// View help
#[poise::command(prefix_command, slash_command)]
pub async fn help(
	ctx: Context<'_>,
	//TODO: make it so that /help [command] gives the command description
	// #[description = "Query the help of a specific command"] command: Option<String>,
) -> Result<(), Error> {
	#[rustfmt::skip]
	let embed = CreateEmbed::new().colour(0xB3E04D).title("Akyuu commands").fields([
		(
			"Start here",
			"If you're new to AoCF call `/starthere` to see the links to \
			the starter pack and an explanation on the next steps!",
			false
		),
		(
			"Character moves",
			"Call `/query [character] [input]` to query a moves framedata.",
			false
		),
		(
			"Wiki",
			"Call `/wiki` by itself or with an argument to the right to receive a \
			link to a wiki page.",
			true
		),
		(
			"Wiki arguments",
			"Wiki arguments include any of the characters, `controls`, \
			`mechanics`, `glossary`, and `modding`.",
			true
		),
		(
			"Multiplayer",
			"Call `/win [opponent]`, `/loss [opponent]`, or `/set [wins] [opponent] \
			[losses]` to record your match history. You can also call `/profile` \
			by itself or with a user will show your, or someone else's, records.",
			false
		),
		(
			"Miscellaneous",
			"Other commands include: `/help`, `/links`, and `/repository`.",
			false
		),
	]);

	ctx.send(CreateReply::default().embed(embed).ephemeral(true)).await?;

	Ok(())
}
