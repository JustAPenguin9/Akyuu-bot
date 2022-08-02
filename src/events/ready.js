module.exports = {
  name: 'ready',
  run: (bot) => {
    console.log(`<${bot.user?.username} online>`)
  }
}
