const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'profile',
  run: (bot, message, args) => {
    // FIXME: historyDb as a parameter

    const user = message.mentions.users.first() ?? message.author
    let wins
    let losses
    let ratio

    bot.historyDb.find({ winner: user.id }, (err, docs) => {
      if (err) {
        console.log(err)
        return
      }
      wins = docs.length

      bot.historyDb.find({ looser: user.id }, (err, docs2) => {
        if (err) {
          console.log(err)
          return
        }
        losses = docs2.length

        ratio = (wins / losses).toPrecision(2)
        if (isNaN(ratio)) ratio = '0.0' // zero wins
        if (ratio === 'Infinity') ratio = '1.0' // zero losses

        const embed = new MessageEmbed()
          .setColor('#B3E04D')
          .setTitle(`${user.username} win loss ratio`)
          .setThumbnail(
            user.avatarURL()
              ? `${user.avatarURL()}?size=1024`
              : user.displayAvatarURL({ dynamic: true })
          )
          .addField(
            'Wins',
            wins.toString(),
            true
          )
          .addField(
            'Losses',
            losses.toString(),
            true
          )
          .addField(
            'W/L Ratio',
            ratio.toString(),
            true
          )
          .addField(
            'Total games played',
            (wins + losses).toString(),
            true
          )

        message.reply({ embeds: [embed] })
      })
    })
  }
}
