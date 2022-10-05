module.exports = {
  name: 'win',
  aliases: ['loss'],
  run: async (bot, message, args) => {
    let msg
    let recorded = false

    // check whether the user is winning against themselves or a bot
    if (message.mentions.users.first()?.id === message.author.id || message.mentions.users.first()?.bot) return

    try {
      msg = await message.channel.send(`<@${message.mentions.users.first().id}> react with 🇾 if this is true`)
      await msg.react('🇾')
    } catch (error) { return } // if the second argument is not a mention return

    const filter = (reaction, user) => {
      return reaction.emoji.name === '🇾' &&
        user.id === message.mentions.users.first().id &&
        !user.bot && // !win @bot
        user.id !== message.author.id && // !win @messageAuthor
        !recorded // result has already been recorded
    }

    const collector = msg.createReactionCollector({ filter, time: 60000 })
    collector.on('collect', async (reaction) => {
      if (reaction.emoji.name === '🇾') {
        recorded = true

        // check if either of the users have recorded resutls in the last 20 seconds
        if (
          bot.CommandTimeout.has(`${message.author.id} ${this.name}`) ||
          bot.CommandTimeout.has(`${message.mentions.users.first().id} ${this.name}`)
        ) {
          message.channel.send('wait before sending results again')
        } else {
          bot.CommandTimeout.add(`${message.author.id} ${this.name}`)
          bot.CommandTimeout.add(`${message.mentions.users.first().id} ${this.name}`)
          setTimeout(() => {
            bot.CommandTimeout.delete(`${message.author.id} ${this.name}`)
            bot.CommandTimeout.delete(`${message.mentions.users.first().id} ${this.name}`)
          }, 10000) // restict them from using the command
        }

        // record results
        let m
        const values = []
        if (args[0] === 'win') { // author beat mentioned user
          m = `Results recorded: <@${message.author.id}> beat <@${message.mentions.users.first().id}>`
          values.push(message.author.id, message.mentions.users.first().id)
        } else { // mentioned user beat author
          m = `Results recorded: <@${message.mentions.users.first().id}> beat <@${message.author.id}>`
          values.push(message.mentions.users.first().id, message.author.id)
        }
        try {
          values.push(Date.now().toString())
          await bot.historyDb.query('INSERT INTO history (winner, loser, time) VALUES (?, ?, ?);', values)
          msg.edit(m)
        } catch (error) {
          message.channel.send('error recording the results to the database')
          console.log(error)
        }
      }
    })
  }
}
