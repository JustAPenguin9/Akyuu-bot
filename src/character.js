// FIXME: rename this to something better

const embedGenerator = require('./embedGenerator')
const getMove = require('./getMove')

module.exports = async (bot, sheet, message, args) => {
  const filter = (reaction, user) => {
    return ['⬅️', '➡️', '💠', '🇦', '🇧', '🅱️'].includes(reaction.emoji.name) &&
      user.id === message.author.id &&
      !user.bot
  }
  const json = bot.characters.get(args[0])
  const move = json.moves[getMove(json, args[1])]
  const embeds = []
  let messageEmbed
  let page = 0

  // if a match is not found return
  if (!move) return

  console.log('pre page check move ' + JSON.stringify(move))
  console.log(typeof move.pages === 'object')

  // TODO: make every move have a title and remove the check from setTitle() in embedGenerator
  move.arg = args[1]

  if (typeof move.pages === 'object') {
    console.log('post page check move ' + JSON.stringify(move))

    move.pages?.forEach(move => {
      embeds.push(embedGenerator(sheet, json, move))
    })

    // FIXME: i think this will crash when an embed has an image
    messageEmbed = await message.channel.send({ embeds: [embeds[page]] })
    messageEmbed.react('⬅️')
    messageEmbed.react('➡️')

    const collector = messageEmbed.createReactionCollector({ filter, time: 60000 })
    collector.on('collect', async (reaction) => {
      switch (reaction.emoji.name) {
        case '⬅️':
          if (page === 0) page = 3
          else page--
          await messageEmbed.edit({ embeds: [embeds[page]] })
          break
        case '➡️':
          if (page === embeds.length - 1) page = 0
          else page++
          await messageEmbed.edit({ embeds: [embeds[page]] })
          break
      }
    })
  } else {
    embeds.push(embedGenerator(sheet, json, move))

    if (move.image) message.channel.send({ embeds, files: [`./attachments/${json.name}/${move.image}`] })
    else message.channel.send({ embeds })
  }

  console.log(embeds.length)
}
