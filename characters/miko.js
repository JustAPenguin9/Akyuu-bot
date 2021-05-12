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
        var embed = moveEmbed({
          row: 162,
          image: "Mikoc5a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "f5a":
        var embed = moveEmbed({
          row: 163,
          image: "Mikof5a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6a":
        var embed = moveEmbed({
          row: 164,
          image: "Miko6a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8a":
        var embed = moveEmbed({
          row: 165,
          image: "Miko8a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2a":
        var embed = moveEmbed({
          row: 166,
          image: "Miko2a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ja": case "j5a":
        var embed = moveEmbed({
          row: 167,
          image: "Mikoj5a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j6a":
        var embed = moveEmbed({
          row: 168,
          image: "Miko6a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j8a":
        var embed = moveEmbed({
          row: 169,
          image: "Miko8a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j2a":
        var embed = moveEmbed({
          row: 170,
          image: "Mikoj2a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "5b": case "b":
        var embed = moveEmbed({
          row: 171,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2b":
        var embed = moveEmbed({
          row: 172,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8b":
        var embed = moveEmbed({
          row: 173,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6b":
        var embed = moveEmbed({
          row: 174,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "cb": case "chargeb": case "[b]":
        var embed = moveEmbed({
          row: 175,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "bbb": case "tenkai":
        var embed = moveEmbed({
          row: 176,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "5c": case "c":
        var embed = moveEmbed({
          row: 177,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j5c": case "jc":
        var embed = moveEmbed({
          row: 178,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6c":
        var embed = moveEmbed({
          row: 179,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "4c":
        var embed = moveEmbed({
          row: 180,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2c":
        var embed = moveEmbed({
          row: 181,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8c":
        var embed = moveEmbed({
          row: 182,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "da": case "66a": case "dasha":
        var embed = moveEmbed({
          row: 183,
          image: "Miko66a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "db": case "66b": case "dashb":
        var embed = moveEmbed({
          row: 184,
          image: "Miko66b.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ab": case "occult":
        var embed = moveEmbed({
          row: 185,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ta": case "taga":
        var embed = moveEmbed({
          row: 186,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "tja": case "tagja":
        var embed = moveEmbed({
          row: 187,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "tb": case "tagb":
        var embed = moveEmbed({
          row: 188,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        var embed = moveEmbed({
          row: 189,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc2": case "spellcard2":
        var embed = moveEmbed({
          row: 190,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc3": case "spellcard3":
        var embed = moveEmbed({
          row: 191,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "lw": case "lastword":
        var embed = moveEmbed({
          row: 192,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
    }
  }
}