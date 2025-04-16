use std::{
	sync::Arc,
	time::{Duration, Instant},
};

use poise::serenity_prelude::{CacheHttp, Context, EditMessage};
use tokio::{
	io::{AsyncBufReadExt, AsyncWriteExt, BufReader},
	net::TcpSocket,
	sync::Mutex,
	time::sleep,
};
use tracing::{debug, error, info, warn};

use crate::{
	types::{LobbyMessage, LobbyMessageRaw, Player},
	Data, Error,
};

pub async fn update_lobby_data(lobby_data: Arc<Mutex<LobbyMessage>>) -> ! {
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
						info!("read {n} bytes saying: {msg}");
						if msg.starts_with(":LOBBY PRIVMSG bot :") {
							match serde_json::from_str::<LobbyMessageRaw>(&msg[20..]) {
								Ok(raw) => {
									let mut lock = lobby_data.lock().await;
									if let Err(_) = (*lock).from_delta(&raw) {
										warn!("could not parse {:?}", &raw);
									} else {
										info!("successfully read the message and parsed it's contents");
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
	ctx: &Context,
	data: &Data,
	// framework: FrameworkContext<'_>,
	// lobby_data: Arc<Mutex<LobbyMessage>>,
	// lobby_messages: Arc<Vec<Message>>,
) -> Result<(), Error> {
	let squiroll_messages_lock = data.squiroll_messages.lock().await;
	let mut count = 0;
	let mut free = 0;
	let mut novice = 0;
	let mut veteran = 0;
	let mut eu = 0;
	let mut na = 0;
	let mut sa = 0;
	let mut asia = 0;
	let lobby = {
		let last = data.lobby_data.lock().await;
		let inner = &*last;
		count += inner.free.len();
		count += inner.novice.len();
		count += inner.veteran.len();
		count += inner.eu.len();
		count += inner.na.len();
		count += inner.sa.len();
		count += inner.asia.len();
		inner.clone() // lobby
	};

	let mut content =
		format!("The total number of players currently waiting in the lobby is: **{count}**");

	// free
	if lobby.free.len() > 0 {
		content.push_str(&format!("\n**Free: {}**", lobby.free.len()));
	}
	for player in lobby.free {
		match player {
			Player::Generic(_) => free += 1,
			Player::Discord(user_id) => {
				if let Ok(user) = user_id.to_user(ctx.http()).await {
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
	for player in lobby.novice {
		match player {
			Player::Generic(_) => novice += 1,
			Player::Discord(user_id) => {
				if let Ok(user) = user_id.to_user(ctx.http()).await {
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
	for player in lobby.veteran {
		match player {
			Player::Generic(_) => veteran += 1,
			Player::Discord(user_id) => {
				if let Ok(user) = user_id.to_user(ctx.http()).await {
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
	for player in lobby.eu {
		match player {
			Player::Generic(_) => eu += 1,
			Player::Discord(user_id) => {
				if let Ok(user) = user_id.to_user(ctx.http()).await {
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
	for player in lobby.na {
		match player {
			Player::Generic(_) => na += 1,
			Player::Discord(user_id) => {
				if let Ok(user) = user_id.to_user(ctx.http()).await {
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
	for player in lobby.sa {
		match player {
			Player::Generic(_) => sa += 1,
			Player::Discord(user_id) => {
				if let Ok(user) = user_id.to_user(ctx.http()).await {
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
	for player in lobby.asia {
		match player {
			Player::Generic(_) => asia += 1,
			Player::Discord(user_id) => {
				if let Ok(user) = user_id.to_user(ctx.http()).await {
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
	for (channelid, messageid) in &*squiroll_messages_lock {
		let mut message;
		match ctx.http().get_message(*channelid, *messageid).await {
			Ok(m) => message = m,
			Err(e) => {
				error!("Error querying the message {messageid}: {e}");
				continue;
			}
		};
		message.edit(ctx, EditMessage::new().content(&content)).await.unwrap_or_else(|e| {
			error!("Error editing the message {messageid}: {e}");
		});
	}
	// update last
	let last = data.lobby_data.lock().await;
	*(data.lobby_messages_last_update.write().await) = (Instant::now(), (*last).clone());

	return Ok(());
}
