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
	types::{LobbyMessage, LobbyMessageRaw},
	Data, Error,
};

pub async fn update_lobby_data(lobby_data: Arc<Mutex<LobbyMessage>>) -> ! {
	// wait for lobby to startup
	sleep(Duration::from_secs(10)).await;

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
	// NOTE: this is about the same as !online
	let mut count = 0;
	let (free, novice, veteran, eu, na, sa, asia);
	{
		let last = data.lobby_data.lock().await;
		let inner = &*last;
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
	let content = format!(
		"The total number of players currently waiting in the lobby is: **{count}**\n\
		Free: **{free}**, Novice: **{novice}**, Veteran: **{veteran}**, \
		EU: **{eu}**, NA: **{na}**, SA: **{sa}**, Asia: **{asia}**"
	);
	for (channelid, messageid) in &*squiroll_messages_lock {
		let mut message = ctx.http().get_message(*channelid, *messageid).await?;
		message.edit(ctx, EditMessage::new().content(&content)).await?;
	}
	let last = data.lobby_data.lock().await;
	*(data.lobby_messages_last_update.write().await) = (Instant::now(), (*last).clone());
	return Ok(());
}
