use std::{sync::Arc, time::Duration};

use poise::serenity_prelude::{CacheHttp, ChannelId, CreateMessage, EditMessage, Http, MessageId};
use tokio::{
	io::{AsyncBufReadExt, AsyncWriteExt, BufReader},
	net::TcpSocket,
	sync::{Mutex, RwLock},
	time::sleep,
};
use tracing::{debug, error, info, warn};

use crate::types::{LobbyMessage, LobbyMessageRaw, Player};

pub async fn update_lobby_data(lobby_data: Arc<RwLock<LobbyMessage>>) -> ! {
	// wait for lobby to startup
	sleep(Duration::from_secs(3)).await;

	let mut attempts = 0;

	info!("start tcp thread");
	loop {
		// TODO: move the url to a env variable
		debug!("Creating TCP socket");
		// let addr = "squiroll.justapenguin.ca:5001".parse().expect("could no parse");
		let addr = "93.127.216.159:5001".parse().expect("could not parse");
		let socket = match TcpSocket::new_v4() {
			Ok(socket) => socket,
			Err(e) => {
				error!("could not create socket: {e}");
				continue;
			}
		};
		info!("Created TCP socket");

		let mut stream = match socket.connect(addr).await {
			Ok(stream) => {
				attempts = 0;
				stream
			}
			Err(e) => {
				// try again in some ammount of seconds
				let t = std::cmp::min(30 * attempts, 60 * 2);
				error!("could not connect to the lobby trying again in {t} seconds: {e}");

				sleep(Duration::from_secs(t)).await;
				attempts += 1;
				continue;
			}
		};
		info!("accepted connection from {:?}", addr);

		let (reader, mut writer) = stream.split();
		let mut buf_reader = BufReader::new(reader);

		let mut buf = vec![];
		match buf_reader.read_until(b'\n', &mut buf).await {
			Ok(n) => debug!("read {n} bytes when testing connection"),
			Err(e) => {
				error!("could not read test from the lobby: {e}");
				continue;
			}
		};
		let out = String::from_utf8(buf).unwrap();
		if out == "E\n".to_owned() {
			info!("tcp test ok");
		} else {
			warn!("did not get the test message, instead got {:?}", out)
		}

		let to_write = b"\
NICK bot
USER bot
PASS kzxmckfqbpqieh8rw<rczuturKfnsjxhauhybttboiuuzmWdmnt5mnlczpythaxf";

		match writer.write_all(to_write).await {
			Ok(_) => info!("wrote all to {addr}"),
			Err(e) => {
				error!("could not write login: {e}");
				continue; // try again
			}
		}
		debug!("reading...");
		loop {
			let mut buf = vec![];
			match buf_reader.read_until(b'\n', &mut buf).await {
				Ok(n) => {
					if n == 0 {
						continue;
					}
					if let Ok(msg) = String::from_utf8(buf.clone()) {
						debug!("read {n} bytes saying: {msg}");
						if msg.starts_with(":LOBBY PRIVMSG bot :") {
							match serde_json::from_str::<LobbyMessageRaw>(&msg[20..]) {
								Ok(raw) => {
									if let Err(_) = lobby_data.write().await.from_delta(&raw) {
										warn!("could not parse {:?}", &raw);
									} else {
										debug!("successfully read the message and parsed it's contents");
									}
								}
								Err(e) => warn!("could not deserialise {} :: {e}", &msg[20..]),
							}
						}
					} else {
						warn!("could not parse {n} bytes to utf8: {:?}", &buf)
					}
				}
				Err(e) => {
					error!("could not read from buffer: {e}");
					continue;
				}
			}
		}
	}
}

