const { loadSheet } = require('../sheets')

module.exports = {
  name: 'sync',
  run: async (bot, message, args) => {
    await loadSheet(bot.doc)
    message.channel.send('**data now synced!**')
  }
}
