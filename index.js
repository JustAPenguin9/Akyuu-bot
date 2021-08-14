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

// BOT SETUP
const prefix = "!";
var versionNum = "1.20.33.2021.69.420-buildd34db33f-alpha-beta ~~(we lost track)~~";
const fs = require("fs");
bot.characters = new Discord.Collection();

const characterFiles = fs
  .readdirSync("./characters/")
  .filter((file) => file.endsWith(".js"));
for (const file of characterFiles) {

  const character = require(`./characters/${file}`);
  bot.characters.set(character.name, character);
}

bot.on("error", console.error);
bot.on("ready", () => {
  console.log(`<${bot.user.username} online>`);
  bot.user.setActivity("Touhou 15.5", { type: "PLAYING" });

  function status() {
    setInterval( () => {
      bot.user.setActivity("Touhou 15.5", { type: "PLAYING" });
    }, 900000);
  }

  status();
});

bot.on('message', (msg) =>{
  if (bot.user.id !== msg.author.id) {

  //WITHOUT PREFIX
    if (msg.content === "o/") {
      msg.channel.send("o/");
    }

  //WITH PREFIX
    if (msg.content.toLowerCase().startsWith(prefix)) {
      let args = msg.content.toLowerCase().substring(prefix.length).split(" ");

      switch (args[0]) {
        case "version":
          msg.channel.send(`the current version of the bot is ${versionNum}`);
          break;
        case "sync":
          loadSheet().then(msg.channel.send("**data now synced!**"));
          break;
        case "links": case "link":
          msg.channel.send("**Github repo:** <https://github.com/JustAPenguin9/Akyuu-bot>\n**Google sheet:** <https://docs.google.com/spreadsheets/d/1SPHJUIq8Wi-OOJhNmgmCGrn9d7frfcjhJhWlpLT3ej0/edit?usp=sharing>\n**AOCF wiki:** <https://aocf.koumakan.jp/Antinomy_of_Common_Flowers_Wiki>\n**AOCF starter pack** <https://drive.google.com/drive/folders/1WZ-Eavwfe110xem8r1ae5SqEx6Ey3fTu?usp=sharing>");
          break;
        case "repo": case "git": case "github":
          msg.channel.send("**Github repo:** <https://github.com/JustAPenguin9/Akyuu-bot>");
          break;
        case "help": case "commands":
          /* i need to pretty this up i know -p */
          msg.channel.send("Use **![character] [move]** to get the frame data. An example would be !reimu j5a\nYou can also use **!links** and **!starterpack** to get the links the the important stuff and SoG's starterpack respectivly.");
          break;
        case "wiki":
          bot.characters.get("wiki").run(msg, args);
          break;
        case "starthere": case "starterpack": case "start":
          msg.channel.send("Here is the link to SoG's starter pack: <https://drive.google.com/drive/folders/1WZ-Eavwfe110xem8r1ae5SqEx6Ey3fTu?usp=sharing>\nHere is the link to his post explaining it all: <https://discord.com/channels/273513597622157322/273733523829948416/850940292185456701>");

        case "reimu":
          bot.characters.get("reimu").run(msg, args, doc);
          break;
        case "marisa":
          bot.characters.get("marisa").run(msg, args, doc);
          break;
        case "ichirin":
          bot.characters.get("ichirin").run(msg, args, doc);
          break;
        case "byakuren": case "hijiri": case "byak":
          bot.characters.get("byakuren").run(msg, args, doc);
          break;
        case "futo":
          bot.characters.get("futo").run(msg, args, doc);
          break;
        case "miko":
          bot.characters.get("miko").run(msg, args, doc);
          break;
        case "nitori":
          bot.characters.get("nitori").run(msg, args, doc);
          break;
        case "koishi": case "koi":
          bot.characters.get("koishi").run(msg, args, doc);
          break;
        case "mamizou": case "mami":
          bot.characters.get("mamizou").run(msg, args, doc);
          break;
        case "kokoro": case "koko":
          bot.characters.get("kokoro").run(msg, args, doc);
          break;
        case "kasen":
          bot.characters.get("kasen").run(msg, args, doc);
          break;
        case "mokou":
          bot.characters.get("mokou").run(msg, args, doc);
          break;
        case "sukuna": case "sinmyoumaru":
          bot.characters.get("sukuna").run(msg, args, doc);
          break;
        case "sumireko": case "sumi": case "usami":
          bot.characters.get("sumireko").run(msg, args, doc);
          break;
        case "reisen": case "udonge":
          bot.characters.get("reisen").run(msg, args, doc);
          break;
        case "doremy": case "santa":
          bot.characters.get("doremy").run(msg, args, doc);
          break;
        case "tenshi": case "tenko":
          bot.characters.get("tenshi").run(msg, args, doc);
          break;
        case "yukari": case "bestthcharacterdont@me":
          bot.characters.get("yukari").run(msg, args, doc);
          break;
        case "joon": case "jo'on": case "jyoon": case "june": case "john":
          bot.characters.get("joon").run(msg, args, doc);
          break;
      }
    }
  }
});


bot.login(token);