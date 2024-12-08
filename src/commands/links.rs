use crate::{Context, Error};

//TODO: make these commands ephemeral

/// Send the link to the starter pack
#[poise::command(prefix_command, slash_command, aliases("starterpack", "start", "sh", "game"))]
pub async fn starthere(ctx: Context<'_>) -> Result<(), Error> {
	ctx.reply(
		"- **sonofgod_1998's** starter pack about: <https://github.com/SonofGod1998/AoCF-Starter-Pack?tab=readme-ov-file#aocf-starter-pack>\n\
		- **sonofgod_1998's** starter pack download: <https://github.com/SonofGod1998/AoCF-Starter-Pack/releases/latest>\n\
		- Lobby mod **Squiroll** about and help: <https://discord.com/channels/273513597622157322/1315035342318862398>\n\
		- Lobby mod **Squiroll** download: <https://github.com/Dazegambler/squiroll/releases/latest>\n\
		Make sure to ask for help if you need any and have fun!",
	)
	.await?;

	Ok(())
}

/// Sends all links relevant to Akyuu
#[poise::command(prefix_command, slash_command, aliases("link"))]
pub async fn links(ctx: Context<'_>) -> Result<(), Error> {
	ctx.reply(
		"**Github repo:** <https://github.com/JustAPenguin9/Akyuu-bot>\n\
		**AoCF wiki:** <https://aocf.koumakan.jp/wiki/Antinomy_of_Common_Flowers_Wiki>\n\
		**AoCF starter pack:** <https://drive.google.com/drive/folders/1cVEb1kN7X8lOsXn6XTBN1aphOEsD6SA8?usp=sharing>\n\
		**AoCF netplay patch:** <http://lunarcast.net/aocf.php>\n\
		**Proxypunch:** <https://github.com/delthas/proxypunch/releases/latest>"
	).await?;

	Ok(())
}

/// Sends the link to Akyuu's Github page
#[poise::command(prefix_command, slash_command, aliases("repo", "git", "github"))]
pub async fn repository(ctx: Context<'_>) -> Result<(), Error> {
	ctx.reply("**Github repo:** <https://github.com/JustAPenguin9/Akyuu-bot>").await?;

	Ok(())
}
