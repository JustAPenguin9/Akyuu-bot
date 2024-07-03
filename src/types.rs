use serde::{de, Deserialize, Deserializer, Serialize};
use serde_json::Value;

// TODO: rename "variation" to "page" and add an option for a list of "option"s
// that have emojis associated to each "option" in the list
// pages have left/right arrows
// options have emojis (especially useful for kokoro)

#[derive(Serialize, Deserialize)]
pub struct MoveData {
	pub variations: Vec<Variation>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Variation {
	pub title: Option<String>,
	#[serde(deserialize_with = "de_num_str_as_frames", default)]
	pub startup: Option<String>,
	#[serde(deserialize_with = "de_num_str_as_frames", default)]
	pub active: Option<String>,
	#[serde(deserialize_with = "de_num_str_as_frames", default)]
	pub recovery: Option<String>,
	#[serde(deserialize_with = "de_num_str", default)]
	pub damage: Option<String>,
	#[serde(deserialize_with = "de_num_str", default)]
	pub stun: Option<String>,
	#[serde(deserialize_with = "de_num_str", default)]
	pub cost: Option<String>,

	pub attachment: Option<String>,
	pub thumbnail: Option<String>,
}

fn de_num_str_as_frames<'de, D: Deserializer<'de>>(
	deserializer: D,
) -> Result<Option<String>, D::Error> {
	Ok(match Value::deserialize(deserializer)? {
		Value::String(s) => Some(s),
		Value::Number(n) => Some(n.to_string() + "f"),
		_ => return Err(de::Error::custom("wrong type")),
	})
}

fn de_num_str<'de, D: Deserializer<'de>>(deserializer: D) -> Result<Option<String>, D::Error> {
	Ok(match Value::deserialize(deserializer)? {
		Value::String(s) => Some(s),
		Value::Number(n) => Some(n.to_string()),
		_ => return Err(de::Error::custom("wrong type")),
	})
}

#[derive(Debug, poise::ChoiceParameter)]
pub enum CharacterChoices {
	#[name = "Reimu Hakurei"]
	#[name = "reimu"]
	#[name = "reimoo"]
	Reimu,
	#[name = "Marisa Kirisame"]
	#[name = "marisa"]
	Marisa,
	#[name = "Ichirin Kumoi"]
	#[name = "ichirin"]
	Ichirin,
	#[name = "Byakuren Hijiri"]
	#[name = "byakuren"]
	#[name = "hijiri"]
	#[name = "byak"]
	Byakuren,
	#[name = "Mononobe no Futo"]
	#[name = "futo"]
	Futo,
	#[name = "Toyosatomimi no Miko"]
	#[name = "miko"]
	Miko,
	#[name = "Nitori Kawashiro"]
	#[name = "nitori"]
	Nitori,
	#[name = "Koishi Komeiji"]
	#[name = "koishi"]
	#[name = "koi"]
	Koishi,
	#[name = "Mamizou Futatsuiwa"]
	#[name = "mamizou"]
	Mamizou,
	#[name = "Hata no Kokoro"]
	#[name = "kokoro"]
	#[name = "koko"]
	Kokoro,
	#[name = "Kasen Ibaraki"]
	#[name = "kasen"]
	Kasen,
	#[name = "Fujiwara no Mokou"]
	#[name = "mokou"]
	Mokou,
	#[name = "Shinmyoumaru Sukuna"]
	#[name = "sukuna"]
	#[name = "shinmyoumaru"]
	#[name = "shimmy"]
	#[name = "sinmyoumaru"]
	Sukuna,
	#[name = "Sumireko Usami"]
	#[name = "sumireko"]
	#[name = "sumi"]
	#[name = "usami"]
	#[name = "susami"]
	Sumireko,
	#[name = "Reisen Udongein Inaba"]
	#[name = "reisen"]
	#[name = "udonge"]
	Reisen,
	#[name = "Doremy Sweet"]
	#[name = "doremy"]
	#[name = "santa"]
	Doremy,
	#[name = "Tenshi Hinanawi"]
	#[name = "tenshi"]
	#[name = "tenko"]
	Tenshi,
	#[name = "Yukari Yakumo"]
	#[name = "yukari"]
	#[name = "bestthcharacterdont@me"]
	Yukari,
	#[name = "Joon Yorigami"]
	#[name = "joon"]
	#[name = "jo'on"]
	#[name = "jyoon"]
	#[name = "june"]
	#[name = "john"]
	#[name = "john"]
	Joon,
}

// FIX: dumb
#[derive(Debug, poise::ChoiceParameter)]
pub enum WikiChoices {
	// wiki specific
	Controls,
	Mechanics,
	Glossary,
	#[name = "Modding"]
	#[name = "mods"]
	#[name = "mod"]
	Modding,

	// just the characters (again)
	#[name = "Reimu Hakurei"]
	#[name = "reimu"]
	#[name = "reimoo"]
	Reimu,
	#[name = "Marisa Kirisame"]
	#[name = "marisa"]
	Marisa,
	#[name = "Ichirin Kumoi"]
	#[name = "ichirin"]
	Ichirin,
	#[name = "Byakuren Hijiri"]
	#[name = "byakuren"]
	#[name = "hijiri"]
	#[name = "byak"]
	Byakuren,
	#[name = "Mononobe no Futo"]
	#[name = "futo"]
	Futo,
	#[name = "Toyosatomimi no Miko"]
	#[name = "miko"]
	Miko,
	#[name = "Nitori Kawashiro"]
	#[name = "nitori"]
	Nitori,
	#[name = "Koishi Komeiji"]
	#[name = "koishi"]
	#[name = "koi"]
	Koishi,
	#[name = "Mamizou Futatsuiwa"]
	#[name = "mamizou"]
	Mamizou,
	#[name = "Hata no Kokoro"]
	#[name = "kokoro"]
	#[name = "koko"]
	Kokoro,
	#[name = "Kasen Ibaraki"]
	#[name = "kasen"]
	Kasen,
	#[name = "Fujiwara no Mokou"]
	#[name = "mokou"]
	Mokou,
	#[name = "Shinmyoumaru Sukuna"]
	#[name = "sukuna"]
	#[name = "shinmyoumaru"]
	#[name = "shimmy"]
	#[name = "sinmyoumaru"]
	Sukuna,
	#[name = "Sumireko Usami"]
	#[name = "sumireko"]
	#[name = "sumi"]
	#[name = "usami"]
	#[name = "susami"]
	Sumireko,
	#[name = "Reisen Udongein Inaba"]
	#[name = "reisen"]
	#[name = "udonge"]
	Reisen,
	#[name = "Doremy Sweet"]
	#[name = "doremy"]
	#[name = "santa"]
	Doremy,
	#[name = "Tenshi Hinanawi"]
	#[name = "tenshi"]
	#[name = "tenko"]
	Tenshi,
	#[name = "Yukari Yakumo"]
	#[name = "yukari"]
	#[name = "bestthcharacterdont@me"]
	Yukari,
	#[name = "Joon Yorigami"]
	#[name = "joon"]
	#[name = "jo'on"]
	#[name = "jyoon"]
	#[name = "june"]
	#[name = "john"]
	#[name = "john"]
	Joon,
}
