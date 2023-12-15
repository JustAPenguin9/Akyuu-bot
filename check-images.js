const path = require('path')
const { readdirSync } = require('fs')

// paths
const characterPath = path.join(__dirname, 'src/characters')
const attachmentPath = path.join(__dirname, 'attachments')

// collect images
const folders = readdirSync(attachmentPath)
let images = []
folders.forEach(folder => images.push(readdirSync(`${attachmentPath}/${folder}`)))
// flatten array of array
images = images.flat()

const check = (move, character, input) => {
  if ('image' in move) {
    if (process.argv.includes('-v')) {
      console.log(`${move.image} in ${character} ${input}, ${images.includes(move.image)}`)
    } else {
      if (!images.includes(move.image)) {
        console.log(`missing ${move.image} in ${character} ${input}`)
      }
    }
  }
}

readdirSync(characterPath).forEach(file => {
  // get character json file
  const character = require(`${characterPath}/${file}`)
  character.moves.forEach(move => {
    // check if move has an image
    check(move, character.name, move.names)

    // check if move has pages that have images
    move.pages?.forEach(innerMove => {
      check(innerMove, character.name, move.names + innerMove.title)
    })
  })
})
