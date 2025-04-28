use crate::{Context, Error};

/// Get the number of players waiting in the Squiroll lobby
#[poise::command(prefix_command, slash_command, aliases("lobby", "squiroll"))]
pub async fn online(ctx: Context<'_>) -> Result<(), Error> {
	let lobby = ctx.data().lobby_data.read().await;
	ctx.reply(format!(
		"The total number of players currently waiting in the lobby is: **{}**\n\
		Free: **{}**, Novice: **{}**, Veteran: **{}**, \
		EU: **{}**, NA: **{}**, SA: **{}**, Asia: **{}**",
		lobby.count(),
		lobby.free.len(),
		lobby.novice.len(),
		lobby.veteran.len(),
		lobby.eu.len(),
		lobby.na.len(),
		lobby.sa.len(),
		lobby.asia.len()
	))
	.await?;

	Ok(())
}
