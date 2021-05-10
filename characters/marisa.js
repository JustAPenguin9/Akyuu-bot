module.exports = {
  name: "marisa",
  description: "command",
  async run(msg, args, doc) {
    const { MessageEmbed, MessageAttachment} = require("discord.js")

    const sheet = doc.sheetsByIndex[0];

    colour = "#ffff00"

    collectorTime = 60000;
    var filter = (reaction, user) => ["⬅️", "➡️"].includes(reaction.emoji.name) && (user.id === msg.author.id);

// CHARACTER MOVE / SECOND ARGUMENT CHECKER
    switch (args[1]) {
      case "5a": case "a": case "4a": case "c5a":
        row = 32;
        image = "Marisac5a.gif"
        attachment = new MessageAttachment(`./characters/marisaAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "f5a":
        row = 33;
        image = "Marisaf5a.png"
        attachment = new MessageAttachment(`./characters/marisaAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "6a":
        row = 34;
        image = "Marisa6a.png"
        attachment = new MessageAttachment(`./characters/marisaAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "8a":
        row = 35;
        image = "Marisa8a.gif"
        attachment = new MessageAttachment(`./characters/marisaAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "2a":
        row = 36;
        image = "Marisa2a.png"
        attachment = new MessageAttachment(`./characters/marisaAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "ja": case "j5a":
        row = 37;
        image = "Marisaj5a.png"
        attachment = new MessageAttachment(`./characters/marisaAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "j6a":
        row = 38;
        image = "Marisa6a.png"
        attachment = new MessageAttachment(`./characters/marisaAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "j8a":
        row = 39;
        image = "Marisa8a.gif"
        attachment = new MessageAttachment(`./characters/marisaAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "j2a":
        row = 40;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "5b": case "b":
        row = 41;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "2b":
        row = 42;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "8b":
        row = 43;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "6b":
        row = 44;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "cb": case "chargeb": case "[b]":
        row = 45;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "bbb": case "tenkai":
        row = 46;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "5c": case "c":
        row = 47;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "6c":
        row = 48;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "4c":
        row = 49;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "2c":
        row = 50;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "8c":
        row = 51;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "da": case "66a": case "dasha":
        row = 52;
        image = "Marisaf5a.png"
        attachment = new MessageAttachment(`./characters/marisaAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "db": case "66b": case "dashb":
        row = 53;
        image = "Marisa66b.png"
        attachment = new MessageAttachment(`./characters/marisaAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "ab": case "occult":
        var ab1 = new MessageEmbed()
          .setColor(colour)
          .setTitle("AB 1")
          .addField("Startup", (sheet.getCell(54, 2)).value, true)
          .addField("Active", (sheet.getCell(54, 3)).value, true)
          .addField("Recovery", (sheet.getCell(54, 4)).value, true)
          .addField("Damage", (sheet.getCell(54, 5)).value, true)
          .addField("Stun", (sheet.getCell(54, 6)).value, true);
        var ab2 = new MessageEmbed()
          .setColor(colour)
          .setTitle("AB 2")
          .addField("Startup", (sheet.getCell(55, 2)).value, true)
          .addField("Active", (sheet.getCell(55, 3)).value, true)
          .addField("Recovery", (sheet.getCell(55, 4)).value, true)
          .addField("Damage", (sheet.getCell(55, 5)).value, true)
          .addField("Stun", (sheet.getCell(55, 6)).value, true);
        var ab3 = new MessageEmbed()
          .setColor(colour)
          .setTitle("AB 3")
          .addField("Startup", (sheet.getCell(56, 2)).value, true)
          .addField("Active", (sheet.getCell(56, 3)).value, true)
          .addField("Recovery", (sheet.getCell(56, 4)).value, true)
          .addField("Damage", (sheet.getCell(56, 5)).value, true)
          .addField("Stun", (sheet.getCell(56, 6)).value, true);
        var ab4 = new MessageEmbed()
          .setColor(colour)
          .setTitle("AB 4")
          .addField("Startup", (sheet.getCell(57, 2)).value, true)
          .addField("Active", (sheet.getCell(57, 3)).value, true)
          .addField("Recovery", (sheet.getCell(57, 4)).value, true)
          .addField("Damage", (sheet.getCell(57, 5)).value, true)
          .addField("Stun", (sheet.getCell(57, 6)).value, true);

        var embeds = [ab1, ab2, ab3, ab4];
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
        row = 58;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "tja": case "tagja":
        row = 59;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "tb": case "tagb":
        row = 60;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        row = 61;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        cost = (sheet.getCell(row, 7)).value;
        sc(colour, startup, active, recovery, damage, stun, cost)
        break;
      case "sc2": case "spellcard2":
        row = 62;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        cost = (sheet.getCell(row, 7)).value;
        sc(colour, startup, active, recovery, damage, stun, cost)
        break;
      case "sc3": case "spellcard3":
        row = 63;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        cost = (sheet.getCell(row, 7)).value;
        sc(colour, startup, active, recovery, damage, stun, cost)
        break;
      case "lw": case "lastword":
        row = 64;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
    }

// MESSAGE EMBED

    function std(colour, startup, active, recovery, damage, stun) {
      const Embed = new MessageEmbed()
        .setColor(colour)
        .addField(
          "Startup",
          startup,
          true
        )
        .addField(
          "Active",
          active,
          true
        )
        .addField(
          "Recovery",
          recovery,
          true
        )
        .addField(
          "Damage",
          damage,
          true
        )
        .addField(
          "Stun",
          stun,
          true
        );
        msg.channel.send(Embed);
    }

    function stdimg(colour, startup, active, recovery, damage, stun, image, attachment) {
      const Embed = new MessageEmbed()
        .setColor(colour)
        .attachFiles(attachment)
        .setThumbnail (`attachment://${image}`)
        .addField(
          "Startup",
          startup,
          true
        )
        .addField(
          "Active",
          active,
          true
        )
        .addField(
          "Recovery",
          recovery,
          true
        )
        .addField(
          "Damage",
          damage,
          true
        )
        .addField(
          "Stun",
          stun,
          true
        );
        msg.channel.send(Embed);
    }

    function sc(colour, startup, active, recovery, damage, stun, cost) {
      const Embed = new MessageEmbed()
        .setColor(colour)
        .addField(
          "Startup",
          startup,
          true
        )
        .addField(
          "Active",
          active,
          true
        )
        .addField(
          "Recovery",
          recovery,
          true
        )
        .addField(
          "Damage",
          damage,
          true
        )
        .addField(
          "Stun",
          stun,
          true
        )
        .addField(
          "Cost",
          cost,
          true
        );
        msg.channel.send(Embed);
    }
  }
}