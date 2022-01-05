const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "help",
  description: "command",
  run(msg, args) {
    const embed = new MessageEmbed()
      .setColor("#B3E04D") // #C3D97B #A6BC64 #EAF198
      .setTitle("Akyuu bot commands\nprefix: **!**")
      .addField(
        "to get the data for a move type **![character] [move]**",
        `[move] is the move you want in numpad notation. you can use !wiki controls for more information on that. \
        \nex: !reimu j5a`
      )
      .addField(
        "if you're new to AOCF, use **!starthere**",
        "this will get you the links to SogofGod1998 starterpack complete with everything you need to play."
      )
      .addField(
        "wiki",
        `you can also use !wiki [option] to get to a spacific wiki page or just !wiki by itselft to go to the homepage. \
        \nwiki options: any of the characters, controls, mechanics`,
        true
      )
      .addField(
        "wiki arguments",
        `[character] \
        \ncontrols \
        \nmechanics`,
        true
      )
      .addField(
        "multiplayer",
        `win --you won against the other player \
        \nloss --you lost against the other player \
        \nprofile --view your profile`,
      )
      .addField(
        "other commands",
        `version  --names the version \
        \nlinks  --gives many useful links \
        \nrepo  --the github repository of Akyuu`,
      )

    msg.reply(embed);
  }
}