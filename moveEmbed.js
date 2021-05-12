module.exports = function(move, character, colour, sheet) {
  const { MessageEmbed, MessageAttachment } = require("discord.js")
  const Embed = new MessageEmbed();

  Embed.setColor(colour);
  if (move.image) {
    Embed
      .attachFiles(new MessageAttachment(`./characters/${character.toLowerCase()}Attachments/${move.image}`, move.image))
      .setThumbnail(`attachment://${move.image}`);
  };
  if (move.row) {
    Embed
      .setTitle((sheet.getCell(move.row, 1)).value)
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
  };
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

    )
  }

  return Embed;
}