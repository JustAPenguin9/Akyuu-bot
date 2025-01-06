use crate::{Context, Error};

/// Get the number of players waiting in the Squiroll lobby
#[poise::command(prefix_command, slash_command, aliases("lobby", "squiroll"))]
pub async fn online(ctx: Context<'_>) -> Result<(), Error> {
	let mut count = 0;
	let mut free = 0;
	let mut novice = 0;
	let mut veteran = 0;
	let mut eu = 0;
	let mut na = 0;
	let mut sa = 0;
	let mut asia = 0;
	{
		let lock = ctx.data().lobby_data.lock().await;
		if let Some(arr) = &(*lock).free {
			count += arr.len();
			free = arr.len();
		}
		if let Some(arr) = &(*lock).novice {
			count += arr.len();
			novice = arr.len();
		}
		if let Some(arr) = &(*lock).veteran {
			count += arr.len();
			veteran = arr.len();
		}
		if let Some(arr) = &(*lock).eu {
			count += arr.len();
			eu = arr.len();
		}
		if let Some(arr) = &(*lock).na {
			count += arr.len();
			na = arr.len();
		}
		if let Some(arr) = &(*lock).sa {
			count += arr.len();
			sa = arr.len();
		}
		if let Some(arr) = &(*lock).asia {
			count += arr.len();
			asia = arr.len();
		}
	}
	ctx.reply(format!(
		"The total number of players currently waiting in the lobby is: **{count}**\n\
		Free: **{free}**, Novice: **{novice}**, Veteran: **{veteran}**, \
		EU: **{eu}**, NA: **{na}**, SA: **{sa}**, Asia: **{asia}**"
	))
	.await?;

	Ok(())
}
