module.exports = {
  name: "mamizou",
  description: "command",
  run(msg, args, doc) {
    const moveEmbed = require("../moveEmbed")

    const sheet = doc.sheetsByIndex[0];

    const colour = "#00ff00";
    const character = "Mamizou";

// CHARACTER MOVE / SECOND ARGUMENT CHECKER
    switch (args[1]) {
      case "5a": case "a": case "4a": case "c5a":
        var embed = moveEmbed({
          row: 256,
          image: "Mamizouc5a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "f5a":
        var embed = moveEmbed({
          row: 257,
          image: "Mamizouf5a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6a":
        var embed = moveEmbed({
          row: 258,
          image: "Mamizou6a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8a":
        var embed = moveEmbed({
          row: 259,
          image: "Mamizou8a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2a":
        var embed = moveEmbed({
          row: 260,
          image: "Mamizou2a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ja": case "j5a":
        var embed = moveEmbed({
          row: 261,
          image: "Mamizouj5a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j6a":
        var embed = moveEmbed({
          row: 262,
          image: "Mamizou6a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j8a":
        var embed = moveEmbed({
          row: 263,
          image: "Mamizou8a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j2a":
        var embed = moveEmbed({
          row: 264,
          image: "Mamizou2a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "5b": case "b":
        var embed = moveEmbed({
          row: 265,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2b":
        var embed = moveEmbed({
          row: 266,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8b":
        var embed = moveEmbed({
          row: 267,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6b":
        var embed = moveEmbed({
          row: 268,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "cb": case "chargeb": case "[b]":
        var embed = moveEmbed({
          row: 269,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "bbb": case "tenkai":
        var embed = moveEmbed({
          row: 270,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "5c": case "c":
        var embed = moveEmbed({
          row: 271,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6c":
        var embed = moveEmbed({
          row: 272,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "4c":
        var embed = moveEmbed({
          row: 273,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j4c":
        var embed = moveEmbed({
          row: 274,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2c":
        var embed = moveEmbed({
          row: 275,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8c":
        var embed = moveEmbed({
          row: 276,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "da": case "66a": case "dasha":
        var embed = moveEmbed({
          row: 277,
          image: "Mamizou66a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "db": case "66b": case "dashb":
        var embed = moveEmbed({
          row: 278,
          image: "Mamizou66b.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ab": case "occult": case "abball":
        var embed = moveEmbed({
          row: 279,
          image: "Mamizouab.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "abblue": case "occultblue": case "abb": case "occultb":
        var embed = moveEmbed({
          row: 280,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "abred": case "occultred": case "abr": case "occultr":
        var embed = moveEmbed({
          row: 281,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "abgreen": case "occultgreen": case "abg": case "occultg":
        var embed = moveEmbed({
          row: 282,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ta": case "taga":
        var embed = moveEmbed({
          row: 283,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "tja": case "tagja":
        var embed = moveEmbed({
          row: 284,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "tb": case "tagb":
        var embed = moveEmbed({
          row: 285,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        var embed = moveEmbed({
          row: 286,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc2": case "spellcard2":
        var embed = moveEmbed({
          row: 287,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc3": case "spellcard3":
        var embed = moveEmbed({
          row: 288,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "lw": case "lastword":
        var embed = moveEmbed({
          row: 289,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
    }
  }
}