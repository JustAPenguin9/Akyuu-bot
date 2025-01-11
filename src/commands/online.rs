use crate::{Context, Error};

/// Get the number of players waiting in the Squiroll lobby
#[poise::command(prefix_command, slash_command, aliases("lobby", "squiroll"))]
pub async fn online(ctx: Context<'_>) -> Result<(), Error> {
	let mut count = 0;
	let free;
	let novice;
	let veteran;
	let eu;
	let na;
	let sa;
	let asia;
	{
		let lock = ctx.data().lobby_data.lock().await;
		count += (*lock).free.len();
		free = (*lock).free.len();
		count += (*lock).novice.len();
		novice = (*lock).novice.len();
		count += (*lock).veteran.len();
		veteran = (*lock).veteran.len();
		count += (*lock).eu.len();
		eu = (*lock).eu.len();
		count += (*lock).na.len();
		na = (*lock).na.len();
		count += (*lock).sa.len();
		sa = (*lock).sa.len();
		count += (*lock).asia.len();
		asia = (*lock).asia.len();
	}
	ctx.reply(format!(
		"The total number of players currently waiting in the lobby is: **{count}**\n\
		Free: **{free}**, Novice: **{novice}**, Veteran: **{veteran}**, \
		EU: **{eu}**, NA: **{na}**, SA: **{sa}**, Asia: **{asia}**"
	))
	.await?;

	Ok(())
}
