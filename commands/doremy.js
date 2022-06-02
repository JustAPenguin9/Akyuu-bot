module.exports = {
  name: "doremy",
  description: "command",
  run(msg, args, doc) {
    const moveEmbed = require("../moveEmbed")

    const sheet = doc.sheetsByIndex[0];

    const colour = "#FF6CD9";
    const character = "Doremy";

    // CHARACTER MOVE / SECOND ARGUMENT CHECKER
    switch (args[1]) {
      case "5a": case "a": case "4a": case "c5a":
        var image = "Doremyc5a.gif"
        var embed = moveEmbed({
          row: 484,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "f5a":
        var image = "Doremyf5a.png"
        var embed = moveEmbed({
          row: 485,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "6a":
        var image = "Doremy-6a.gif"
        var embed = moveEmbed({
          row: 486,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "8a":
        var image = "Doremy8a.png"
        var embed = moveEmbed({
          row: 487,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "2a":
        var image = "Doremy2a.png"
        var embed = moveEmbed({
          row: 488,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "ja": case "j5a":
        var image = "Doremyj5a.gif"
        var embed = moveEmbed({
          row: 489,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "j6a":
        var image = "Doremyj6a.png"
        var embed = moveEmbed({
          row: 490,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "j8a":
        var image = "Doremy8a.png"
        var embed = moveEmbed({
          row: 491,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "j2a":
        var image = "Doremyj2a.png"
        var embed = moveEmbed({
          row: 492,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "5b": case "b":
        var embed = moveEmbed({
          row: 493,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "2b":
        var embed = moveEmbed({
          row: 494,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "8b":
        var embed = moveEmbed({
          row: 495,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "6b":
        var embed = moveEmbed({
          row: 496,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "cb": case "chargeb": case "[b]":
        var embed = moveEmbed({
          row: 497,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "bbb": case "tenkai":
        var embed = moveEmbed({
          row: 498,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "5c": case "c":
        msg.channel.send("```Doremy turns on her vacuum, pulling the opponent towards her and sucking up any dream souls present in the stage. The vacuum itself has no hitbox, but the dream souls do as they quickly make their way towards the vacuum, potentially dealing huge damage on hit or chip damage on block. An important move to master, as it greatly improves on her blockstrings, okizemi and even combos.```");
        break;
      case "6c":
        var embed = moveEmbed({
          row: 500,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "4c":
        var embed = moveEmbed({
          row: 501,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "2c":
        var embed = moveEmbed({
          row: 502,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "8c":
        var embed = moveEmbed({
          row: 503,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "da": case "66a": case "dasha":
        var image = "Doremy66a.png"
        var embed = moveEmbed({
          row: 504,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "db": case "66b": case "dashb":
        var image = "Doremy2a.png"
        var embed = moveEmbed({
          row: 505,
          image,
        }, character, colour, sheet);
        msg.channel.send({
          embeds: [embed],
          files: [`./attachments/${character.toLowerCase()}-attachments/${image}`]
        });
        break;
      case "ab": case "occult":
        var embed = moveEmbed({
          row: 506,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "ta": case "taga":
        var embed = moveEmbed({
          row: 507,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "tja": case "tagja":
        var embed = moveEmbed({
          row: 508,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "tb": case "tagb":
        var embed = moveEmbed({
          row: 509,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        var embed = moveEmbed({
          row: 510,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "sc2": case "spellcard2":
        var embed = moveEmbed({
          row: 511,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "sc3": case "spellcard3":
        var embed = moveEmbed({
          row: 512,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
      case "lw": case "lastword":
        var embed = moveEmbed({
          row: 513,
        }, character, colour, sheet);
        msg.channel.send({ embeds: [embed] });
        break;
    }
  }
}
