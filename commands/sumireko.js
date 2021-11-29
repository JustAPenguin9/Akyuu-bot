module.exports = {
  name: "sumireko",
  description: "command",
  run(msg, args, doc) {
    const moveEmbed = require("../moveEmbed")

    const sheet = doc.sheetsByIndex[0];

    const colour = "#ff0000";
    const character = "Sumireko";

// CHARACTER MOVE / SECOND ARGUMENT CHECKER
    switch (args[1]) {
      case "5a": case "a": case "4a": case "c5a":
        var embed = moveEmbed({
          row: 421,
          image: "Usami-5a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "f5a":
        var embed = moveEmbed({
          row: 422,
          image: "Usamif5a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6a":
        var embed = moveEmbed({
          row: 423,
          image: "Usami6a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8a":
        var embed = moveEmbed({
          row: 424,
          image: "Usami8a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2a":
        var embed = moveEmbed({
          row: 425,
          image: "Usami2a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ja": case "j5a":
        var embed = moveEmbed({
          row: 426,
          image: "Sumi-j5a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j6a":
        var embed = moveEmbed({
          row: 427,
          image: "Usami6a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j8a":
        var embed = moveEmbed({
          row: 428,
          image: "Usami8a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j2a":
        var embed = moveEmbed({
          row: 429,
          image: "Usami2a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "5b": case "b":
        var embed = moveEmbed({
          row: 430,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2b":
        var embed = moveEmbed({
          row: 431,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8b":
        var embed = moveEmbed({
          row: 432,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6b":
        var embed = moveEmbed({
          row: 433,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "cb": case "chargeb": case "[b]":
        var embed = moveEmbed({
          row: 434,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "bbb": case "tenkai":
        var embed = moveEmbed({
          row: 435,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "5c": case "c":
        var embed = moveEmbed({
          row: 436,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6c":
        var embed = moveEmbed({
          row: 437,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "4c":
        var embed = moveEmbed({
          row: 438,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "low2c": case "l2c": case "l.2c":
        var embed = moveEmbed({
          row: 439,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2c": case "high2c": case "h2c": case "h.2c":
        var embed = moveEmbed({
          row: 440,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8c":
        var embed = moveEmbed({
          row: 441,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "da": case "66a": case "dasha":
        var embed = moveEmbed({
          row: 442,
          image: "Usami66a.png"
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "db": case "66b": case "dashb":
        var embed = moveEmbed({
          row: 443,
          image: "Sumi-66b.gif"
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "abhigh": case "occulthigh": case "abh":
        var embed = moveEmbed({
          row: 444,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ab": case "occult": case "abmid": case "occultmid": case "abm":
        var embed = moveEmbed({
          row: 445,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ablow": case "occultlow": case "abl":
        var embed = moveEmbed({
          row: 446,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ta": case "taga":
        var embed = moveEmbed({
          row: 447,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "tja": case "tagja":
        var embed = moveEmbed({
          row: 448,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "tb": case "tagb":
        var embed = moveEmbed({
          row: 449,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        var embed = moveEmbed({
          row: 450,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc2": case "spellcard2":
        var embed = moveEmbed({
          row: 451,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc3": case "spellcard3":
        var embed = moveEmbed({
          row: 452,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "lw": case "lastword":
        var embed = moveEmbed({
          row: 453,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
    }
  }
}