module.exports = {
  name: "kokoro",
  description: "command",
  async run(msg, args, doc) {
    const { MessageEmbed, MessageAttachment, createReactionCollector } = require("discord.js")

    const sheet = doc.sheetsByIndex[0];

    colour = "#FFB2E4";

    collectorTime = 60000;
    var messageEmbed;
    var filter = (reaction, user) => ["⚪", "🔴", "🟢", "🔵"].includes(reaction.emoji.name) && (user.id === msg.author.id);
    var noEmoEmbed;
    var angerEmbed;
    var joyEmbed;
    var melEmbed;

// CHARACTER MOVE / SECOND ARGUMENT CHECKER
    switch (args[1]) {
      case "5a": case "a": case "4a": case "c5a":
        row = 290;
        image = "Kokoroc5a.gif"
        attachment = new MessageAttachment(`./characters/kokoroAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "f5a":
        row = 291;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "6a":
        row = 292;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "8a":
        row = 293;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "2a":
        row = 294;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "ja": case "j5a":
        row = 295;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "j6a":
        row = 296;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "j8a":
        row = 297;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "j2a":
        row = 298;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "5b": case "b": case "2b": case "8b":
        noEmoEmbed = new MessageEmbed()
          .setColor(colour)
          .setTitle("5b No Emotion")
          .addField("Startup", (sheet.getCell(229, 2)).value, true)
          .addField("Active", (sheet.getCell(229, 3)).value, true)
          .addField("Recovery", (sheet.getCell(229, 4)).value, true)
          .addField("Damage", (sheet.getCell(229, 5)).value, true)
          .addField("Stun", (sheet.getCell(229, 6)).value, true);
        angerEmbed = new MessageEmbed()
          .setColor(colour)
          .setTitle("5b Anger")
          .addField("Startup", (sheet.getCell(300, 2)).value, true)
          .addField("Active", (sheet.getCell(300, 3)).value, true)
          .addField("Recovery", (sheet.getCell(300, 4)).value, true)
          .addField("Damage", (sheet.getCell(300, 5)).value, true)
          .addField("Stun", (sheet.getCell(300, 6)).value, true);
        joyEmbed = new MessageEmbed()
          .setColor(colour)
          .setTitle("5b Joy")
          .addField("Startup", (sheet.getCell(301, 2)).value, true)
          .addField("Active", (sheet.getCell(301, 3)).value, true)
          .addField("Recovery", (sheet.getCell(301, 4)).value, true)
          .addField("Damage", (sheet.getCell(301, 5)).value, true)
          .addField("Stun", (sheet.getCell(301, 6)).value, true);
        melEmbed = new MessageEmbed()
          .setColor(colour)
          .setTitle("5b Melancholy")
          .addField("Startup", (sheet.getCell(302, 2)).value, true)
          .addField("Active", (sheet.getCell(302, 3)).value, true)
          .addField("Recovery", (sheet.getCell(302, 4)).value, true)
          .addField("Damage", (sheet.getCell(302, 5)).value, true)
          .addField("Stun", (sheet.getCell(302, 6)).value, true);

        messageEmbed = await msg.channel.send(noEmoEmbed)
        var page = "noEmo"
        messageEmbed.react("⚪");
        messageEmbed.react("🔴");
        messageEmbed.react("🟢");
        messageEmbed.react("🔵");

        var collector = messageEmbed.createReactionCollector(filter, { time: collectorTime });
        collector.on("collect", async (reaction) => {
          switch(reaction.emoji.name) {
            case "🔴":
              if(page === "anger") return;
              await messageEmbed.edit(angerEmbed);
              page = "anger";
              break;
            case "⚪":
              if(page === "noEmo") return;
              await messageEmbed.edit(noEmoEmbed);
              page = "noEmo";
              break;
            case "🟢":
              if(page === "joy") return;
              await messageEmbed.edit(joyEmbed);
              page = "joy";
              break;
            case "🔵":
              if(page === "mel") return;
              await messageEmbed.edit(melEmbed);
              page = "mel";
              break;
          }
        })
        break;
      case "6b":
        noEmoEmbed = new MessageEmbed()
          .setColor(colour)
          .setTitle("6b No Emotion")
          .addField("Startup", (sheet.getCell(303, 2)).value, true)
          .addField("Active", (sheet.getCell(303, 3)).value, true)
          .addField("Recovery", (sheet.getCell(303, 4)).value, true)
          .addField("Damage", (sheet.getCell(303, 5)).value, true)
          .addField("Stun", (sheet.getCell(303, 6)).value, true);
        angerEmbed = new MessageEmbed()
          .setColor(colour)
          .setTitle("6b Anger")
          .addField("Startup", (sheet.getCell(304, 2)).value, true)
          .addField("Active", (sheet.getCell(304, 3)).value, true)
          .addField("Recovery", (sheet.getCell(304, 4)).value, true)
          .addField("Damage", (sheet.getCell(304, 5)).value, true)
          .addField("Stun", (sheet.getCell(304, 6)).value, true);
        joyEmbed = new MessageEmbed()
          .setColor(colour)
          .setTitle("6b Joy")
          .addField("Startup", (sheet.getCell(305, 2)).value, true)
          .addField("Active", (sheet.getCell(305, 3)).value, true)
          .addField("Recovery", (sheet.getCell(305, 4)).value, true)
          .addField("Damage", (sheet.getCell(305, 5)).value, true)
          .addField("Stun", (sheet.getCell(305, 6)).value, true);
        melEmbed = new MessageEmbed()
          .setColor(colour)
          .setTitle("6b Melancholy")
          .addField("Startup", (sheet.getCell(306, 2)).value, true)
          .addField("Active", (sheet.getCell(306, 3)).value, true)
          .addField("Recovery", (sheet.getCell(306, 4)).value, true)
          .addField("Damage", (sheet.getCell(306, 5)).value, true)
          .addField("Stun", (sheet.getCell(306, 6)).value, true);

        messageEmbed = await msg.channel.send(noEmoEmbed)
        var page = "noEmo"
        messageEmbed.react("⚪");
        messageEmbed.react("🔴");
        messageEmbed.react("🟢");
        messageEmbed.react("🔵");

        var collector = messageEmbed.createReactionCollector(filter, { time: collectorTime });
        collector.on("collect", async (reaction) => {
          switch(reaction.emoji.name) {
            case "🔴":
              if(page === "anger") return;
              await messageEmbed.edit(angerEmbed);
              page = "anger";
              break;
            case "⚪":
              if(page === "noEmo") return;
              await messageEmbed.edit(noEmoEmbed);
              page = "noEmo";
              break;
            case "🟢":
              if(page === "joy") return;
              await messageEmbed.edit(joyEmbed);
              page = "joy";
              break;
            case "🔵":
              if(page === "mel") return;
              await messageEmbed.edit(melEmbed);
              page = "mel";
              break;
          }
        })
        break;
      case "cb": case "chargeb": case "[b]":
        row = 307;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "bbb": case "tenkai":
        noEmoEmbed = new MessageEmbed()
          .setColor(colour)
          .setTitle("Tenkai No Emotion")
          .addField("Startup", (sheet.getCell(308, 2)).value, true)
          .addField("Active", (sheet.getCell(308, 3)).value, true)
          .addField("Recovery", (sheet.getCell(308, 4)).value, true)
          .addField("Damage", (sheet.getCell(308, 5)).value, true)
          .addField("Stun", (sheet.getCell(308, 6)).value, true);
        angerEmbed = new MessageEmbed()
          .setColor(colour)
          .setTitle("Tenkai Anger")
          .addField("Startup", (sheet.getCell(309, 2)).value, true)
          .addField("Active", (sheet.getCell(309, 3)).value, true)
          .addField("Recovery", (sheet.getCell(309, 4)).value, true)
          .addField("Damage", (sheet.getCell(309, 5)).value, true)
          .addField("Stun", (sheet.getCell(309, 6)).value, true);
        joyEmbed = new MessageEmbed()
          .setColor(colour)
          .setTitle("Tenkai Joy")
          .addField("Startup", (sheet.getCell(310, 2)).value, true)
          .addField("Active", (sheet.getCell(310, 3)).value, true)
          .addField("Recovery", (sheet.getCell(310, 4)).value, true)
          .addField("Damage", (sheet.getCell(310, 5)).value, true)
          .addField("Stun", (sheet.getCell(310, 6)).value, true);
        melEmbed = new MessageEmbed()
          .setColor(colour)
          .setTitle("Tenkai Melancholy")
          .addField("Startup", (sheet.getCell(311, 2)).value, true)
          .addField("Active", (sheet.getCell(311, 3)).value, true)
          .addField("Recovery", (sheet.getCell(311, 4)).value, true)
          .addField("Damage", (sheet.getCell(311, 5)).value, true)
          .addField("Stun", (sheet.getCell(311, 6)).value, true);

        messageEmbed = await msg.channel.send(noEmoEmbed)
        var page = "noEmo"
        messageEmbed.react("⚪");
        messageEmbed.react("🔴");
        messageEmbed.react("🟢");
        messageEmbed.react("🔵");

        var collector = messageEmbed.createReactionCollector(filter, { time: collectorTime });
        collector.on("collect", async (reaction) => {
          switch(reaction.emoji.name) {
            case "🔴":
              if(page === "anger") return;
              await messageEmbed.edit(angerEmbed);
              page = "anger";
              break;
            case "⚪":
              if(page === "noEmo") return;
              await messageEmbed.edit(noEmoEmbed);
              page = "noEmo";
              break;
            case "🟢":
              if(page === "joy") return;
              await messageEmbed.edit(joyEmbed);
              page = "joy";
              break;
            case "🔵":
              if(page === "mel") return;
              await messageEmbed.edit(melEmbed);
              page = "mel";
              break;
          }
        })
        break;
      case "5c": case "c":
        row = 312;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "6c":
        row = 313;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "4c":
        row = 314;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "2c":
        row = 315;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "8c":
        row = 316;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "da": case "66a": case "dasha":
        row = 317;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "db": case "66b": case "dashb":
        row = 318;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "ab": case "occult":
        row = 319;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "ta": case "taga":
        row = 320;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "tja": case "tagja":
        row = 321;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "tb": case "tagb":
        row = 322;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        row = 323;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        cost = (sheet.getCell(row, 7)).value;
        sc(colour, startup, active, recovery, damage, stun, cost)
        break;
      case "sc2": case "spellcard2":
        row = 324;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        cost = (sheet.getCell(row, 7)).value;
        sc(colour, startup, active, recovery, damage, stun, cost)
        break;
      case "sc3": case "spellcard3":
        row = 325;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        cost = (sheet.getCell(row, 7)).value;
        sc(colour, startup, active, recovery, damage, stun, cost)
        break;
      case "lw": case "lastword":
        row = 326;
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