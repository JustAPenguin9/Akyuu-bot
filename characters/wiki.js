module.exports = {
  name: "wiki",
  description: "command",
  run(msg, args) {
    switch (args[1]) {
      case "reimu":
        msg.reply("<https://aocf.koumakan.jp/Reimu_Hakurei>");
        break;
      case "marisa":
        msg.reply("<https://aocf.koumakan.jp/Marisa_Kirisame>");
        break;
      case "ichirin":
        msg.reply("<https://aocf.koumakan.jp/Ichirin_Kumoi>");
        break;
      case "byakuren":
        msg.reply("<https://aocf.koumakan.jp/Byakuren_Hijiri>");
        break;
      case "futo":
        msg.reply("<https://aocf.koumakan.jp/Mononobe_no_Futo>");
        break;
      case "miko":
        msg.reply("<https://aocf.koumakan.jp/Toyosatomimi_no_Miko>");
        break;
      case "nitori":
        msg.reply("<https://aocf.koumakan.jp/Nitori_Kawashiro>");
        break;
      case "koishi":
        msg.reply("<https://aocf.koumakan.jp/Koishi_Komeiji>");
        break;
      case "mamizou": case "mami":
        msg.reply("<https://aocf.koumakan.jp/Mamizou_Futatsuiwa>");
        break;
      case "kokoro":
        msg.reply("<https://aocf.koumakan.jp/Hata_no_Kokoro>");
        break;
      case "kasen":
        msg.reply("<https://aocf.koumakan.jp/Kasen_Ibaraki>");
        break;
      case "mokou":
        msg.reply("<https://aocf.koumakan.jp/Fujiwara_no_Mokou>");
        break;
      case "sukuna":
        msg.reply("<https://aocf.koumakan.jp/Shinmyoumaru_Sukuna>");
        break;
      case "sumireko": case "sumi":
        msg.reply("<https://aocf.koumakan.jp/Sumireko_Usami>");
        break;
      case "reisen":
        msg.reply("<https://aocf.koumakan.jp/Reisen_Udongein_Inaba>");
        break;
      case "doremy":
        msg.reply("<https://aocf.koumakan.jp/Doremy_Sweet>");
        break;
      case "tenshi":
        msg.reply("<https://aocf.koumakan.jp/Tenshi_Hinanawi>");
        break;
      case "yukari":
        msg.reply("<https://aocf.koumakan.jp/Yukari_Yakumo>");
        break;
      case "joon": case "jo'on":
        msg.reply("<https://aocf.koumakan.jp/Joon_Yorigami>");
        break;
      case "controls": case "control":
        msg.reply("<https://aocf.koumakan.jp/Controls>")
        break;
      case "mechanics":
        msg.reply("<https://aocf.koumakan.jp/Game_mechanics>")
        break;
      default:
        msg.reply("<https://aocf.koumakan.jp/Antinomy_of_Common_Flowers_Wiki>");
        break;
    }
  }
}