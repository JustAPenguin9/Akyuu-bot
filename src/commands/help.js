const { EmbedBuilder } = require('discord.js')

module.exports = {
  name: 'help',
  aliases: ['h', 'commands'],
  run: (bot, message, args) => {
    const embed = new EmbedBuilder()
      .setColor('#B3E04D') // #C3D97B #A6BC64 #EAF198
      .setTitle('Akyuu bot commands\nprefix: **!**')
      .addFields(
        { name: 'to get the data for a move type **![character] [move]**', value: '[move] is the move you want in numpad notation. you can use !wiki controls for more information on that.\nex: !reimu j5a' },
        { name: "if you're new to AOCF, use **!starthere**", value: 'this will get you the links to SogofGod1998 starterpack complete with everything you need to play.' },
        { name: 'wiki', value: 'you can also use !wiki [option] to get to a spacific wiki page or just !wiki by itselft to go to the homepage.\nwiki options: any of the characters, controls, mechanics', inline: true },
        { name: 'wiki arguments', value: '[character]\ncontrols\nmechanics', inline: true },
        { name: 'multiplayer', value: 'win --you won against the other player\nloss --you lost against the other player\nprofile [user] --view your, or someone else\'s, profile' },
        { name: 'other commands', value: 'version  --names the version\nlinks  --gives many useful links\nrepo  --the github repository of Akyuu' }
      )

    message.reply({ embeds: [embed] })
  }
}
