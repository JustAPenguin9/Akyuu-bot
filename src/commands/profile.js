const { EmbedBuilder } = require('discord.js')

module.exports = {
  name: 'profile',
  run: async (bot, message, args) => {
    const player = message.mentions.users.first() ?? message.author
    let wins
    let losses

    try {
      wins = (await bot.historyDb.query(`SELECT * FROM history WHERE winner = ${player.id}`)).length
      losses = (await bot.historyDb.query(`SELECT * FROM history WHERE loser = ${player.id}`)).length
    } catch (error) {
      message.channel.send('error recieving past results from the database: ' + error)
    } finally {
      let ratio = (wins / losses).toPrecision(2)
      if (isNaN(ratio)) ratio = '0.0' // zero wins
      if (ratio === 'Infinity') ratio = '1.0' // zero losses

      const embed = new EmbedBuilder()
        .setColor('#B3E04D')
        .setTitle(`${player.username} win loss ratio`)
        .setThumbnail(
          player.avatarURL()
            ? `${player.avatarURL()}?size=1024`
            : player.displayAvatarURL({ dynamic: true })
        )
        .addFields(
          { name: 'Wins', value: wins.toString(), inline: true },
          { name: 'Losses', value: losses.toString(), inline: true },
          { name: 'W/L Ratio', value: ratio.toString(), inline: true },
          { name: 'Total games played', value: (wins + losses).toString(), inline: true }
        )

      message.reply({ embeds: [embed] })
    }
  }
}
