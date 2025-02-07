use std::{sync::Arc, time::Duration};

use tokio::{
	io::{AsyncBufReadExt, AsyncWriteExt, BufReader},
	net::TcpSocket,
	sync::Mutex,
	time::sleep,
};
use tracing::{debug, error, info, warn};

use crate::types::{LobbyMessage, LobbyMessageRaw};

pub async fn lobby_stuff(global: Arc<Mutex<LobbyMessage>>) -> ! {
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
									let mut lock = global.lock().await;
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
