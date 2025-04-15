use crate::{Context, Error};

/// Get the number of players waiting in the Squiroll lobby
#[poise::command(prefix_command, slash_command, aliases("lobby", "squiroll"))]
pub async fn online(ctx: Context<'_>) -> Result<(), Error> {
	let mut count = 0;
	let (free, novice, veteran, eu, na, sa, asia);
	{
		let lock = ctx.data().lobby_data.lock().await;
		let inner = &*lock;
		count += inner.free.len();
		free = inner.free.len();
		count += inner.novice.len();
		novice = inner.novice.len();
		count += inner.veteran.len();
		veteran = inner.veteran.len();
		count += inner.eu.len();
		eu = inner.eu.len();
		count += inner.na.len();
		na = inner.na.len();
		count += inner.sa.len();
		sa = inner.sa.len();
		count += inner.asia.len();
		asia = inner.asia.len();
	}
	ctx.reply(format!(
		"The total number of players currently waiting in the lobby is: **{count}**\n\
		Free: **{free}**, Novice: **{novice}**, Veteran: **{veteran}**, \
		EU: **{eu}**, NA: **{na}**, SA: **{sa}**, Asia: **{asia}**"
	))
	.await?;

	Ok(())
}
