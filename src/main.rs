use dotenvy::dotenv;
use poise::serenity_prelude as serenity;
use sqlx::MySqlPool;
use tracing::{error, info};

mod choice_parameters;
mod choices;
mod types;

mod commands;
use commands::*;

#[derive(Debug)]
struct Data {
	pool: MySqlPool,
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
	let db_url = std::env::var("DB_URL").expect("expected a database url in the enviornment");

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

	let framework = poise::Framework::builder()
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
			event_handler: |ctx, event, _framework, _data| {
				use serenity::FullEvent::*;
				Box::pin(async move {
					match event {
						Ready { data_about_bot } => {
							ctx.set_presence(
								Some(serenity::ActivityData::listening("Kosuzu ramble")),
								serenity::OnlineStatus::Online,
							);
							info!("<{} online>", data_about_bot.user.name)
						}
						Message { new_message } => {
							if new_message.content.starts_with("o/") && !new_message.author.bot {
								let author_name = &new_message.author.name;
								let author_id = &new_message.author.id;
								info!("{author_name} ({author_id}) called o/");

								match new_message.reply(&ctx.http, "o/").await {
									// match new_message.channel(&ctx.http).unwrap_or_else(|_| todo!()) {
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
			// TODO: remove these checks when the beta is over
			command_check: Some(|ctx| {
				Box::pin(async move {
					// always allow owner to test bot
					if ctx.framework().options().owners.contains(&ctx.author().id) {
						return Ok(true);
					}

					// if there is no guild id then the command was called in
					// dms which should be skipped
					let id = ctx.guild_id().unwrap_or(serenity::GuildId::new(1));
					let aocf_global_id = 273513597622157322;

					Ok(id == aocf_global_id)
				})
			}),
			prefix_options: poise::PrefixFrameworkOptions {
				prefix: Some(std::env::var("COMMAND_PREFIX").unwrap_or('!'.into())),
				..Default::default()
			},
			..Default::default()
		})
		.setup(move |_ctx, _ready, _framework| Box::pin(async move { Ok(Data { pool }) }))
		.build();

	let token = std::env::var("DISCORD_TOKEN").expect("missing DISCORD_TOKEN in envionment");
	let intents =
		serenity::GatewayIntents::non_privileged() | serenity::GatewayIntents::MESSAGE_CONTENT;

	let client = serenity::ClientBuilder::new(token, intents).framework(framework).await;

	client.unwrap().start().await.unwrap();
}
