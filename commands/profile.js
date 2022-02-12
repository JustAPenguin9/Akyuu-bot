const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "profile",
  description: "command",
  run(msg, hisotryDb) {

    let user = msg.mentions.users.first() ?? msg.author; 
    let wins;
    let losses;
    let ratio;

    hisotryDb.find({ winner: user.id }, (err, docs) => {
      if (err) {
        console.log(err);
        return;
      }
      wins = docs.length;

      hisotryDb.find({ looser: user.id }, (err, docs2) => {
        if (err) {
          console.log(err);
          return;
        }
        losses = docs2.length;

        ratio = (wins / losses).toPrecision(2)
        if (isNaN(ratio)) ratio = "0.0"; // zero wins
        if (ratio == "Infinity") ratio = "1.0"; // zero losses

        const embed = new MessageEmbed()
        .setColor("#B3E04D")
        .setTitle(`${user.username} win loss ratio`)
        .setThumbnail(
          user.avatarURL() ? `${user.avatarURL()}?size=1024`
            : user.displayAvatarURL({ dynamic: true })
        )
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
        .addField(
          "Total games played",
          wins + losses,
          true
        )

        msg.reply(embed)
      })
    })
  }
}
