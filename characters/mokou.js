module.exports = {
  name: "mokou",
  description: "command",
  run(msg, args, doc) {
    const { MessageEmbed, MessageAttachment} = require("discord.js")

    const sheet = doc.sheetsByIndex[0];

    colour = "#ff0000"

// CHARACTER MOVE / SECOND ARGUMENT CHECKER 
    switch (args[1]) {
      case "5a": case "a": case "4a":
        row = 360;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "f5a":
        row = 361;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "6a":
        row = 362;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "8a":
        row = 363;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "2a":
        row = 364;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "ja": case "j5a":
        row = 365;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "j6a":
        row = 366;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "j8a":
        row = 367;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "j2a":
        row = 368;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "5b": case "b":
        row = 369;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "2b":
        row = 370;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "8b":
        row = 371;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "6b":
        row = 372;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "cb": case "chargeb":
        row = 373;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "bbb": case "tenkai":
        row = 374;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "5c": case "c":
        row = 375;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "6c":
        row = 376;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "4c":
        row = 377;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "2c":
        row = 378;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "8c":
        row = 379;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "da": case "66a": case "dasha":
        row = 380;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "db": case "66b": case "dashb":
        row = 381;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "ab": case "occult":
        row = 382;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "ta": case "taga":
        row = 383;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "tja": case "tagja":
        row = 384;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "tb": case "tagb":
        row = 385;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        std(colour, startup, active, recovery, damage, stun)
        break;
      case "sc1": case "sc": case "spellcard": case "spellcard1":
        row = 386;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        cost = (sheet.getCell(row, 7)).value;
        sc(colour, startup, active, recovery, damage, stun, cost)
        break;
      case "sc2": case "spellcard2":
        row = 387;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        cost = (sheet.getCell(row, 7)).value;
        sc(colour, startup, active, recovery, damage, stun, cost)
        break;
      case "sc3": case "spellcard3":
        row = 388;
        startup = (sheet.getCell(row, 2)).value;
        active = (sheet.getCell(row, 3)).value;
        recovery = (sheet.getCell(row, 4)).value;
        damage =  (sheet.getCell(row, 5)).value;
        stun = (sheet.getCell(row, 6)).value;
        cost = (sheet.getCell(row, 7)).value;
        sc(colour, startup, active, recovery, damage, stun, cost)
        break;
      case "lw": case "lastword":
        row = 389;
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