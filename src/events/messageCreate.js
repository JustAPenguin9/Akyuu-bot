const character = require('../character')

module.exports = {
  name: 'messageCreate',
  run: (bot, message) => {
    const prefix = process.env.PREFIX
    const sheet = bot.doc.sheetsByIndex[0]

    if (message.author.bot) return

    // commands with no prefix
    switch (message.content) {
      case 'o/':
        message.channel.send('o/')
        break
    }

    // check for prefix
    if (!message.content.toLocaleLowerCase().startsWith(prefix)) return

    // create args from message
    const args = message.content.toLowerCase().substring(prefix.length).split(/\s+/)

    // if the arg matches a command then run the command
    bot.commands.get(args[0])?.run(bot, message, args)

    // else check if it is a character instead
    if (bot.characters.get(args[0])) {
      character(bot, sheet, message, args)
    }
  }
}
