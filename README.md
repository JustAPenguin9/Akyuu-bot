# Akyuu Bot

Akyuu is a discord bot created with [Poise](https://crates.io/crates/poise). The purpose of the bot is to give players information regarding the characters in the 15.5 installment of the Touhou series *Touhou Hyouibana ~ Antinomy of Common Flowers* developed by [Twilight Frontier](https://en.touhouwiki.net/wiki/Twilight_Frontier).

## Running Akyuu

Clone the repository:
```shell
git clone https://github.com/JustAPenguin9/Akyuu-bot.git
```

**If a database already exists that was used with JS Akyuu** leave it as is because the initial migration transitions it to the new format.

**If you are importing a `mariadb-dump` or `mysql-dump`** name the file "dump.sql" and run `./import-sql-dump.sh` before running Akyuu for the first time to set it up for the initial migration.

[After a MariaDB or MySQL database is setup](#running-the-database-using-containers), either by itself or though a container, [create a .env file](#envionment-variables) and run Akyuu.

```shell
cargo run
# OR
podman compose up -d --build
# OR
docker compose up -d --build
```

### Populating the moves table

After running the migrations (migrations are ran when Akyuu is ran) use `./import-character-sql.sh` to to include all the moves in ./character-sql/* in the `moves` table.

### Environment variables

In the .env file include:
```dosini
DISCORD_TOKEN=[the token given to you through the discord developer portal]
COMMAND_PREFIX=[the prefix to all commands, by default it is "!"]

DB_PASSWORD=[password to the database]
DB_URL=[this will likely be "mariadb://akyuu:${DB_PASSWORD}@127.0.0.1:3306/akyuu_records"]
```

## Running the database using containers

```shell
podman compose -f db.docker-compose.yaml up -d
# OR
docker compose -f db.docker-compose.yaml up -d
```

## Migrations

Migrations are checked and ran when Akyuu is ran but they can also be manually applied and reverted using the [sqlx cli](https://crates.io/crates/sqlx-cli) eg.

```shell
DATABASE_URL=mariadb://akyuu:$PASSWORD@127.0.0.1:3306/akyuu_records 
cargo sqlx mig run
cargo sqlx prepare
``` 

# Thanks to

@sonofgod_1998<br>
@degaliuss<br>
nimiala#8595<br>
@cabadmdp<br>
@elysiastarlight<br>
@gato_rescatador<br>
@alariuss<br>
for contributing through Discord

# Links

* [AOCF discord server](https://discord.com/invite/kfJTRBq) - the only place the official bot is being used
* [AOCF wiki](https://aocf.koumakan.jp/wiki/Antinomy_of_Common_Flowers_Wiki) - where most of the data is taken from
