# Akyuu Bot

Akyuu is a discord bot created with the [discord.js](https://github.com/discordjs/discord.js) node module. The purpose of the bot is to give players information regarding the characters in the 15.5 installment of the Touhou series *Touhou Hyouibana ~ Antinomy of Common Flowers* developed by Tasofro.


## Downloading the source code

Clone the repository:
```shell
git clone https://github.com/JustAPenguin9/Akyuu-bot.git
```

To get the node packages (needs to be done in the project directory):
```shell
npm install
```

To update to the latest commit (needs to be done in the project directory):
```shell
git pull
```

## Creating your own version of the bot

To help further develop the bot or use the code for your own purposes add a .env, and a key.json file to the project directory.

In the .env file include:
```dosini
TOKEN=[the token given to you through the discord developer portal]
PREFIX=[the prefix to all commands, commonly "!"]
SPREADSHEETID=1SPHJUIq8Wi-OOJhNmgmCGrn9d7frfcjhJhWlpLT3ej0

DB_Host=[probably localhost]
DB_USER=[your username]
DB_PASSWORD=[your password]
DB_NAME=[name of your database]
```

The key.json file should be the file given to you when you set up the google sheets api through the [google developer portal](https://console.cloud.google.com/) but renamed to *key*. Should look something like:
```json
{
  "type": "service_account",
  "project_id": "discord-bot",
  "private_key_id": "",
  "private_key": "",
  "client_email": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": ""
}
```

As of commit [b6150ac](https://github.com/JustAPenguin9/Akyuu-bot/commit/b6150ac081b50b7181784f0118818977b93e49b0), Akyuu went from using [nedb](https://github.com/seald/nedb) to MariaDB for storing game results. Akyuu requires a table called history with fields for the id, winner discord client id, loser discord client id, and timestamp.
```sql
CREATE TABLE history (
  id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
  winner VARCHAR(18) NOT NULL,
  loser VARCHAR(18) NOT NULL,
  time VARCHAR(13) NOT NULL
);
```

## Running the bot

In the project directory:
```shell
node .
```

# Thanks to

@sonofgod_1998<br>
@degaliuss<br>
nimiala#8595<br>
@cabadmdp<br>
@elysiastarlight<br>
@gato_rescatador<br>
for contributing through Discord

## Links

* [AOCF discord server](https://discord.com/invite/kfJTRBq) - the only place the official bot is being used
* [AOCF wiki](https://aocf.koumakan.jp/wiki/Antinomy_of_Common_Flowers_Wiki) - where most of the data is taken from
* [Google sheet](https://docs.google.com/spreadsheets/d/1SPHJUIq8Wi-OOJhNmgmCGrn9d7frfcjhJhWlpLT3ej0/edit?usp=sharing) - where all the data the bot uses is stored
