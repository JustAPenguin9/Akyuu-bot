const { loadSheet } = require('../functions/sheets')

module.exports = {
  name: 'sync',
  run: async (bot, message, args) => {
    const msg = await message.channel.send('*looking over all the data in the sheet...*')
    await loadSheet(bot.doc)
    msg.edit('**data now synced!**')
  }
}
