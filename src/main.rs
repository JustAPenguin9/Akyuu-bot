use dotenvy::dotenv;
use poise::serenity_prelude as serenity;
use sqlx::MySqlPool;

mod types;

mod commands;
use commands::*;

struct Data {
	pool: MySqlPool,
}
type Error = Box<dyn std::error::Error + Send + Sync>;
type Context<'a> = poise::Context<'a, Data, Error>;

// TODO: logging though tracing
#[tokio::main]
async fn main() {
	if cfg!(debug_assertions) {
		// it is expected that docker/podman compose is being used when compiled in
		// release and that a .env is not needed
		println!("using .env file");
		dotenv().expect("missing .env file");
	}

	// db stuff
	let db_url = std::env::var("DB_URL").expect("expected a database url in the enviornment");

	let pool = sqlx::mysql::MySqlPoolOptions::new()
		.max_connections(5)
		.connect(&db_url)
		.await
		.expect("error connecting to the database");

	sqlx::migrate!("./migrations")
		.run(&pool)
		.await
		.expect("error applying migrations to the database");

	let framework = poise::Framework::builder()
		.options(poise::FrameworkOptions {
			commands: vec![
				owner::register(),
				owner::resetmoves(),
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
			],
			// event_handler: ,
			// pre_command: ,
			// post_command: ,
			// TODO: remove these check
			command_check: Some(|ctx| {
				Box::pin(async move {
					// always allow owner to test bot
					if ctx.framework().options().owners.contains(&ctx.author().id) {
						return Ok(true)
					}
					
					let id = ctx.guild_id().unwrap_or(serenity::GuildId(1));
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
		.token(std::env::var("DISCORD_TOKEN").expect("missing DISCORD_TOKEN in envionment"))
		.intents(
			serenity::GatewayIntents::non_privileged() | serenity::GatewayIntents::MESSAGE_CONTENT,
		)
		.setup(move |_ctx, _ready, _framework| Box::pin(async move { Ok(Data { pool }) }));

	println!("<online>");
	framework.run().await.unwrap();
}
