module.exports = {
  name: 'wiki',
  run: (bot, message, args) => {
    switch (args[1]) {
      case 'reimu':
        message.reply('<https://aocf.koumakan.jp/Reimu_Hakurei>')
        break
      case 'marisa':
        message.reply('<https://aocf.koumakan.jp/Marisa_Kirisame>')
        break
      case 'ichirin':
        message.reply('<https://aocf.koumakan.jp/Ichirin_Kumoi>')
        break
      case 'byakuren': case 'hijiri': case 'byak':
        message.reply('<https://aocf.koumakan.jp/Byakuren_Hijiri>')
        break
      case 'futo':
        message.reply('<https://aocf.koumakan.jp/Mononobe_no_Futo>')
        break
      case 'miko':
        message.reply('<https://aocf.koumakan.jp/Toyosatomimi_no_Miko>')
        break
      case 'nitori':
        message.reply('<https://aocf.koumakan.jp/Nitori_Kawashiro>')
        break
      case 'koishi': case 'koi':
        message.reply('<https://aocf.koumakan.jp/Koishi_Komeiji>')
        break
      case 'mamizou': case 'mami':
        message.reply('<https://aocf.koumakan.jp/Mamizou_Futatsuiwa>')
        break
      case 'kokoro': case 'koko':
        message.reply('<https://aocf.koumakan.jp/Hata_no_Kokoro>')
        break
      case 'kasen':
        message.reply('<https://aocf.koumakan.jp/Kasen_Ibaraki>')
        break
      case 'mokou':
        message.reply('<https://aocf.koumakan.jp/Fujiwara_no_Mokou>')
        break
      case 'sukuna': case 'sinmyoumaru':
        message.reply('<https://aocf.koumakan.jp/Shinmyoumaru_Sukuna>')
        break
      case 'sumireko': case 'sumi': case 'usami':
        message.reply('<https://aocf.koumakan.jp/Sumireko_Usami>')
        break
      case 'reisen':
        message.reply('<https://aocf.koumakan.jp/Reisen_Udongein_Inaba>')
        break
      case 'doremy': case 'santa':
        message.reply('<https://aocf.koumakan.jp/Doremy_Sweet>')
        break
      case 'tenshi': case 'tenko':
        message.reply('<https://aocf.koumakan.jp/Tenshi_Hinanawi>')
        break
      case 'yukari': case 'bestthcharacterdont@me':
        message.reply('<https://aocf.koumakan.jp/Yukari_Yakumo>')
        break
      case 'joon': case "jo'on": case 'jyoon': case 'june': case 'john':
        message.reply('<https://aocf.koumakan.jp/Joon_Yorigami>')
        break
      case 'controls': case 'control':
        message.reply('<https://aocf.koumakan.jp/Controls>')
        break
      case 'mechanics':
        message.reply('<https://aocf.koumakan.jp/Game_mechanics>')
        break
      case 'glossary':
        message.reply('<https://aocf.koumakan.jp/Glossary>')
        break
      default:
        message.reply('<https://aocf.koumakan.jp/Antinomy_of_Common_Flowers_Wiki>')
        break
    }
  }
}
