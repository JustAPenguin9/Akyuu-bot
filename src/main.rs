use std::{sync::Arc, time};

use dotenvy::dotenv;
use poise::serenity_prelude as serenity;
use sqlx::MySqlPool;
use tokio::sync::RwLock;
use tracing::{debug, error, info};

mod choice_parameters;
mod choices;
mod lobby;
mod types;

mod commands;
use commands::*;
use lobby::{update_lobby_data, update_lobby_messages};
use types::LobbyMessage;

#[derive(Debug)]
struct Data {
	pool: MySqlPool,
	lobby_data: Arc<RwLock<LobbyMessage>>,
	squiroll_messages: RwLock<Vec<(u64, u64)>>,
	// (last update timestamp, last lobby state, last player count)
	lobby_messages_last_update: RwLock<(time::Instant, LobbyMessage, usize)>,
}

type Error = Box<dyn std::error::Error + Send + Sync>;
type Context<'a> = poise::Context<'a, Data, Error>;

#[tokio::main]
async fn main() {
	tracing_subscriber::fmt::init();

	if cfg!(debug_assertions) {
		// it is expected that docker/podman compose is being used when compiled in
		// release and that a .env file is not needed
		info!("using .env file");
		dotenv().expect("missing .env file");
	}

	// db stuff
	let db_url = std::env::var("DB_URL").expect("expected a database url in the environment");

	info!("connecting to the database");
	let pool = sqlx::mysql::MySqlPoolOptions::new()
		.max_connections(5)
		.connect(&db_url)
		.await
		.expect("error connecting to the database");

	info!("running migrations if any");
	sqlx::migrate!("./migrations")
		.run(&pool)
		.await
		.expect("error applying migrations to the database");

	// global squiroll data
	let lobby_data = Arc::new(RwLock::new(LobbyMessage { ..Default::default() }));
	let squiroll_messages: Vec<(u64, u64)> =
	sqlx::query!("select JSON_QUERY(`config`, '$.squiroll_messages') as arr from `guild` where JSON_CONTAINS_PATH(`config`, 'all', '$.squiroll_messages')")
		.fetch_all(&pool).await.expect("unable to query squiroll messages").into_iter().map(|record| {
			serde_json::from_slice::<Vec<(u64, u64)>>(record.arr.unwrap().as_slice())
				.expect("unable to read squiroll_message")
		}).flatten().collect();

	// communicate with squiroll lobby to get the online players
	tokio::spawn(update_lobby_data(lobby_data.clone()));

	let framework =
		poise::Framework::builder()
			.options(poise::FrameworkOptions {
				commands: vec![
					help::help(),
					owner::register(),
					// owner::resetmoves(),
					// owner::activity(),
					links::starthere(),
					links::links(),
					links::repository(),
					wiki::wiki(),
					query::query(),
					query::query_alias(),
					history::profile(),
					history::win(),
					history::loss(),
					history::set(),
					online::online(),
					config::config(),
					characters::reimu(),
					characters::marisa(),
					characters::ichirin(),
					characters::byakuren(),
					characters::futo(),
					characters::miko(),
					characters::nitori(),
					characters::koishi(),
					characters::mamizou(),
					characters::kokoro(),
					characters::kasen(),
					characters::mokou(),
					characters::sukuna(),
					characters::sumireko(),
					characters::reisen(),
					characters::doremy(),
					characters::tenshi(),
					characters::yukari(),
					characters::joon(),
				],
				event_handler: |ctx, event, _framework, data| {
					use serenity::FullEvent::*;
					Box::pin(async move {
						match event {
							Ready { data_about_bot } => {
								ctx.set_presence(
									Some(serenity::ActivityData::listening("Kosuzu ramble")),
									serenity::OnlineStatus::Online,
								);
								// initial update
								update_lobby_messages(ctx, data).await?;
								info!("<{} online>", data_about_bot.user.name);
							}
							Message { new_message } => {
								if new_message.author.bot {
									return Ok(());
								}

								// update squiroll messages if necessary
								let elapsed =
									data.lobby_messages_last_update.read().await.0.elapsed();
								if elapsed > time::Duration::from_secs(5) {
									debug!("checking squiroll changes as time has elapsed...");
									if data.lobby_messages_last_update.read().await.1
										!= *data.lobby_data.read().await
									{
										update_lobby_messages(ctx, data).await?;
										info!("updated squiroll messages");
									} else {
										debug!("no squiroll change");
									}
								}

								// handle waves
								if new_message.content.starts_with("o/") {
									let author_name = &new_message.author.name;
									let author_id = &new_message.author.id;
									info!("{author_name} ({author_id}) called o/");

									match new_message.reply(&ctx.http, "o/").await {
										Ok(_) => {
											info!("{author_name} ({author_id}) successfully called o/")
										}
										Err(error) => {
											error!(
												"{author_name} ({author_id}) failed to call o/: {:?}",
												error
											)
										}
									};
								}

								// check if a message includes a local ip and warn if so
								if let Some(caps) =
									regex::Regex::new(r"(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})")
										.unwrap()
										.captures(new_message.content.as_str())
								{
									info!("got a local ip: {}", caps[0].to_string());
									if caps[1] == *"10"
										|| (caps[1] == *"192" && caps[2] == *"168")
										|| (caps[1] == *"172"
											&& (0o16 < caps[2].parse().unwrap_or(0)
												|| caps[2].parse().unwrap_or(0) < 0o31))
										|| (caps[1] == *"127"
											&& caps[2] == *"0" && caps[3] == *"0"
											&& caps[4] == *"1")
									{
										match new_message.reply(
											&ctx.http,
											"This message seems to contain a local IP address, \
											are you sure it's good?",
										).await {
											Ok(msg) => {
												if let Err(error) = msg.react(&ctx.http, '👍').await {
													error!(
														"failed to react to message {:?}: {:?}",
														msg.id, error
													)
												};

												let collector = msg
													.await_reaction(&ctx.shard)
													.timeout(time::Duration::from_secs(60))
													.author_id(new_message.author.id);

												if let Some(_) = collector.await {
													if let Err(error) = msg.delete(&ctx.http).await {
														error!(
															"failed to delete message {:?}: {:?}",
															msg.id, error
														)
													}
												}
											}
											Err(error) => {
												error!(
													"failed to reply to local ip in message {:?}: {:?}",
													new_message.id, error
												);
											}
										}
									}
								};
							}
							_ => {}
						}
						Ok(())
					})
				},
				pre_command: |ctx| {
					Box::pin(async move {
						info!(
							"{} ({}) called {}{}",
							&ctx.author().name,
							&ctx.author().id,
							&ctx.prefix(),
							&ctx.command().name
						);
					})
				},
				post_command: |ctx| {
					Box::pin(async move {
						info!(
							"{} ({}) successfully called {}{}",
							&ctx.author().name,
							&ctx.author().id,
							&ctx.prefix(),
							&ctx.command().name
						);
					})
				},
				on_error: |error| {
					Box::pin(async move {
						use poise::FrameworkError::*;
						match error {
							Setup { error, .. } => {
								panic!("Failed to start the bot: {:?}", error)
							}
							Command { error, ctx, .. } => {
								error!(
									"{} ({}) failed to call {}{}: {:?}",
									&ctx.author().name,
									&ctx.author().id,
									&ctx.prefix(),
									&ctx.command().name,
									error
								)
							}
							CommandPanic { payload, ctx, .. } => {
								error!("Command {:?}, panicked: {:?}", ctx.command().name, payload)
							}
							EventHandler { error, event, .. } => {
								error!("Generic error from {:?}: {:?}", event, error)
							}
							_ => {} // all other errors are meaningless
						}
					})
				},
				prefix_options: poise::PrefixFrameworkOptions {
					prefix: Some(std::env::var("COMMAND_PREFIX").unwrap_or('!'.into())),
					..Default::default()
				},
				..Default::default()
			})
			.setup(move |_ctx, _ready, _framework| {
				Box::pin(async move {
					Ok(Data {
						pool,
						lobby_data,
						squiroll_messages: squiroll_messages.into(),
						lobby_messages_last_update: RwLock::new((
							time::Instant::now(),
							LobbyMessage { ..Default::default() },
							0,
						)),
					})
				})
			})
			.build();

	let token = std::env::var("DISCORD_TOKEN").expect("missing DISCORD_TOKEN in environment");
	let intents =
		serenity::GatewayIntents::non_privileged() | serenity::GatewayIntents::MESSAGE_CONTENT;

	let client = serenity::ClientBuilder::new(token, intents).framework(framework).await;

	client.unwrap().start().await.unwrap();
}
