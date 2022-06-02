module.exports = {
  name: "kasen",
  description: "command",
  async run(msg, args, doc) {
    const moveEmbed = require("../moveEmbed")

    const sheet = doc.sheetsByIndex[0];

    const colour = "#00ff00";
    const character = "Kasen";

    collectorTime = 60000;
    const filter = (reaction, user) => {
      return ["⬅️", "➡️", "💠", "🇦", "🇧", "🅱️"].includes(reaction.emoji.name)
        && user.id === msg.author.id
        && !user.bot
    };

    // CHARACTER MOVE / SECOND ARGUMENT CHECKER
    switch (args[1]) {
      case "5a": case "a": case "4a": case "c5a":
        var image = "Kasenc5a.gif"
        var embed = moveEmbed({
          row: 327,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "f5a":
        var image = "Kasenf5a.png"
        var embed = moveEmbed({
          row: 328,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "6a":
        var image = "Kasen6a.png"
        var embed = moveEmbed({
          row: 329,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "8a":
        var image = "Kasen8a.png"
        var embed = moveEmbed({
          row: 330,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "2a":
        var image = "Kasen2a.png"
        var embed = moveEmbed({
          row: 331,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "ja": case "j5a":
        var image = "Kasenj5a.gif"
        var embed = moveEmbed({
          row: 332,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "j6a":
        var image = "Kasenj6a.png"
        var embed = moveEmbed({
          row: 333,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "j8a":
        var image = "Kasen8a.png"
        var embed = moveEmbed({
          row: 334,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "j2a":
        var image = "Kasen2a.png"
        var embed = moveEmbed({
          row: 335,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "5b": case "b":
        var embed = moveEmbed({
          row: 336,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "2b":
        var embed = moveEmbed({
          row: 337,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "8b":
        var embed = moveEmbed({
          row: 338,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "6b":
        var embed = moveEmbed({
          row: 339,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "cb": case "chargeb": case "[b]":
        var embed = moveEmbed({
          row: 340,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "bbb": case "tenkai":
        var embed = moveEmbed({
          row: 341,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "5c": case "c":
        var embed = moveEmbed({
          row: 342,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "6c":
        var embed = moveEmbed({
          row: 343,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "4c":
        var embed = moveEmbed({
          row: 344,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "2c":
        var embed = moveEmbed({
          row: 345,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "8c":
        var page1 = moveEmbed({
          row: 346,
          descOnly: "Kasen grabs onto her eagle, which then floats slightly upwards and back. She can drop off it by pressing 2. Interacts with [b] and Hawk Beacon. Has three follow-up moves that can be performed.",
        }, character, colour, sheet);
        var page2 = moveEmbed({
          row: 347,
        }, character, colour, sheet);
        var page3 = moveEmbed({
          row: 348,
        }, character, colour, sheet);
        var page4 = moveEmbed({
          row: 349,
        }, character, colour, sheet);

        var pages = [page1, page2, page3, page4];
        var page = 0;

        Embed = await msg.channel.send({ embeds: [pages[page]] })
        Embed.react("💠");
        Embed.react("🇦");
        Embed.react("🇧");
        Embed.react("🅱️");

        var collector = Embed.createReactionCollector({ filter, time: collectorTime });
        collector.on("collect", async (reaction) => {
          switch (reaction.emoji.name) {
            case "💠":
              if (page === 0) return;
              page = 0;
              await Embed.edit({ embeds: [pages[page]] });
              break;
            case "🇦":
              if (page === 1) return;
              page = 1;
              await Embed.edit({ embeds: [pages[page]] });
              break;
            case "🇧":
              if (page === 2) return;
              page = 2;
              await Embed.edit({ embeds: [pages[page]] });
              break;
            case "🅱️":
              if (page === 3) return;
              page = 3;
              await Embed.edit({ embeds: [pages[page]] });
              break;
          }
        })
        break;
      case "da": case "66a": case "dasha":
        var image = "Kasen66a.png"
        var embed = moveEmbed({
          row: 350,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "db": case "66b": case "dashb":
        var image = "Kasen2a.png"
        var embed = moveEmbed({
          row: 351,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "ab": case "occult":
        var embed = moveEmbed({
          row: 352,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "ta": case "taga":
        var embed = moveEmbed({
          row: 353,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "tja": case "tagja":
        var embed = moveEmbed({
          row: 354,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "tb": case "tagb":
        var embed = moveEmbed({
          row: 355,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        var embed = moveEmbed({
          row: 356,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "sc2": case "spellcard2":
        var embed = moveEmbed({
          row: 357,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "sc3": case "spellcard3":
        var embed = moveEmbed({
          row: 358,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "lw": case "lastword":
        var embed = moveEmbed({
          row: 359,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
    }
  }
}
