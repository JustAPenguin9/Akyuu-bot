use std::sync::Arc;

use tokio::{
	io::{AsyncBufReadExt, AsyncWriteExt, BufReader},
	net::TcpSocket,
	sync::Mutex,
};
use tracing::{debug, error, info, warn};

use crate::types::LobbyMessage;

pub async fn lobby_stuff(global: Arc<Mutex<LobbyMessage>>) -> ! {
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
			Ok(stream) => stream,
			Err(e) => {
				error!("could not connect to the lobby: {e}");
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

		let to_write = b"
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
							match serde_json::from_str::<LobbyMessage>(&msg[20..]) {
								Ok(data) => {
									info!("{:?}", data);
									if let Some(change) = data.free {
										let mut lock = global.lock().await;
										(*lock).free = Some(change);
										debug!("updated free");
									}
									if let Some(change) = data.novice {
										let mut lock = global.lock().await;
										(*lock).novice = Some(change);
										debug!("updated novice");
									}
									if let Some(change) = data.veteran {
										let mut lock = global.lock().await;
										(*lock).veteran = Some(change);
										debug!("updated veteran");
									}
									if let Some(change) = data.eu {
										let mut lock = global.lock().await;
										(*lock).eu = Some(change);
										debug!("updated eu");
									}
									if let Some(change) = data.na {
										let mut lock = global.lock().await;
										(*lock).na = Some(change);
										debug!("updated na");
									}
									if let Some(change) = data.sa {
										let mut lock = global.lock().await;
										(*lock).sa = Some(change);
										debug!("updated sa");
									}
									if let Some(change) = data.asia {
										let mut lock = global.lock().await;
										(*lock).asia = Some(change);
										debug!("updated asia");
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
