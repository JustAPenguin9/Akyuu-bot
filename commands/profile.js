const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "profile",
  description: "command",
  run(msg, args, hisotryDb) {
    // FIXME: this is ugly

    let wins;
    let losses;
    let ratio;
    hisotryDb.find({winner: msg.author.id}, (err, docs) => {
      if (err) {
        console.log(err);
        return;
      }
      wins = docs.length;

      hisotryDb.find({looser: msg.author.id}, (err, docs2) => {
        if (err) {
          console.log(err);
          return;
        }
        losses = docs2.length;

        ratio = (wins/losses).toPrecision(2)
        if (isNaN(ratio)) ratio = 0; // zero wins
        if (ratio == "Infinity" ) ratio = 1; // zero losses

        const embed = new MessageEmbed()
        .setColor("#B3E04D")
        .setTitle(`${msg.author.username} win loss ratio`)
        .addField(
          "Wins",
          wins,
          true
        )
        .addField(
          "Losses",
          losses,
          true
        )
        .addField(
          "W/L Ratio",
          ratio,
          true
        )

        msg.reply(embed)
      })
    })
  }
}
