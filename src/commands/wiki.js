module.exports = {
  name: 'wiki',
  run: (bot, message, args) => {
    switch (args[1]) {
      case 'reimu':
        message.reply('<https://aocf.koumakan.jp/wiki/Reimu_Hakurei>')
        break
      case 'marisa':
        message.reply('<https://aocf.koumakan.jp/wiki/Marisa_Kirisame>')
        break
      case 'ichirin':
        message.reply('<https://aocf.koumakan.jp/wiki/Ichirin_Kumoi>')
        break
      case 'byakuren': case 'hijiri': case 'byak':
        message.reply('<https://aocf.koumakan.jp/wiki/Byakuren_Hijiri>')
        break
      case 'futo':
        message.reply('<https://aocf.koumakan.jp/wiki/Mononobe_no_Futo>')
        break
      case 'miko':
        message.reply('<https://aocf.koumakan.jp/wiki/Toyosatomimi_no_Miko>')
        break
      case 'nitori':
        message.reply('<https://aocf.koumakan.jp/wiki/Nitori_Kawashiro>')
        break
      case 'koishi': case 'koi':
        message.reply('<https://aocf.koumakan.jp/wiki/Koishi_Komeiji>')
        break
      case 'mamizou': case 'mami':
        message.reply('<https://aocf.koumakan.jp/wiki/Mamizou_Futatsuiwa>')
        break
      case 'kokoro': case 'koko':
        message.reply('<https://aocf.koumakan.jp/wiki/Hata_no_Kokoro>')
        break
      case 'kasen':
        message.reply('<https://aocf.koumakan.jp/wiki/Kasen_Ibaraki>')
        break
      case 'mokou':
        message.reply('<https://aocf.koumakan.jp/wiki/Fujiwara_no_Mokou>')
        break
      case 'sukuna': case 'sinmyoumaru':
        message.reply('<https://aocf.koumakan.jp/wiki/Shinmyoumaru_Sukuna>')
        break
      case 'sumireko': case 'sumi': case 'usami':
        message.reply('<https://aocf.koumakan.jp/wiki/Sumireko_Usami>')
        break
      case 'reisen':
        message.reply('<https://aocf.koumakan.jp/wiki/Reisen_Udongein_Inaba>')
        break
      case 'doremy': case 'santa':
        message.reply('<https://aocf.koumakan.jp/wiki/Doremy_Sweet>')
        break
      case 'tenshi': case 'tenko':
        message.reply('<https://aocf.koumakan.jp/wiki/Tenshi_Hinanawi>')
        break
      case 'yukari': case 'bestthcharacterdont@me':
        message.reply('<https://aocf.koumakan.jp/wiki/Yukari_Yakumo>')
        break
      case 'joon': case "jo'on": case 'jyoon': case 'june': case 'john':
        message.reply('<https://aocf.koumakan.jp/wiki/Joon_Yorigami>')
        break
      case 'random': case 'r':
        message.reply('<https://aocf.koumakan.jp/wiki/Special:RandomInCategory/Characters>')
        break
      case 'controls': case 'control':
        message.reply('<https://aocf.koumakan.jp/wiki/Controls>')
        break
      case 'mechanics':
        message.reply('<https://aocf.koumakan.jp/wiki/Game_mechanics>')
        break
      case 'glossary':
        message.reply('<https://aocf.koumakan.jp/wiki/Glossary>')
        break
      case 'modding': case 'mods': case 'mod':
        message.reply('<https://aocf.koumakan.jp/wiki/Modding>')
        break
      default:
        message.reply('<https://aocf.koumakan.jp/wiki/Antinomy_of_Common_Flowers_Wiki>')
        break
    }
  }
}
