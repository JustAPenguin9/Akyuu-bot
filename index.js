// DISCORD
const Discord = require("discord.js");
const bot = new Discord.Client();

const { token } = require("./config.js");

// GOOGLE SHEETS
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require("./key.json");
const doc = new GoogleSpreadsheet("1SPHJUIq8Wi-OOJhNmgmCGrn9d7frfcjhJhWlpLT3ej0");

// GOOGLE API
async function loadSheet() {
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  await sheet.loadCells();
}

async function accessSheet() {
  await doc.useServiceAccountAuth({
    client_email: creds.client_email,
    private_key: creds.private_key,
  });
  loadSheet()
}
accessSheet();

// DATABASE
const Datastore = require('@seald-io/nedb');
const historyDb = new Datastore({ filename: "db/history.db" });
historyDb.loadDatabase();

// BOT SETUP
const prefix = "!";
const versionNum = "1.20.33.2021.69.420-buildd34db33f-alpha-beta ~~(we lost track)~~";
const fs = require("fs");
bot.commands = new Discord.Collection();
const cmdTimeout = new Set();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {

  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

bot.on("error", console.error);
bot.on("ready", () => {
  console.log(`<${bot.user.username} online>`);
  bot.user.setActivity("Touhou 15.5", { type: "PLAYING" });

  function status() {
    setInterval(() => {
      bot.user.setActivity("Touhou 15.5", { type: "PLAYING" });
    }, 900000);
  }

  status();
});

bot.on('message', (msg) => {
  if (bot.user.id !== msg.author.id && !msg.author.bot) {

    //WITHOUT PREFIX
    if (msg.content === "o/" && !msg.author.bot) {
      msg.channel.send("o/");
    }

    //WITH PREFIX
    if (msg.content.toLowerCase().startsWith(prefix)) {
      let args = msg.content.toLowerCase().substring(prefix.length).split(/\s+/);

      switch (args[0]) {
        // bot
        case "version":
          msg.channel.send(`the current version of the bot is ${versionNum}`);
          break;
        case "sync":
          loadSheet().then(msg.channel.send("**data now synced!**"));
          break;

        // links
        case "links": case "link":
          msg.channel.send(
            `**Github repo:** <https://github.com/JustAPenguin9/Akyuu-bot> \
            \n**Google sheet:** <https://docs.google.com/spreadsheets/d/1SPHJUIq8Wi-OOJhNmgmCGrn9d7frfcjhJhWlpLT3ej0/edit?usp=sharing> \
            \n**AOCF wiki:** <https://aocf.koumakan.jp/Antinomy_of_Common_Flowers_Wiki> \
            \n**AOCF starter pack** <https://drive.google.com/drive/folders/1SzdFtiB1sdAtnYtmvrsF0IBi6lXHNLl1?usp=sharing>`
          );
          break;
        case "repo": case "git": case "github":
          msg.channel.send("**Github repo:** <https://github.com/JustAPenguin9/Akyuu-bot>");
          break;

        // help
        case "help": case "commands":
          bot.commands.get("help").run(msg, args);
          break;
        case "starthere": case "starterpack": case "start":
          msg.channel.send(`Here's the link to SoG's starter pack: <https://drive.google.com/drive/folders/1SzdFtiB1sdAtnYtmvrsF0IBi6lXHNLl1?usp=sharing> \
            \nHere's the link to his post explaining it all: <https://discord.com/channels/273513597622157322/273733523829948416/850940292185456701>`);
          break;

        // moderator stuff
        case "clear":
          bot.commands.get("clear").run(msg, args);
          break;

        // rankings
        case "profile":
          bot.commands.get("profile").run(msg, historyDb);
          break;
        case "win": case "loss":
          bot.commands.get("result").run(msg, args, historyDb, cmdTimeout);
          break;

        // characters
        case "wiki":
          bot.commands.get("wiki").run(msg, args);
          break;

        case "reimu":
          bot.commands.get("reimu").run(msg, args, doc);
          break;
        case "marisa":
          bot.commands.get("marisa").run(msg, args, doc);
          break;
        case "ichirin":
          bot.commands.get("ichirin").run(msg, args, doc);
          break;
        case "byakuren": case "hijiri": case "byak":
          bot.commands.get("byakuren").run(msg, args, doc);
          break;
        case "futo":
          bot.commands.get("futo").run(msg, args, doc);
          break;
        case "miko":
          bot.commands.get("miko").run(msg, args, doc);
          break;
        case "nitori":
          bot.commands.get("nitori").run(msg, args, doc);
          break;
        case "koishi": case "koi":
          bot.commands.get("koishi").run(msg, args, doc);
          break;
        case "mamizou": case "mami":
          bot.commands.get("mamizou").run(msg, args, doc);
          break;
        case "kokoro": case "koko":
          bot.commands.get("kokoro").run(msg, args, doc);
          break;
        case "kasen":
          bot.commands.get("kasen").run(msg, args, doc);
          break;
        case "mokou":
          bot.commands.get("mokou").run(msg, args, doc);
          break;
        case "sukuna": case "shinmyoumaru": case "shimmy": case "sinmyoumaru":
          bot.commands.get("sukuna").run(msg, args, doc);
          break;
        case "sumireko": case "sumi": case "usami": case "susami":
          bot.commands.get("sumireko").run(msg, args, doc);
          break;
        case "reisen": case "udonge":
          bot.commands.get("reisen").run(msg, args, doc);
          break;
        case "doremy": case "santa":
          bot.commands.get("doremy").run(msg, args, doc);
          break;
        case "tenshi": case "tenko":
          bot.commands.get("tenshi").run(msg, args, doc);
          break;
        case "yukari": case "bestthcharacterdont@me":
          bot.commands.get("yukari").run(msg, args, doc);
          break;
        case "joon": case "jo'on": case "jyoon": case "june": case "john": case "rich":
          bot.commands.get("joon").run(msg, args, doc);
          break;
      }
    }
  }
});


bot.login(token);
