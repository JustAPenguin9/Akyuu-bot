module.exports = {
  name: "reimu",
  description: "command",
  run(msg, args, doc) {
    const { MessageEmbed, MessageAttachment} = require("discord.js")
    const moveEmbed = require("../moveEmbed.js")

    const sheet = doc.sheetsByIndex[0];

    const colour = "#ff0000";
    const char = "Reimu";

// CHARACTER MOVE / SECOND ARGUMENT CHECKER
    switch (args[1]) {
      case "5a": case "a": case "4a": case "c5a":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 1,
          image: "Reimuc5a.gif",
        }, sheet);
        msg.channel.send(embed);
        break;
      case "f5a":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 2,
          image: "Reimuf5a.gif",
        }, sheet);
        msg.channel.send(embed);
        break;
      case "6a":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 3,
          image: "Reimu6a.gif",
        }, sheet);
        msg.channel.send(embed);
        break;
      case "8a":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 4,
          image: "Reimu8a.gif",
        }, sheet);
        msg.channel.send(embed);
        break;
      case "2a":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 5,
          image: "Reimu2a.gif",
        }, sheet);
        msg.channel.send(embed);
        break;
      case "ja": case "j5a":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 6,
          image: "Reimuja.gif",
        }, sheet);
        msg.channel.send(embed);
        break;
      case "j6a":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 7,
          image: "Reimuj6a.gif",
        }, sheet);
        msg.channel.send(embed);
        break;
      case "j8a":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 8,
          image: "Reimu8a.gif",
        }, sheet);
        msg.channel.send(embed);
        break;
      case "j2a":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 9,
          image: "Reimu2a.gif",
        }, sheet);
        msg.channel.send(embed);
        break;
      case "5b": case "b":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 10,
        }, sheet);
        msg.channel.send(embed);
        break;
      case "2b":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 11,
        }, sheet);
        msg.channel.send(embed);
        break;
      case "8b":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 12,
        }, sheet);
        msg.channel.send(embed);
        break;
      case "6b":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 13,
        }, sheet);
        msg.channel.send(embed);
        break;
      case "cb": case "chargeb": case "[b]":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 14,
        }, sheet);
        msg.channel.send(embed);
        break;
      case "bbb": case "tenkai":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 15,
        }, sheet);
        msg.channel.send(embed);
        break;
      case "5c": case "c":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 16,
        }, sheet);
        msg.channel.send(embed);
        break;
      case "6c":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 17,
        }, sheet);
        msg.channel.send(embed);
        break;
      case "4c":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 18,
        }, sheet);
        msg.channel.send(embed);
        break;
      case "2c":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 19,
        }, sheet);
        msg.channel.send(embed);
        break;
      case "8c":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 20,
        }, sheet);
        msg.channel.send(embed);
        break;
      case "da": case "66a": case "dasha":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 21,
          image: "Reimu66a.png"
        }, sheet);
        msg.channel.send(embed);
        break;
      case "db": case "66b": case "dashb":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 22,
          image: "Reimuj6a.png"
        }, sheet);
        msg.channel.send(embed);
        break;
      case "ab": case "occult":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 23,
        }, sheet);
        msg.channel.send(embed);
        break;
      case "6ab": case "6occult":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 24,
        }, sheet);
        msg.channel.send(embed);
        break;
      case "ta": case "taga":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 25,
        }, sheet);
        msg.channel.send(embed);
        break;
      case "tja": case "tagja":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 26,
        }, sheet);
        msg.channel.send(embed);
        break;
      case "tb": case "tagb":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 27,
        }, sheet);
        msg.channel.send(embed);
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 28,
          isSC: true
        }, sheet);
        msg.channel.send(embed);
        break;
      case "sc2": case "spellcard2":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 29,
          isSC: true
        }, sheet);
        msg.channel.send(embed);
        break;
      case "sc3": case "spellcard3":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 30,
          isSC: true
        }, sheet);
        msg.channel.send(embed);
        break;
      case "lw": case "lastword":
        var embed = moveEmbed({
          character: char,
          colour: colour,
          row: 31,
        }, sheet);
        msg.channel.send(embed);
    }
  }
}