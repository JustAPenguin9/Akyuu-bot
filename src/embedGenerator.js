// FIXME: rename this to something better
// TODO: make every move have a title and remove the check from setTitle() in embedGenerator

const { EmbedBuilder } = require('discord.js')

module.exports = (sheet, json, move) => {
  const embed = new EmbedBuilder()
    .setTitle(move.title ? move.title : move.arg)
    .setColor(json.colour)
    // TODO: make this include spaces between and choose whether to put this or title
    // .setAuthor({name: move.names.toString()})

  const row = json.startingRow + move.rowOffset - 1

  if (move.image && (move.isSpellcard || move.thumbnail)) {
    embed.setThumbnail(`attachment://${move.image}`)
  } else if (move.image) {
    embed.setImage(`attachment://${move.image}`)
  }

  if (move.description) {
    embed.setDescription(move.description)
    return embed
  }

  embed.addFields(
    {name: 'Startup', value: (sheet.getCell(row, 2)).value.toString(), inline: true},
    {name: 'Active', value: (sheet.getCell(row, 3)).value.toString(), inline: true},
    {name: 'Recovery', value: (sheet.getCell(row, 4)).value.toString(), inline: true},
    {name: 'Damage', value: (sheet.getCell(row, 5)).value.toString(), inline: true},
    {name: 'Stun', value: (sheet.getCell(row, 6)).value.toString(), inline: true},
  )

  if (move.isSpellcard) embed.addFields({name: 'Cost', value: (sheet.getCell(row, 7)).value.toString(), inline: true})

  return embed
}

// (sheet, json, move) => {
//   const embed = new MessageEmbed()
//     .setTitle(move.title ? move.title : move.arg)
//     .setColor(json.colour)
//     // TODO: make this include spaces between and choose whether to put this or title
//     // .setAuthor({name: move.names.toString()})

//   const row = json.startingRow + move.rowOffset - 1

//   if (move.image && (move.isSpellcard || move.thumbnail)) {
//     embed.setThumbnail(`attachment://${move.image}`)
//   } else if (move.image) {
//     embed.setImage(`attachment://${move.image}`)
//   }

//   if (move.description) {
//     embed.setDescription(move.description)
//     return embed
//   }

//   embed
//     .addField(
//       'Startup',
//       (sheet.getCell(row, 2)).value.toString(),
//       true
//     )
//     .addField(
//       'Active',
//       (sheet.getCell(row, 3)).value.toString(),
//       true
//     )
//     .addField(
//       'Recovery',
//       (sheet.getCell(row, 4)).value.toString(),
//       true
//     )
//     .addField(
//       'Damage',
//       (sheet.getCell(row, 5)).value.toString(),
//       true
//     )
//     .addField(
//       'Stun',
//       (sheet.getCell(row, 6)).value.toString(),
//       true
//     )

//   if (move.isSpellcard) {
//     embed.addField(
//       'cost',
//       (sheet.getCell(row, 7)).value.toString(),
//       true
//     )
//   }

//   return embed
// }
