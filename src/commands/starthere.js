module.exports = {
  name: 'starthere',
  aliases: ['starterpack', 'start', 'sh', 'game'],
  run: (bot, message, args) => {
    message.channel.send(
      "Here's the link to **SonofGod's** starter pack: <https://drive.google.com/drive/folders/1cVEb1kN7X8lOsXn6XTBN1aphOEsD6SA8?usp=sharing>" +
      "\nHere's the link to the discord post explaining it all: <https://discord.com/channels/273513597622157322/273733523829948416/1140858504161267803>"
    )
  }
}
