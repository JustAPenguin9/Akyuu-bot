module.exports = {
  name: 'discordid',
  aliases: ['id', 'did', 'akyuustuff'],
  run: async (bot, message, args) => {
    const contents = {
      discordId: message.author.id
    }

    // send discord client id as a text file
    await message.author.send({
      content: 'Save this file to the folder that has AoCF in it, **Keep it private!**',
      files: [{
        attachment: Buffer.from(JSON.stringify(contents, null, 2)),
        name: 'AkyuuStuff',
        description: 'JSON file that includes your discord id'
      }]
    })

    // send message saying check your dms
    message.reply('check your dms!')
  }
}