pub async fn update_lobby_messages(
	http: Arc<Mutex<Option<Arc<Http>>>>,
	lobby_data: Arc<RwLock<LobbyMessage>>,
	squiroll_messages: Arc<RwLock<Vec<(u64, u64)>>>,
) -> ! {
	info!("start squiroll message update thread");
	let http = {
		info!("waiting on a connection to discord");
		let mut opt;
		loop {
			opt = (*http.lock().await).clone();
			debug!("http: {:?}", opt);
			if opt.is_some() {
				break;
			} else {
				sleep(Duration::from_secs(1)).await;
			}
		}
		info!("got a connection to discord");
		opt.unwrap()
	};

	let mut last_count = 0;
	let mut last_lobby = LobbyMessage::default();

	loop {
		sleep(Duration::from_secs(1)).await;
		if last_lobby == *lobby_data.read().await {
			continue;
		}

		let lobby = lobby_data.read().await;
		let count = lobby.count();
		let mut free = 0;
		let mut novice = 0;
		let mut veteran = 0;
		let mut eu = 0;
		let mut na = 0;
		let mut sa = 0;
		let mut asia = 0;

		let mut content =
			format!("The total number of players currently waiting in the lobby is: **{count}**");

		// free
		if lobby.free.len() > 0 {
			content.push_str(&format!("\n**Free: {}**", lobby.free.len()));
		}
		for player in &lobby.free {
			match player {
				Player::Generic(_) => free += 1,
				Player::Discord(user_id) => {
					if let Ok(user) = user_id.to_user(http.http()).await {
						content.push_str("\n> ");
						content.push_str(&user.global_name.unwrap_or(user.name));
					} else {
						warn!("unable to find user with the id {user_id}");
						free += 1;
						continue;
					}
				}
			}
		}
		if free == 1 {
			content.push_str(&format!("\n> {free} unknown player"));
		} else if free > 1 {
			content.push_str(&format!("\n> {free} unknown players"));
		}

		// novice
		if lobby.novice.len() > 0 {
			content.push_str(&format!("\n**novice: {}**", lobby.novice.len()));
		}
		for player in &lobby.novice {
			match player {
				Player::Generic(_) => novice += 1,
				Player::Discord(user_id) => {
					if let Ok(user) = user_id.to_user(http.http()).await {
						content.push_str("\n> ");
						content.push_str(&user.global_name.unwrap_or(user.name));
					} else {
						warn!("unable to find user with the id {user_id}");
						novice += 1;
						continue;
					}
				}
			}
		}
		if novice == 1 {
			content.push_str(&format!("\n> {novice} unknown player"));
		} else if novice > 1 {
			content.push_str(&format!("\n> {novice} unknown players"));
		}

		// veteran
		if lobby.veteran.len() > 0 {
			content.push_str(&format!("\n**veteran: {}**", lobby.veteran.len()));
		}
		for player in &lobby.veteran {
			match player {
				Player::Generic(_) => veteran += 1,
				Player::Discord(user_id) => {
					if let Ok(user) = user_id.to_user(http.http()).await {
						content.push_str("\n> ");
						content.push_str(&user.global_name.unwrap_or(user.name));
					} else {
						warn!("unable to find user with the id {user_id}");
						veteran += 1;
						continue;
					}
				}
			}
		}
		if veteran == 1 {
			content.push_str(&format!("\n> {veteran} unknown player"));
		} else if veteran > 1 {
			content.push_str(&format!("\n> {veteran} unknown players"));
		}

		// eu
		if lobby.eu.len() > 0 {
			content.push_str(&format!("\n**eu: {}**", lobby.eu.len()));
		}
		for player in &lobby.eu {
			match player {
				Player::Generic(_) => eu += 1,
				Player::Discord(user_id) => {
					if let Ok(user) = user_id.to_user(http.http()).await {
						content.push_str("\n> ");
						content.push_str(&user.global_name.unwrap_or(user.name));
					} else {
						warn!("unable to find user with the id {user_id}");
						eu += 1;
						continue;
					}
				}
			}
		}
		if eu == 1 {
			content.push_str(&format!("\n> {eu} unknown player"));
		} else if eu > 1 {
			content.push_str(&format!("\n> {eu} unknown players"));
		}

		// na
		if lobby.na.len() > 0 {
			content.push_str(&format!("\n**na: {}**", lobby.na.len()));
		}
		for player in &lobby.na {
			match player {
				Player::Generic(_) => na += 1,
				Player::Discord(user_id) => {
					if let Ok(user) = user_id.to_user(http.http()).await {
						content.push_str("\n> ");
						content.push_str(&user.global_name.unwrap_or(user.name));
					} else {
						warn!("unable to find user with the id {user_id}");
						na += 1;
						continue;
					}
				}
			}
		}
		if na == 1 {
			content.push_str(&format!("\n> {na} unknown player"));
		} else if na > 1 {
			content.push_str(&format!("\n> {na} unknown players"));
		}

		// sa
		if lobby.sa.len() > 0 {
			content.push_str(&format!("\n**sa: {}**", lobby.sa.len()));
		}
		for player in &lobby.sa {
			match player {
				Player::Generic(_) => sa += 1,
				Player::Discord(user_id) => {
					if let Ok(user) = user_id.to_user(http.http()).await {
						content.push_str("\n> ");
						content.push_str(&user.global_name.unwrap_or(user.name));
					} else {
						warn!("unable to find user with the id {user_id}");
						sa += 1;
						continue;
					}
				}
			}
		}
		if sa == 1 {
			content.push_str(&format!("\n> {sa} unknown player"));
		} else if sa > 1 {
			content.push_str(&format!("\n> {sa} unknown players"));
		}

		// asia
		if lobby.asia.len() > 0 {
			content.push_str(&format!("\n**asia: {}**", lobby.asia.len()));
		}
		for player in &lobby.asia {
			match player {
				Player::Generic(_) => asia += 1,
				Player::Discord(user_id) => {
					if let Ok(user) = user_id.to_user(http.http()).await {
						content.push_str("\n> ");
						content.push_str(&user.global_name.unwrap_or(user.name));
					} else {
						warn!("unable to find user with the id {user_id}");
						asia += 1;
						continue;
					}
				}
			}
		}
		if asia == 1 {
			content.push_str(&format!("\n> {asia} unknown player"));
		} else if asia > 1 {
			content.push_str(&format!("\n> {asia} unknown players"));
		}

		// updating messages
		let content = Arc::new(content); // so no clones per thread are needed
		for (channel_id, message_id) in squiroll_messages.read().await.clone() {
			let http = http.clone();
			let content = content.clone();

			tokio::spawn(async move {
				let mut message;
				match http.get_message(ChannelId::new(channel_id), MessageId::new(message_id)).await
				{
					Ok(m) => message = m,
					Err(e) => {
						error!(
							"Error querying the message {message_id} in channel {channel_id}: {e}"
						);
						return;
					}
				};

				// only send a ping if more players have joined
				if count >= last_count {
					// update the message and send a ping
					let (edit, ping) = tokio::join!(
						message.edit(&http, EditMessage::new().content(&*content)),
						ChannelId::new(channel_id).send_message(
							&http,
							CreateMessage::new().content("A player has joined the lobby")
						),
					);
					edit.unwrap_or_else(|e| {
						error!(
							"Error editing the message {message_id} in channel {channel_id}: {e}"
						);
					});
					match ping {
						Ok(m) => {
							m.delete(http).await.unwrap_or_else(|e| {
								error!(
									"Error deleting the lobby ping {} in channel {channel_id}: {e}",
									m.id.get()
								);
							});
						}
						Err(e) => {
							error!("Error sending the lobby ping in channel {channel_id}: {e}");
						}
					};
				} else {
					// update the message
					message.edit(http, EditMessage::new().content(&*content)).await.unwrap_or_else(
						|e| {
							error!("Error editing the message {message_id} in channel {channel_id}: {e}");
						},
					);
				}
				debug!("updated message {message_id} in channel {channel_id}");
			});
		}

		// update last
		last_lobby = lobby_data.read().await.clone();
		last_count = count;
		info!("updated all squiroll messages to a player count of: {count}");
	}
}
