module.exports = {
  name: "doremy",
  description: "command",
  run(msg, args, doc) {
    const { MessageEmbed, MessageAttachment} = require("discord.js")

    const sheet = doc.sheetsByIndex[0];

    colour = "#FF6CD9"

// CHARACTER MOVE / SECOND ARGUMENT CHECKER 
    switch (args[1]) {
      case "5a": case "a": case "4a": case "c5a":
        row = 484;
        image = "Doremyc5a.gif"
        attachment = new MessageAttachment(`./characters/doremyAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "f5a":
        row = 485;
        image = "Doremyf5a.png"
        attachment = new MessageAttachment(`./characters/doremyAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "6a":
        row = 486;
        image = "Doremy6a.png"
        attachment = new MessageAttachment(`./characters/doremyAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "8a":
        row = 487;
        image = "Doremy8a.png"
        attachment = new MessageAttachment(`./characters/doremyAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "2a":
        row = 488;
        image = "Doremy2a.png"
        attachment = new MessageAttachment(`./characters/doremyAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "ja": case "j5a":
        row = 489;
        image = "Doremyj5a.gif"
        attachment = new MessageAttachment(`./characters/doremyAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "j6a":
        row = 490;
        image = "Doremyj6a.png"
        attachment = new MessageAttachment(`./characters/doremyAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "j8a":
        row = 491;
        image = "Doremy8a.png"
        attachment = new MessageAttachment(`./characters/doremyAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "j2a":
        row = 492;
        image = "Doremyj2a.png"
        attachment = new MessageAttachment(`./characters/doremyAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "5b": case "b":
        row = 493;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "2b":
        row = 494;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "8b":
        row = 495;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "6b":
        row = 496;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "cb": case "chargeb": case "[b]":
        row = 497;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "bbb": case "tenkai":
        row = 498;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "5c": case "c":
        msg.channel.send("```Doremy turns on her vacuum, pulling the opponent towards her and sucking up any dream souls present in the stage. The vacuum itself has no hitbox, but the dream souls do as they quickly make their way towards the vacuum, potentially dealing huge damage on hit or chip damage on block. An important move to master, as it greatly improves on her blockstrings, okizemi and even combos.```");
        break;
      case "6c":
        row = 500;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "4c":
        row = 501;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "2c":
        row = 502;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "8c":
        row = 503;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "da": case "66a": case "dasha":
        row = 504;
        image = "Doremy66a.png"
        attachment = new MessageAttachment(`./characters/doremyAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "db": case "66b": case "dashb":
        row = 505;
        image = "Doremy2a.png"
        attachment = new MessageAttachment(`./characters/doremyAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "ab": case "occult":
        row = 506;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "ta": case "taga":
        row = 507;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "tja": case "tagja":
        row = 508;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "tb": case "tagb":
        row = 509;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        row = 510;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        cost = (sheet.getCell(row, 7)).value;
        sc(colour, startup, active, recovery, damage, stun, cost)
        break;
      case "sc2": case "spellcard2":
        row = 511;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        cost = (sheet.getCell(row, 7)).value;
        sc(colour, startup, active, recovery, damage, stun, cost)
        break;
      case "sc3": case "spellcard3":
        row = 512;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        cost = (sheet.getCell(row, 7)).value;
        sc(colour, startup, active, recovery, damage, stun, cost)
        break;
      case "lw": case "lastword":
        row = 513;
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