module.exports = {
  name: "yukari",
  description: "command",
  async run(msg, args, doc) {
    const moveEmbed = require("../moveEmbed")

    const sheet = doc.sheetsByIndex[0];

    const colour = "#ffd400";
    const character = "Yukari";

    collectorTime = 60000;
    var filter = (reaction, user) => ["⬅️", "➡️"].includes(reaction.emoji.name) && (user.id === msg.author.id);

// CHARACTER MOVE / SECOND ARGUMENT CHECKER
    switch (args[1]) {
      case "5a": case "a": case "4a": case "c5a":
        var embed = moveEmbed({
          row: 544,
          image: "Yukaric5a.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "f5a":
        var embed = moveEmbed({
          row: 545,
          image: "Yukarif5a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6a":
        var embed = moveEmbed({
          row: 546,
          image: "Yukari6a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8a":
        var embed = moveEmbed({
          row: 547,
          image: "Yukari8a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2a":
        var embed = moveEmbed({
          row: 548,
          image: "Yukari2a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ja": case "j5a":
        var embed = moveEmbed({
          row: 549,
          image: "Yukarij5a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j6a":
        var embed = moveEmbed({
          row: 550,
          image: "Yukari6a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j8a":
        var embed = moveEmbed({
          row: 551,
          image: "Yukarij8a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j2a":
        var embed = moveEmbed({
          row: 552,
          image: "Yukari2a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "5b": case "b":
        var embed = moveEmbed({
          row: 553,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2b":
        var embed = moveEmbed({
          row: 554,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8b":
        var embed = moveEmbed({
          row: 555,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6b":
        var embed = moveEmbed({
          row: 556,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "cb": case "chargeb": case "[b]":
        var embed = moveEmbed({
          row: 557,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "bbb": case "tenkai":
        var embed = moveEmbed({
          row: 558,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "5c": case "c":
        var embed = moveEmbed({
          row: 559,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "6c":
        var embed = moveEmbed({
          row: 560,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "j6c":
        var embed = moveEmbed({
          row: 561,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "4c":
        var embed = moveEmbed({
          row: 562,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "2c":
        var embed = moveEmbed({
          row: 563,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "8c":
        var embed = moveEmbed({
          row: 564,
          image: "Yukari8c.gif",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "da": case "66a": case "dasha":
        var embed = moveEmbed({
          row: 565,
          image: "Yukarij5a.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "db": case "66b": case "dashb":
        var embed = moveEmbed({
          row: 566,
          image: "Yukari66b.png",
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "ab": case "occult":
        var ab1 = moveEmbed({
          row: 567,
          title: "AB",
        }, character, colour, sheet);
        var ab2 = moveEmbed({
          row: 568,
          title: "AB A",
        }, character, colour, sheet);
        var ab3 = moveEmbed({
          row: 569,
          title: "AB B",
        }, character, colour, sheet);
        var ab4 = moveEmbed({
          row: 570,
          title: "AB 4c",
        }, character, colour, sheet);
        var ab5 = moveEmbed({
          row: 571,
          title: "AB 5/6/8/2c",
        }, character, colour, sheet);

        var embeds = [ab1, ab2, ab3, ab4, ab5];
        var page = 0;

        messageEmbed = await msg.channel.send(embeds[page])
        messageEmbed.react("⬅️");
        messageEmbed.react("➡️");

        var collector = messageEmbed.createReactionCollector(filter, { time: collectorTime });
        collector.on("collect", async (reaction) => {
          switch(reaction.emoji.name) {
            case "⬅️":
              if(page === 0) page = 3;
              else page--;
              await messageEmbed.edit(embeds[page]);
              break;
            case "➡️":
              if(page === embeds.length - 1) page = 0;
              else page++;
              await messageEmbed.edit(embeds[page]);
              break;
            }
        })
        break;
      case "ta": case "taga":
        var embed = moveEmbed({
          row: 572,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "tja": case "tagja":
        var embed = moveEmbed({
          row: 573,
        }, character, colour, sheet);
        msg.channel.send(embed);
      case "tb": case "tagb":
        var embed = moveEmbed({
          row: 574,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        var embed = moveEmbed({
          row: 575,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc2": case "spellcard2":
        var embed = moveEmbed({
          row: 576,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "sc3": case "spellcard3":
        var embed = moveEmbed({
          row: 577,
          isSC: true,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
      case "lw": case "lastword":
        var embed = moveEmbed({
          row: 578,
        }, character, colour, sheet);
        msg.channel.send(embed);
        break;
    }
  }
}