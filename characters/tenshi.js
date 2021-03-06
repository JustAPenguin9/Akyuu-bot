module.exports = {
  name: "tenshi",
  description: "command",
  run(msg, args, doc) {
    const { MessageEmbed, MessageAttachment} = require("discord.js")

    const sheet = doc.sheetsByIndex[0];

    colour = "#0000ff"

// CHARACTER MOVE / SECOND ARGUMENT CHECKER 
    switch (args[1]) {
      case "5a": case "a": case "4a": case "c5a":
        row = 514;
        image = "Tenshic5a.gif"
        attachment = new MessageAttachment(`./characters/tenshiAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "f5a":
        row = 515;
        image = "Tenshif5a.png"
        attachment = new MessageAttachment(`./characters/tenshiAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "6a":
        row = 516;
        image = "Tenshi6a.png"
        attachment = new MessageAttachment(`./characters/tenshiAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "8a":
        row = 517;
        image = "Tenshi8a.png"
        attachment = new MessageAttachment(`./characters/tenshiAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "2a":
        row = 518;
        image = "Tenshi2a.png"
        attachment = new MessageAttachment(`./characters/tenshiAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "ja": case "j5a":
        row = 519;
        image = "Tenshij5a.png"
        attachment = new MessageAttachment(`./characters/tenshiAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "j6a":
        row = 520;
        image = "Tenshi6a.png"
        attachment = new MessageAttachment(`./characters/tenshiAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "j8a":
        row = 521;
        image = "Tenshi8a.png"
        attachment = new MessageAttachment(`./characters/tenshiAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "j2a":
        row = 522;
        image = "Tenshi2a.png"
        attachment = new MessageAttachment(`./characters/tenshiAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "5b": case "b":
        row = 523;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "2b":
        row = 524;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "8b":
        row = 525;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "6b":
        row = 526;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "cb": case "chargeb": case "[b]":
        row = 527;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "bbb": case "tenkai":
        row = 528;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "5c": case "c":
        row = 529;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "6c":
        row = 530;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "4c":
        row = 531;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "2c":
        row = 532;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "8c":
        row = 533;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "da": case "66a": case "dasha":
        row = 534;
        image = "Tenshi66a.png"
        attachment = new MessageAttachment(`./characters/tenshiAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "db": case "66b": case "dashb":
        row = 535;
        image = "Tenshi66b.png"
        attachment = new MessageAttachment(`./characters/tenshiAttachments/${image}`, image);
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        stdimg(colour, startup, active, recovery, damage, stun, image, attachment);
        break;
      case "ab": case "occult":
        row = 536;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "ta": case "taga":
        row = 537;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "tja": case "tagja":
        row = 538;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "tb": case "tagb":
        row = 539;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        row = 540;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        cost = (sheet.getCell(row, 7)).value;
        sc(colour, startup, active, recovery, damage, stun, cost)
        break;
      case "sc2": case "spellcard2":
        row = 541;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        cost = (sheet.getCell(row, 7)).value;
        sc(colour, startup, active, recovery, damage, stun, cost)
        break;
      case "sc3": case "spellcard3":
        row = 542;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        cost = (sheet.getCell(row, 7)).value;
        sc(colour, startup, active, recovery, damage, stun, cost)
        break;
      case "lw": case "lastword":
        row = 543;
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