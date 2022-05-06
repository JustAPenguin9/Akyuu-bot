module.exports = {
  name: "clear",
  description: "command",
  run(msg, args) {
    if (!args[1]) return;
    if (msg.channel.type == "dm") return;
    if (!msg.member.permissions.has("MANAGE_MESSAGES") || !msg.member.permissions.has("ADMINISTRATOR")) return;

    let numToDelete = parseInt(args[1]);
    if (isNaN(numToDelete)) return;
    if (numToDelete > 99 || numToDelete <=0) return msg.reply("messages to delete needs to be between 1 and 99");

    msg.channel.bulkDelete(numToDelete + 1);
  }
}