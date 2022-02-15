module.exports = {
  name: "result",
  description: "command",
  async run(msg, args, historyDb) {
    if (!args[1]) return; // reply with nothing if no user was mentioned

    let message;
    let recorded = false;

    try {
      message = await msg.channel.send(`<@${msg.mentions.users.first().id}> react with 🇾 if this is true`);
      message.react("🇾");
    } catch (error) { return } // if the second argument is not a mention return

    const filter = (reaction, user) => {
      return reaction.emoji.name === "🇾"
      && user.id === msg.mentions.users.first().id
      && !user.bot                // !win @bot
      && user.id != msg.author.id // !win @me
      && !recorded                // has not been recorded
    };

    let collector = message.createReactionCollector(filter, { time: 10000 });
    collector.on("collect", async (reaction) => {
      if (reaction.emoji.name === "🇾") {
        recorded = true;

        if (args[0] == "win") { // author beat mentioned user
          await message.edit(`Results recorded: <@${msg.author.id}> beat <@${msg.mentions.users.first().id}>`);
          historyDb.insert({winner: msg.author.id, looser: msg.mentions.users.first().id, time: Date.now()});
        } else { // mentioned user beat author
          await message.edit(`Results recorded: <@${msg.mentions.users.first().id}> beat <@${msg.author.id}>`);
          historyDb.insert({winner: msg.mentions.users.first().id, looser: msg.author.id, time: Date.now()})
        }
      }
    })
  }
}
