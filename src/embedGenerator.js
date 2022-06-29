// FIXME: rename this to something better

const { MessageEmbed } = require('discord.js')

module.exports = (sheet, json, move) => {
  const embed = new MessageEmbed()
    .setTitle(move.title ? move.title : move.arg)
    .setColor(json.colour)
    // TODO: make this include spaces between and choose whether to put this or title
    // .setAuthor({name: move.names.toString()})

  console.log('start ' + json.startingRow, 'offset ' + move.rowOffset, 'total row ' + (json.startingRow + move.rowOffset))
  const row = json.startingRow + move.rowOffset - 1

  if (move.image && move.isSC) {
    embed.setThumbnail(`attachment://${move.image}`)
  } else if (move.image) {
    embed.setImage(`attachment://${move.image}`)
  }

  if (move.description) {
    embed.setDescription(move.description)
    return embed
  }

  console.log(move)
  console.log('tada ' + sheet.getCell(row, 2).value)

  embed
    .addField(
      'Startup',
      (sheet.getCell(row, 2)).value.toString(),
      true
    )
    .addField(
      'Active',
      (sheet.getCell(row, 3)).value.toString(),
      true
    )
    .addField(
      'Recovery',
      (sheet.getCell(row, 4)).value.toString(),
      true
    )
    .addField(
      'Damage',
      (sheet.getCell(row, 5)).value.toString(),
      true
    )
    .addField(
      'Stun',
      (sheet.getCell(row, 6)).value.toString(),
      true
    )

  if (move.isSC) {
    embed.addField(
      'cost',
      (sheet.getCell(row, 4)).value.toString(),
      true
    )
  }

  return embed
}
