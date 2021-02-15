// DISCORD
const { Client, RichEmbed, Attachment, member } = require("discord.js");
const Discord = require("discord.js");
const bot = new Discord.Client();

const { token } = require("./config.js");

// GOOGLE SHEETS
const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require("./key.json");
const doc = new GoogleSpreadsheet("1SPHJUIq8Wi-OOJhNmgmCGrn9d7frfcjhJhWlpLT3ej0");

// GOOGLE API
async function accessSheet() {
    await doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });
  
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells();
}
accessSheet();

setInterval(async () => {
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  await sheet.loadCells();
}, 180000);


// BOT SETUP
const prefix = "!";
var versionNum = "1.0";
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
  console.log("<bot online>");
  bot.user.setActivity("Touhou 15.5", { type: "PLAYING" });

  // function status() {
  //   setInterval(function () {
  //     bot.user.setActivity("Touhou 15.5", { type: "PLAYING" });
  //   }, 900000);
  // }

  // status();
});

bot.on('message', (msg) =>{
  
  //WITHOUT PREFIX
  if (bot.user.id !== msg.author.id) {
    if (msg.content === "o/") {
      msg.channel.send("o/");
    }
  
  //WITH PREFIX
    if (msg.content.toLowerCase().startsWith(prefix)) {
      let args = msg.content.substring(prefix.length).split(" ");

      switch (args[0]) {
        case "version":
          msg.channel.send(`the current version is ${versionNum}`);
          break;
        case "help":
          msg.channel.send("do ![character] [move] \r an example is !reimu j5a")
        case "reimu":
          bot.characters.get("reimu").run(msg, args, doc);
          break;
        case "marisa":
          bot.characters.get("marisa").run(msg, args, doc);
          break;
        case "ichirin":
          bot.characters.get("ichirin").run(msg, args, doc);
          break;
        case "byakuren":
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
        case "koishi":
          bot.characters.get("koishi").run(msg, args, doc);
          break;
        case "mamizou":
          bot.characters.get("mamizou").run(msg, args, doc);
          break;
        case "kokoro":
          bot.characters.get("kokoro").run(msg, args, doc);
          break;
        case "kasen":
          bot.characters.get("kasen").run(msg, args, doc);
          break;
        case "mokou":
          bot.characters.get("mokou").run(msg, args, doc);
          break;
        case "sukuna":
          bot.characters.get("sukuna").run(msg, args, doc);
          break;
        case "sumireko":
          bot.characters.get("sumireko").run(msg, args, doc);
          break;
        case "reisen":
          bot.characters.get("reisen").run(msg, args, doc);
          break;
        case "doremy":
          bot.characters.get("doremy").run(msg, args, doc);
          break;
        case "tenshi":
          bot.characters.get("tenshi").run(msg, args, doc);
          break;
        case "yukari":
          bot.characters.get("yukari").run(msg, args, doc);
          break;
        case "joon":
          bot.characters.get("joon").run(msg, args, doc);
          break;
      }
    }
  }
});


bot.login(token);