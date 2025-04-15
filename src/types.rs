use poise::serenity_prelude::{ChannelId, MessageId, UserId};
use serde::{de, Deserialize, Deserializer, Serialize};
use serde_json::Value;

pub use crate::choice_parameters::*;

// TODO: the strings can be replaced with a player struct
// TODO: have a seperate LobbyMessageRaw struct that has options while the
// global struct has empty vectors
#[derive(Deserialize, Debug, Default)]
pub struct LobbyMessageRaw {
	#[serde(rename = "Free")]
	pub free: Option<Vec<String>>,
	#[serde(rename = "Novice")]
	pub novice: Option<Vec<String>>,
	#[serde(rename = "Veteran")]
	pub veteran: Option<Vec<String>>,
	#[serde(rename = "EU")]
	pub eu: Option<Vec<String>>,
	#[serde(rename = "NA")]
	pub na: Option<Vec<String>>,
	#[serde(rename = "SA")]
	pub sa: Option<Vec<String>>,
	#[serde(rename = "Asia")]
	pub asia: Option<Vec<String>>,
}

#[derive(Debug, PartialEq, Clone, Copy)]
pub enum Player {
	Generic(usize),
	Discord(UserId),
}

#[derive(Debug, Default, PartialEq, Clone)]
pub struct LobbyMessage {
	pub free: Vec<Player>,
	pub novice: Vec<Player>,
	pub veteran: Vec<Player>,
	pub eu: Vec<Player>,
	pub na: Vec<Player>,
	pub sa: Vec<Player>,
	pub asia: Vec<Player>,
}

impl From<LobbyMessageRaw> for Result<LobbyMessage, ()> {
	fn from(value: LobbyMessageRaw) -> Self {
		return Ok(LobbyMessage {
			free: LobbyMessage::parse_field(&value.free)?,
			novice: LobbyMessage::parse_field(&value.novice)?,
			veteran: LobbyMessage::parse_field(&value.veteran)?,
			eu: LobbyMessage::parse_field(&value.eu)?,
			na: LobbyMessage::parse_field(&value.na)?,
			sa: LobbyMessage::parse_field(&value.sa)?,
			asia: LobbyMessage::parse_field(&value.asia)?,
		});
	}
}

impl LobbyMessage {
	/// Changes the contents of Self depending on the contents of the LobbyMessageRaw
	pub fn from_delta(&mut self, other: &LobbyMessageRaw) -> Result<(), ()> {
		if other.free.is_some() {
			self.free = Self::parse_field(&other.free)?;
		}
		if other.novice.is_some() {
			self.novice = Self::parse_field(&other.novice)?;
		}
		if other.veteran.is_some() {
			self.veteran = Self::parse_field(&other.veteran)?;
		}
		if other.eu.is_some() {
			self.eu = Self::parse_field(&other.eu)?;
		}
		if other.na.is_some() {
			self.na = Self::parse_field(&other.na)?;
		}
		if other.sa.is_some() {
			self.sa = Self::parse_field(&other.sa)?;
		}
		if other.asia.is_some() {
			self.asia = Self::parse_field(&other.asia)?;
		}

		return Ok(());
	}

	/// vec of strings to vec of players
	fn parse_field(f: &Option<Vec<String>>) -> Result<Vec<Player>, ()> {
		let mut result = vec![];
		if let Some(v) = f {
			for p in v {
				if p.starts_with("d") {
					result.push(Player::Discord(UserId::new(p[1..].parse().map_err(|_| ())?)));
				} else if p.starts_with("th155_") {
					// should "th155_" be included in the string?
					result.push(Player::Generic(p[6..].parse().map_err(|_| ())?));
				} else {
					return Err(());
				}
			}
		}

		return Ok(result);
	}
}

// NOTE: not yet used but should be eventually
#[derive(Serialize, Deserialize)]
pub struct GuildConfig {
	#[serde(default, skip_serializing_if = "Option::is_none")]
	squiroll_messages: Option<Vec<(ChannelId, MessageId)>>,
	// tournament_organisers: Option<Vec<UserId>>,
}

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
