# Akyuu Bot

Akyuu is a discord bot created with the [discord.js](https://github.com/discordjs/discord.js) node module. The purpose of the bot is to give players information regarding the characters in the 15.5 installment of the Touhou series *Touhou Hyouibana ~ Antinomy of Common Flowers* developed by Tasofro.

## Status

Stable but still needs work.

to do:

* add help commands for each character
* add more thumbnail attachments
* add character descriptions (about?)

## Downloading the source code

Clone the repository:
```shell
git clone **insert link to repo**
```

To update to the latest commit (needs to be done in the project directory):
```shell
git pull
```

## Creating your own version of the bot

To help further develop the bot or use the code for your own purposes add a .env, and a key.json file to the project directory.

In the .env file include:
```
TOKEN=[the token given to you through the discord developer portal]
```

The key.json file should be the file given to you when you set up the google sheets api through the google developer portal but renamed to *key*. Should look something like:
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

## When running

when running the bot make sure that you are using the current LTS version of nodejs, 14.15.4.

## Links

* [AOCF discord server](https://discord.com/invite/kfJTRBq) (the only place the official bot is being used)
* [AOCF wiki](https://aocf.koumakan.jp/Antinomy_of_Common_Flowers_Wiki) (where most of the data is taken from)
* [Google sheet](https://docs.google.com/spreadsheets/d/1SPHJUIq8Wi-OOJhNmgmCGrn9d7frfcjhJhWlpLT3ej0/edit?usp=sharing) (where all the data the bot uses is stored)