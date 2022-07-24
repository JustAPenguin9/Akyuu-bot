const { EmbedBuilder } = require('discord.js')

module.exports = {
  name: 'profile',
  run: (bot, message, args) => {
    // FIXME: historyDb as a parameter
    // TODO: proper error handling

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

        const embed = new EmbedBuilder()
          .setColor('#B3E04D')
          .setTitle(`${user.username} win loss ratio`)
          .setThumbnail(
            user.avatarURL()
              ? `${user.avatarURL()}?size=1024`
              : user.displayAvatarURL({ dynamic: true })
          )
          .addFields(
            { name: 'Wins', value: wins.toString(), inline: true },
            { name: 'Losses', value: losses.toString(), inline: true },
            { name: 'W/L Ratio', value: ratio.toString(), inline: true },
            { name: 'Total games played', value: (wins + losses).toString(), inline: true }
          )

        message.reply({ embeds: [embed] })
      })
    })
  }
}
