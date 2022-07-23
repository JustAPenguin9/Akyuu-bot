const { loadSheet } = require('../sheets')

module.exports = {
  name: 'sync',
  run: async (bot, message, args) => {
    let msg = await message.channel.send('*looking over all the data in the sheet...*')
    await loadSheet(bot.doc)
    msg.edit('**data now synced!**')
  }
}
