module.exports = {
  name: "futo",
  description: "command",
  run(msg, args, doc) {
    const moveEmbed = require("../moveEmbed")

    const sheet = doc.sheetsByIndex[0];

    const colour = "#0000ff";
    const character = "Futo";

    // CHARACTER MOVE / SECOND ARGUMENT CHECKER
    switch (args[1]) {
      case "5a": case "a": case "4a": case "c5a":
        var image = "Futo-c5a.gif"
        var embed = moveEmbed({
          row: 130,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "f5a":
        var image = "Futo-f5a.gif"
        var embed = moveEmbed({
          row: 131,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "6a":
        var image = "Futo-6a.gif"
        var embed = moveEmbed({
          row: 132,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "8a":
        var image = "Futo-8a.gif"
        var embed = moveEmbed({
          row: 133,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "2a":
        var image = "Futo2a.png"
        var embed = moveEmbed({
          row: 134,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "ja": case "j5a":
        var image = "Futof5a.png"
        var embed = moveEmbed({
          row: 135,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "j6a":
        var image = "Futoj6a.png"
        var embed = moveEmbed({
          row: 136,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "j8a":
        var image = "Futoj8a.png"
        var embed = moveEmbed({
          row: 137,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "j2a":
        var image = "Futo2a.png"
        var embed = moveEmbed({
          row: 138,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "5b": case "b":
        var embed = moveEmbed({
          row: 139,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "2b":
        var embed = moveEmbed({
          row: 140,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "8b":
        var embed = moveEmbed({
          row: 141,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "6b":
        var embed = moveEmbed({
          row: 142,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "cb": case "chargeb": case "[b]":
        var embed = moveEmbed({
          row: 143,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "bbb": case "tenkai":
        var embed = moveEmbed({
          row: 144,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "5c": case "c":
        var embed = moveEmbed({
          row: 145,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "6c":
        var embed = moveEmbed({
          row: 146,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "j6c":
        var embed = moveEmbed({
          row: 147,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "4c":
        var embed = moveEmbed({
          row: 148,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "2c": case "j2c": case "highj2c": case "hj2c": case "h.2c":
        var embed = moveEmbed({
          row: 149,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "low2c": case "l2c": case "l.2c":
        var embed = moveEmbed({
          row: 150,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "8c":
        var embed = moveEmbed({
          row: 151,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "da": case "66a": case "dasha":
        var image = "Futo66a.png"
        var embed = moveEmbed({
          row: 152,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "db": case "66b": case "dashb":
        var image = "Futo66b.png"
        var embed = moveEmbed({
          row: 153,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "ab": case "occult":
        var embed = moveEmbed({
          row: 154,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "ta": case "taga":
        var embed = moveEmbed({
          row: 155,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "tja": case "tagja":
        var embed = moveEmbed({
          row: 156,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "tb": case "tagb":
        var embed = moveEmbed({
          row: 157,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        var embed = moveEmbed({
          row: 158,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "sc2": case "spellcard2":
        var embed = moveEmbed({
          row: 159,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "sc3": case "spellcard3":
        var embed = moveEmbed({
          row: 160,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "lw": case "lastword":
        var embed = moveEmbed({
          row: 161,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
    }
  }
}
