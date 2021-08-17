module.exports = {
  name: "mokou",
  description: "command",
  run(msg, args, doc) {
    const moveEmbed = require("../moveEmbed")

    const sheet = doc.sheetsByIndex[0];

    const colour = "#ff0000";
    const character = "Mokou";

// CHARACTER MOVE / SECOND ARGUMENT CHECKER
    switch (args[1]) {
      case "5a": case "a": case "4a": case "c5a":
        var embed = moveEmbed({
          row: 360,
          image: "Mokouc5a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "f5a":
        var embed = moveEmbed({
          row: 361,
          image: "Mokouf5a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6a":
        var embed = moveEmbed({
          row: 362,
          image: "Mokou6a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8a":
        var embed = moveEmbed({
          row: 363,
          image: "Mokou8a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2a":
        var embed = moveEmbed({
          row: 364,
          image: "Mokou2a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ja": case "j5a":
        var embed = moveEmbed({
          row: 365,
          image: "Mokouj5a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j6a":
        var embed = moveEmbed({
          row: 366,
          image: "Mokouj6a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j8a":
        var embed = moveEmbed({
          row: 367,
          image: "Mokouj8a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j2a":
        var embed = moveEmbed({
          row: 368,
          image: "Mokouj2a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "5b": case "b":
        var embed = moveEmbed({
          row: 369,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2b":
        var embed = moveEmbed({
          row: 370,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8b":
        var embed = moveEmbed({
          row: 371,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6b":
        var embed = moveEmbed({
          row: 372,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "cb": case "chargeb": case "[b]":
        var embed = moveEmbed({
          row: 373,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "bbb": case "tenkai":
        var embed = moveEmbed({
          row: 374,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "5c": case "c":
        var embed = moveEmbed({
          row: 375,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6c":
        var embed = moveEmbed({
          row: 376,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "4c":
        var embed = moveEmbed({
          row: 377,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2c":
        var embed = moveEmbed({
          row: 375,
          image: "Mokou2c.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8c":
        var embed = moveEmbed({
          row: 379,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "da": case "66a": case "dasha":
        var embed = moveEmbed({
          row: 380,
          image: "Mokou66a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "db": case "66b": case "dashb":
        var embed = moveEmbed({
          row: 381,
          image: "Mokouj6a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ab": case "occult":
        var embed = moveEmbed({
          row: 382,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ta": case "taga":
        var embed = moveEmbed({
          row: 383,
          image: "Mokou66a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "tja": case "tagja":
        var embed = moveEmbed({
          row: 384,
          image: "Mokouj5a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "tb": case "tagb":
        var embed = moveEmbed({
          row: 385,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        var embed = moveEmbed({
          row: 386,
          image: "Mokousc1.png",
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc2": case "spellcard2":
        var embed = moveEmbed({
          row: 387,
          image: "Mokousc2.png",
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc3": case "spellcard3":
        var embed = moveEmbed({
          row: 388,
          image: "Mokousc3.png",
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "lw": case "lastword":
        var embed = moveEmbed({
          row: 389,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
    }
  }
}