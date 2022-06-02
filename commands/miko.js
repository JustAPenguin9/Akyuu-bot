module.exports = {
  name: "miko",
  description: "command",
  run(msg, args, doc) {
    const moveEmbed = require("../moveEmbed")

    const sheet = doc.sheetsByIndex[0];

    const colour = "#ffcc00";
    const character = "Miko";

    // CHARACTER MOVE / SECOND ARGUMENT CHECKER
    switch (args[1]) {
      case "5a": case "a": case "4a": case "c5a":
        var image = "Mikoc5a.gif"
        var embed = moveEmbed({
          row: 162,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "f5a":
        var image = "Mikof5a.png"
        var embed = moveEmbed({
          row: 163,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "6a":
        var image = "Miko6a.png"
        var embed = moveEmbed({
          row: 164,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "8a":
        var image = "Miko8a.png"
        var embed = moveEmbed({
          row: 165,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "2a":
        var image = "Miko2a.png"
        var embed = moveEmbed({
          row: 166,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "ja": case "j5a":
        var image = "Mikoj5a.png"
        var embed = moveEmbed({
          row: 167,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "j6a":
        var image = "Miko6a.png"
        var embed = moveEmbed({
          row: 168,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "j8a":
        var image = "Miko8a.png"
        var embed = moveEmbed({
          row: 169,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "j2a":
        var image = "Mikoj2a.gif"
        var embed = moveEmbed({
          row: 170,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "5b": case "b":
        var embed = moveEmbed({
          row: 171,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "2b":
        var embed = moveEmbed({
          row: 172,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "8b":
        var embed = moveEmbed({
          row: 173,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "6b":
        var embed = moveEmbed({
          row: 174,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "cb": case "chargeb": case "[b]":
        var embed = moveEmbed({
          row: 175,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "bbb": case "tenkai":
        var embed = moveEmbed({
          row: 176,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "5c": case "c":
        var embed = moveEmbed({
          row: 177,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "j5c": case "jc":
        var embed = moveEmbed({
          row: 178,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "6c":
        var embed = moveEmbed({
          row: 179,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "4c":
        var embed = moveEmbed({
          row: 180,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "2c":
        var embed = moveEmbed({
          row: 181,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "8c":
        var embed = moveEmbed({
          row: 182,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "da": case "66a": case "dasha":
        var image = "Miko66a.gif"
        var embed = moveEmbed({
          row: 183,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "db": case "66b": case "dashb":
        var image = "Miko66b.png"
        var embed = moveEmbed({
          row: 184,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "ab": case "occult":
        var embed = moveEmbed({
          row: 185,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "ta": case "taga":
        var embed = moveEmbed({
          row: 186,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "tja": case "tagja":
        var embed = moveEmbed({
          row: 187,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "tb": case "tagb":
        var embed = moveEmbed({
          row: 188,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        var embed = moveEmbed({
          row: 189,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "sc2": case "spellcard2":
        var embed = moveEmbed({
          row: 190,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "sc3": case "spellcard3":
        var embed = moveEmbed({
          row: 191,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "lw": case "lastword":
        var embed = moveEmbed({
          row: 192,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
    }
  }
}
