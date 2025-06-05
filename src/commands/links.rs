use crate::{Context, Error};

/// Send the link to the starter pack
#[poise::command(prefix_command, slash_command, aliases("starterpack", "start", "sh", "game"))]
pub async fn starthere(ctx: Context<'_>) -> Result<(), Error> {
	ctx.reply(
		"- **sonofgod_1998's** AoCF starter pack [about](<https://github.com/SonofGod1998/AoCF-Starter-Pack?tab=readme-ov-file#aocf-starter-pack>)\n\
		- **sonofgod_1998's** AoCF starter pack [download](<https://github.com/SonofGod1998/AoCF-Starter-Pack/releases/latest>)\n\
		- Lobby mod **Squiroll** [about and help](<https://discord.com/channels/273513597622157322/1315035342318862398>)\n\
		- Lobby mod **Squiroll** [download](<https://github.com/Dazegambler/squiroll/releases/latest>)\n\
		Make sure to ask for help if you need any and have fun!"
	)
	.await?;

	Ok(())
}

/// Sends all links relevant to Akyuu
#[poise::command(prefix_command, slash_command, aliases("link"))]
pub async fn links(ctx: Context<'_>) -> Result<(), Error> {
	ctx.reply(
		"- Akyuu: \
		[repo](<https://github.com/JustAPenguin9/Akyuu-bot>), \
		[homepage](<https://justapenguin.ca/akyuu>)\
		\n- AoCF: \
		[wiki](<https://aocf.koumakan.jp/wiki/Antinomy_of_Common_Flowers_Wiki>), \
		[starter pack](<https://github.com/SonofGod1998/AoCF-Starter-Pack/releases/latest>)\
		\n- Netplay: \
		[Squiroll](<https://github.com/Dazegambler/squiroll/releases/latest>), \
		[Proxypunch](<https://github.com/delthas/proxypunch/releases/latest>)\
		\nAlso check out the /starthere command!",
	)
	.await?;

	Ok(())
}

/// Sends the link to Akyuu's Github page
#[poise::command(prefix_command, slash_command, aliases("repo", "git", "github"))]
pub async fn repository(ctx: Context<'_>) -> Result<(), Error> {
	ctx.reply("**Github repo:** <https://github.com/JustAPenguin9/Akyuu-bot>").await?;

	Ok(())
}

/// Sends a Notation image for AoCF
#[poise::command(prefix_command, slash_command)]
pub async fn notation(ctx: Context<'_>) -> Result<(), Error> {
	ctx.reply("https://wiki.koumakan.jp/images/aocf/f/fd/AoCF-Notations.jpg")
	.await?;

	Ok(())
}