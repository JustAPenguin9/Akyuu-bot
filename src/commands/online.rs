use crate::{Context, Error};

/// Get the number of players waiting in the Squiroll lobby
#[poise::command(prefix_command, slash_command, aliases("lobby", "squiroll"))]
pub async fn online(ctx: Context<'_>) -> Result<(), Error> {
	let mut count = 0;
	{
		let lock = ctx.data().lobby_data.lock().await;
		if let Some(arr) = &(*lock).free {
			count += arr.len();
		}
		if let Some(arr) = &(*lock).novice {
			count += arr.len();
		}
		if let Some(arr) = &(*lock).veteran {
			count += arr.len();
		}
		if let Some(arr) = &(*lock).eu {
			count += arr.len();
		}
		if let Some(arr) = &(*lock).na {
			count += arr.len();
		}
		if let Some(arr) = &(*lock).sa {
			count += arr.len();
		}
		if let Some(arr) = &(*lock).asia {
			count += arr.len();
		}
	}
	ctx.reply(format!(
		"The total number of players currently waiting in the lobby is: **{}**",
		count
	))
	.await?;

	Ok(())
}
