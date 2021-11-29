module.exports = function(move, character, colour, sheet) {
  const { MessageEmbed, MessageAttachment } = require("discord.js")
  const Embed = new MessageEmbed().setColor(colour);

  if (move.image) {
    Embed
      .attachFiles(new MessageAttachment(`./attachments/${character.toLowerCase()}-attachments/${move.image}`, move.image))
      .setImage(`attachment://${move.image}`);
  };
  if (move.row) {
    if (typeof move.row === "number") {
      Embed.setTitle((sheet.getCell(move.row, 1)).value)

      if (typeof move.descOnly === "string") {
        Embed.setDescription(move.descOnly)
        return Embed
      } else if (typeof move.desOnly === "boolean" && move.descOnly === true) {
        Embed.addField(
          "Description",
          (sheet.getCell(move.row, 8)).value,
          // true
        )
        return Embed
      }

      Embed
      .addField(
        "Startup",
        (sheet.getCell(move.row, 2)).value,
        true
      )
      .addField(
        "Active",
        (sheet.getCell(move.row, 3)).value,
        true
      )
      .addField(
        "Recovery",
        (sheet.getCell(move.row, 4)).value,
        true
      )
      .addField(
        "Damage",
        (sheet.getCell(move.row, 5)).value,
        true
      )
      .addField(
        "Stun",
        (sheet.getCell(move.row, 6)).value,
        true
      )
    }

    if (move.isSC === true) {
      Embed.addField(
        "Cost",
        (sheet.getCell(move.row, 7)).value,
        true
      )
    }

    if (move.desc === true) {
      Embed.addField(
        "Description",
        (sheet.getCell(move.row, 8)).value,
        // true
      )
    }

    if (move.title) {
      if (typeof move.title === "string") Embed.setTitle(move.title)
    }
  } else {
    if (move.title) {
      if (typeof move.title === "string") Embed.setTitle(move.title)
    }

    if (move.descOnly) {
      if (typeof move.descOnly === "string") Embed.setDescription(move.descOnly)
    }
  }

  return Embed;
}