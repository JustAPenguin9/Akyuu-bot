module.exports = {
  name: 'clear',
  run: async (bot, message, args) => {
    if (!args[1]) return
    if (message.channel.type === 'dm') return
    if (!message.member.permissions.has('MANAGE_MESSAGES') || !message.member.permissions.has('ADMINISTRATOR')) return

    const numToDelete = parseInt(args[1])
    if (isNaN(numToDelete)) return
    if (numToDelete > 99 || numToDelete <= 0) return message.reply('messages to delete needs to be between 1 and 99')

    await message.channel.bulkDelete(numToDelete + 1)
    if (!args.some((arg) => arg === '-s')) {
      message.channel.send(`${message.author} deleted ${numToDelete} messages in ${message.channel}`)
    }
  }
}
