module.exports = {
  name: "mamizou",
  description: "command",
  async run(msg, args, doc) {
    const moveEmbed = require("../moveEmbed")

    const sheet = doc.sheetsByIndex[0];

    const colour = "#00ff00";
    const character = "Mamizou";

    collectorTime = 60000;
    var filter = (reaction, user) => ["💠", "🔵", "🔴", "🟢"].includes(reaction.emoji.name) && (user.id === msg.author.id);
    var ab;
    var abB;
    var abR;
    var abG;

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
        ab = moveEmbed({
          row: 279,
          image: "Mamizouab.gif",
        }, character, colour, sheet);
        abB = moveEmbed({
          row: 280,
          image: "Mamizouab.gif",
        }, character, colour, sheet);
        abR = moveEmbed({
          row: 281,
          image: "Mamizouab.gif",
        }, character, colour, sheet);
        abG = moveEmbed({
          row: 282,
          image: "Mamizouab.gif",
        }, character, colour, sheet);

        Embed = await msg.channel.send(ab)
        var page = "ab"
        Embed.react("💠");
        Embed.react("🔴");
        Embed.react("🟢");
        Embed.react("🔵");

        var collector = Embed.createReactionCollector(filter, { time: collectorTime });
        collector.on("collect", async (reaction) => {
          switch(reaction.emoji.name) {
            case "💠":
              if(page === "ab") return;
              await Embed.edit(ab);
              page = "ab";
              break;
            case "🔵":
              if(page === "abB") return;
              await Embed.edit(abB);
              page = "abB";
              break;
            case "🔴":
              if(page === "abR") return;
              await Embed.edit(abR);
              page = "abR";
              break;
            case "🟢":
              if(page === "abG") return;
              await Embed.edit(abG);
              page = "abG";
              break;
          }
        })
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