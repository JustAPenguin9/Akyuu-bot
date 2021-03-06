module.exports = {
  name: "koishi",
  description: "command",
  run(msg, args, doc) {
    const moveEmbed = require("../moveEmbed")

    const sheet = doc.sheetsByIndex[0];

    const colour = "#ff0000";
    const character = "Koishi";

// CHARACTER MOVE / SECOND ARGUMENT CHECKER
    switch (args[1]) {
      case "5a": case "a": case "4a": case "c5a":
        var embed = moveEmbed({
          row: 226,
          image: "Koishic5a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "f5a":
        var embed = moveEmbed({
          row: 227,
          image: "Koishif5a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6a":
        var embed = moveEmbed({
          row: 228,
          image: "Koishi6a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8a":
        var embed = moveEmbed({
          row: 229,
          image: "Koishi8a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2a":
        var embed = moveEmbed({
          row: 230,
          image: "Koishi2a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ja": case "j5a":
        var embed = moveEmbed({
          row: 231,
          image: "Koishij5a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j6a":
        var embed = moveEmbed({
          row: 232,
          image: "Koishi6a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j8a":
        var embed = moveEmbed({
          row: 233,
          image: "Koishi8a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j2a":
        var embed = moveEmbed({
          row: 234,
          image: "Koishi2a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "5b": case "b":
        var embed = moveEmbed({
          row: 235,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2b":
        var embed = moveEmbed({
          row: 236,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8b":
        var embed = moveEmbed({
          row: 237,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6b":
        var embed = moveEmbed({
          row: 238,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "cb": case "chargeb": case "[b]":
        var embed = moveEmbed({
          row: 239,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "bbb": case "tenkai":
        var embed = moveEmbed({
          row: 240,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "5c": case "c":
        var embed = moveEmbed({
          row: 241,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6c":
        var embed = moveEmbed({
          row: 242,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "4c":
        var embed = moveEmbed({
          row: 243,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2c":
        var embed = moveEmbed({
          row: 244,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8c":
        var embed = moveEmbed({
          row: 245,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "da": case "66a": case "dasha":
        var embed = moveEmbed({
          row: 246,
          image: "Koishi66a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "db": case "66b": case "dashb":
        var embed = moveEmbed({
          row: 247,
          image: "Koishi66b.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ab": case "occult":
        var embed = moveEmbed({
          row: 248,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ta": case "taga":
        var embed = moveEmbed({
          row: 249,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "tja": case "tagja":
        var embed = moveEmbed({
          row: 250,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "tb": case "tagb":
        var embed = moveEmbed({
          row: 251,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        var embed = moveEmbed({
          row: 252,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc2": case "spellcard2":
        var embed = moveEmbed({
          row: 253,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc3": case "spellcard3":
        var embed = moveEmbed({
          row: 254,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "lw": case "lastword":
        var embed = moveEmbed({
          row: 255,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
    }
  }
}