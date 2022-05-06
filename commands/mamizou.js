module.exports = {
  name: "mamizou",
  description: "command",
  async run(msg, args, doc) {
    const moveEmbed = require("../moveEmbed")

    const sheet = doc.sheetsByIndex[0];

    const colour = "#00ff00";
    const character = "Mamizou";

    collectorTime = 60000;
    const filter = (reaction, user) => {
      return ["⬅️", "➡️", "💠", "🇦", "🇧", "🅱️"].includes(reaction.emoji.name)
        && user.id === msg.author.id
        && !user.bot
    };
    var ab;
    var abB;
    var abR;
    var abG;

    // CHARACTER MOVE / SECOND ARGUMENT CHECKER
    switch (args[1]) {
      case "5a": case "a": case "4a": case "c5a":
        var image = "Mamizou-c5a.gif"
        var embed = moveEmbed({
          row: 256,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "f5a":
        var image = "Mamizou-f5a.gif"
        var embed = moveEmbed({
          row: 257,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "6a":
        var image = "Mamizou6a.png"
        var embed = moveEmbed({
          row: 258,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "8a":
        var image = "Mamizou-8a.gif"
        var embed = moveEmbed({
          row: 259,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "2a":
        var image = "Mamizou-2a.gif"
        var embed = moveEmbed({
          row: 260,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "ja": case "j5a":
        var image = "Mamizouj5a.png"
        var embed = moveEmbed({
          row: 261,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "j6a":
        var image = "Mamizou6a.png"
        var embed = moveEmbed({
          row: 262,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "j8a":
        var image = "Mamizou8a.png"
        var embed = moveEmbed({
          row: 263,
          image,
          //Apparently Mami has less startup on her 8a than j8a, so I can't reuse 8a's gif... I have to make a new gif... eventually -SoG1998
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "j2a":
        var image = "Mamizou-2a.gif"
        var embed = moveEmbed({
          row: 264,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "5b": case "b":
        var embed = moveEmbed({
          row: 265,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "2b":
        var embed = moveEmbed({
          row: 266,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "8b":
        var embed = moveEmbed({
          row: 267,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "6b":
        var embed = moveEmbed({
          row: 268,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "cb": case "chargeb": case "[b]":
        var embed = moveEmbed({
          row: 269,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "bbb": case "tenkai":
        var embed = moveEmbed({
          row: 270,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "5c": case "c":
        var image = "Mamizou5c.png"
        var embed = moveEmbed({
          row: 271,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "6c":
        var image = "Mamizou6c.png"
        var embed = moveEmbed({
          row: 272,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "4c":
        var image = "Mamizou4c.png"
        var embed = moveEmbed({
          row: 273,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "j4c":
        var image = "Mamizouj4c.png"
        var embed = moveEmbed({
          row: 274,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "2c":
        var image = "Mamizou2c.png"
        var embed = moveEmbed({
          row: 275,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "8c":
        var image = "Mamizou8c.png"
        var embed = moveEmbed({
          row: 276,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "da": case "66a": case "dasha":
        var image = "Mamizou66a.png"
        var embed = moveEmbed({
          row: 277,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "db": case "66b": case "dashb":
        var image = "Mamizou66b.png"
        var embed = moveEmbed({
          row: 278,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "ab": case "occult": case "abball":
        var image = "Mamizou-ab.gif"
        ab = moveEmbed({
          row: 279,
          image,
        }, character, colour, sheet);
        abB = moveEmbed({
          row: 280,
          image,
        }, character, colour, sheet);
        abR = moveEmbed({
          row: 281,
          image,
        }, character, colour, sheet);
        abG = moveEmbed({
          row: 282,
          image,
        }, character, colour, sheet);

        Embed = await msg.channel.send({
          embeds: [ab],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        })
        var page = "ab"
        await Embed.react("💠");
        await Embed.react("🔴");
        await Embed.react("🟢");
        await Embed.react("🔵");

        var collector = Embed.createReactionCollector(filter, { time: collectorTime });
        await collector.on("collect", async (reaction) => {
          switch (reaction.emoji.name) {
            case "💠":
              if (page === "ab") return;
              await Embed.edit({ embeds: [ab] });
              page = "ab";
              break;
            case "🔵":
              if (page === "abB") return;
              await Embed.edit({ embeds: [abB] });
              page = "abB";
              break;
            case "🔴":
              if (page === "abR") return;
              await Embed.edit({ embeds: [abR] });
              page = "abR";
              break;
            case "🟢":
              if (page === "abG") return;
              await Embed.edit({ embeds: [abG] });
              page = "abG";
              break;
          }
        })
        break;
      case "ta": case "taga":
        var image = "Mamizou66a.png"
        var embed = moveEmbed({
          row: 283,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "tja": case "tagja":
        var image = "Mamizouj5a.png"
        var embed = moveEmbed({
          row: 284,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "tb": case "tagb":
        var embed = moveEmbed({
          row: 285,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        var image = "Mamizou-sc1.png"
        var embed = moveEmbed({
          row: 286,
          isSC: true,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "sc2": case "spellcard2":
        var image = "Mamizou-sc2.png"
        var embed = moveEmbed({
          row: 287,
          isSC: true,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "sc3": case "spellcard3":
        var image = "Mamizou-sc3.png"
        var embed = moveEmbed({
          row: 288,
          isSC: true,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "lw": case "lastword":
        var embed = moveEmbed({
          row: 289,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
    }
  }
}
