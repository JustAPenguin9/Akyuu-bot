module.exports = {
  name: 'links',
  aliases: ['link'],
  run: (bot, message, args) => {
    message.channel.send(
      '**Github repo:** <https://github.com/JustAPenguin9/Akyuu-bot>' +
      '\n**Google sheet:** <https://docs.google.com/spreadsheets/d/1SPHJUIq8Wi-OOJhNmgmCGrn9d7frfcjhJhWlpLT3ej0/edit?usp=sharing>' +
      '\n**AOCF wiki:** <https://aocf.koumakan.jp/wiki/Antinomy_of_Common_Flowers_Wiki>' +
      '\n**AOCF starter pack** <https://drive.google.com/drive/folders/1SzdFtiB1sdAtnYtmvrsF0IBi6lXHNLl1?usp=sharing>'
    )
  }
}
