module.exports = {
  name: "kokoro",
  description: "command",
  async run(msg, args, doc) {
    const moveEmbed = require("../moveEmbed")

    const sheet = doc.sheetsByIndex[0];

    const colour = "#FFB2E4";
    const character = "Kokoro";

    collectorTime = 60000;
    var filter = (reaction, user) => ["⚪", "🔴", "🟢", "🔵"].includes(reaction.emoji.name) && (user.id === msg.author.id);
    var noEmoEmbed;
    var angerEmbed;
    var joyEmbed;
    var melEmbed;

// CHARACTER MOVE / SECOND ARGUMENT CHECKER
    switch (args[1]) {
      case "5a": case "a": case "4a": case "c5a":
        var embed = moveEmbed({
          row: 290,
          image: "Kokoro-c5a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "f5a":
        var embed = moveEmbed({
          row: 291,
          image: "Kokoro-f5a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6a":
        var embed = moveEmbed({
          row: 292,
          image: "Kokoro-6a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8a":
        var embed = moveEmbed({
          row: 293,
          image: "Kokoro-8a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2a":
        var embed = moveEmbed({
          row: 294,
          image: "Kokoro-2a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ja": case "j5a":
        var embed = moveEmbed({
          row: 295,
          image: "Kokoro-j5a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j6a":
        var embed = moveEmbed({
          row: 296,
          image: "Kokoro-j6a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j8a":
        var embed = moveEmbed({
          row: 297,
          image: "Kokoro-8a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j2a":
        var embed = moveEmbed({
          row: 298,
          image: "Kokoro-j2a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "5b": case "b": case "2b": case "8b":
        var noEmoEmbed = moveEmbed({
          row: 299,
        }, character, colour, sheet);
        var angerEmbed = moveEmbed({
          row: 300,
        }, character, colour, sheet);
        var joyEmbed = moveEmbed({
          row: 301,
        }, character, colour, sheet);
        var melEmbed = moveEmbed({
          row: 302,
        }, character, colour, sheet);

        var Embed = await msg.channel.send(noEmoEmbed)
        var page = "noEmo"
        Embed.react("⚪");
        Embed.react("🔴");
        Embed.react("🟢");
        Embed.react("🔵");

        var collector = Embed.createReactionCollector(filter, { time: collectorTime });
        collector.on("collect", async (reaction) => {
          switch(reaction.emoji.name) {
            case "🔴":
              if(page === "anger") return;
              await Embed.edit(angerEmbed);
              page = "anger";
              break;
            case "⚪":
              if(page === "noEmo") return;
              await Embed.edit(noEmoEmbed);
              page = "noEmo";
              break;
            case "🟢":
              if(page === "joy") return;
              await Embed.edit(joyEmbed);
              page = "joy";
              break;
            case "🔵":
              if(page === "mel") return;
              await Embed.edit(melEmbed);
              page = "mel";
              break;
          }
        })
        break;
      case "6b":
        noEmoEmbed = moveEmbed({
          row: 303,
        }, character, colour, sheet);
        angerEmbed = moveEmbed({
          row: 304,
        }, character, colour, sheet);
        joyEmbed = moveEmbed({
          row: 305,
        }, character, colour, sheet);
        melEmbed = moveEmbed({
          row: 306,
        }, character, colour, sheet);

        Embed = await msg.channel.send(noEmoEmbed)
        var page = "noEmo"
        Embed.react("⚪");
        Embed.react("🔴");
        Embed.react("🟢");
        Embed.react("🔵");

        var collector = Embed.createReactionCollector(filter, { time: collectorTime });
        collector.on("collect", async (reaction) => {
          switch(reaction.emoji.name) {
            case "🔴":
              if(page === "anger") return;
              await Embed.edit(angerEmbed);
              page = "anger";
              break;
            case "⚪":
              if(page === "noEmo") return;
              await Embed.edit(noEmoEmbed);
              page = "noEmo";
              break;
            case "🟢":
              if(page === "joy") return;
              await Embed.edit(joyEmbed);
              page = "joy";
              break;
            case "🔵":
              if(page === "mel") return;
              await Embed.edit(melEmbed);
              page = "mel";
              break;
          }
        })
        break;
      case "cb": case "chargeb": case "[b]":
        var embed = moveEmbed({
          row: 307,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "bbb": case "tenkai":
        noEmoEmbed = moveEmbed({
          row: 308,
        }, character, colour, sheet);
        angerEmbed = moveEmbed({
          row: 309,
        }, character, colour, sheet);
        joyEmbed = moveEmbed({
          row: 310,
        }, character, colour, sheet);
        melEmbed = moveEmbed({
          row: 311,
        }, character, colour, sheet);

        Embed = await msg.channel.send(noEmoEmbed)
        var page = "noEmo"
        Embed.react("⚪");
        Embed.react("🔴");
        Embed.react("🟢");
        Embed.react("🔵");

        var collector = Embed.createReactionCollector(filter, { time: collectorTime });
        collector.on("collect", async (reaction) => {
          switch(reaction.emoji.name) {
            case "🔴":
              if(page === "anger") return;
              await Embed.edit(angerEmbed);
              page = "anger";
              break;
            case "⚪":
              if(page === "noEmo") return;
              await Embed.edit(noEmoEmbed);
              page = "noEmo";
              break;
            case "🟢":
              if(page === "joy") return;
              await Embed.edit(joyEmbed);
              page = "joy";
              break;
            case "🔵":
              if(page === "mel") return;
              await Embed.edit(melEmbed);
              page = "mel";
              break;
          }
        })
        break;
      case "5c": case "c":
        var embed = moveEmbed({
          row: 312,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6c":
        var embed = moveEmbed({
          row: 313,
          image: "Kokoro-6c.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "4c":
        var embed = moveEmbed({
          row: 314,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2c":
        var embed = moveEmbed({
          row: 315,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8c":
        var embed = moveEmbed({
          row: 316,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "da": case "66a": case "dasha":
        var embed = moveEmbed({
          row: 317,
          image: "Kokoro-66a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "db": case "66b": case "dashb":
        var embed = moveEmbed({
          row: 318,
          image: "Kokoro-66b.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ab": case "occult":
        var embed = moveEmbed({
          row: 319,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ta": case "taga":
        var embed = moveEmbed({
          row: 320,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "tja": case "tagja":
        var embed = moveEmbed({
          row: 321,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "tb": case "tagb":
        var embed = moveEmbed({
          row: 322,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        var embed = moveEmbed({
          row: 323,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc2": case "spellcard2":
        var embed = moveEmbed({
          row: 324,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc3": case "spellcard3":
        var embed = moveEmbed({
          row: 325,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "lw": case "lastword":
        var embed = moveEmbed({
          row: 326,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
    }
  }
}