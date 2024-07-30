use crate::types::WikiChoices;
use crate::{Context, Error};

/// Send the URL of the AoCF wiki
#[poise::command(prefix_command, slash_command)]
pub async fn wiki(
	ctx: Context<'_>,
	#[description = "Jump to a specific wiki page"] page: Option<WikiChoices>,
) -> Result<(), Error> {
	let link = match page {
		Some(WikiChoices::Reimu) => "Reimu_Hakurei",
		Some(WikiChoices::Marisa) => "Marisa_Kirisame",
		Some(WikiChoices::Ichirin) => "Ichirin_Kumoi",
		Some(WikiChoices::Byakuren) => "Byakuren_Hijiri",
		Some(WikiChoices::Futo) => "Mononobe_no_Futo",
		Some(WikiChoices::Miko) => "Toyosatomimi_no_Miko",
		Some(WikiChoices::Nitori) => "Nitori_Kawashiro",
		Some(WikiChoices::Koishi) => "Koishi_Komeiji",
		Some(WikiChoices::Mamizou) => "Mamizou_Futatsuiwa",
		Some(WikiChoices::Kokoro) => "Hata_no_Kokoro",
		Some(WikiChoices::Kasen) => "Kasen_Ibaraki",
		Some(WikiChoices::Mokou) => "Fujiwara_no_Mokou",
		Some(WikiChoices::Sukuna) => "Shinmyoumaru_Sukuna",
		Some(WikiChoices::Sumireko) => "Sumireko_Usami",
		Some(WikiChoices::Reisen) => "Reisen_Udongein_Inaba",
		Some(WikiChoices::Doremy) => "Doremy_Sweet",
		Some(WikiChoices::Tenshi) => "Tenshi_Hinanawi",
		Some(WikiChoices::Yukari) => "Yukari_Yakumo",
		Some(WikiChoices::Joon) => "Joon_Yorigami",
		Some(WikiChoices::Controls) => "Controls",
		Some(WikiChoices::Mechanics) => "Game_Mechanics",
		Some(WikiChoices::Glossary) => "Glossary",
		Some(WikiChoices::Modding) => "Modding",
		None => "Antinomy_of_Common_Flowers_Wiki",
	};
	ctx.reply(format!("<https://aocf.koumakan.jp/wiki/{}>", link)).await?;

	Ok(())
}
