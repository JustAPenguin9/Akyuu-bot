module.exports = {
  name: 'links',
  aliases: ['link'],
  run: (bot, message, args) => {
    message.channel.send(
      '**Github repo:** <https://github.com/JustAPenguin9/Akyuu-bot>' +
      '\n**Google sheet:** <https://docs.google.com/spreadsheets/d/1SPHJUIq8Wi-OOJhNmgmCGrn9d7frfcjhJhWlpLT3ej0/edit?usp=sharing>' +
      '\n**AoCF wiki:** <https://aocf.koumakan.jp/wiki/Antinomy_of_Common_Flowers_Wiki>' +
      '\n**AoCF starter pack** <https://drive.google.com/drive/folders/1cVEb1kN7X8lOsXn6XTBN1aphOEsD6SA8?usp=sharing>' +
      '\n**AoCF netplay patch** <http://lunarcast.net/aocf.php>' +
      '\n**Proxypunch** <https://github.com/delthas/proxypunch/releases/latest>'
    )
  }
}
