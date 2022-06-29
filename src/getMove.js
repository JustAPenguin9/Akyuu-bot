// TODO: change to export default
module.exports = (json, arg) => {
  let moveIndex
  json.moves
    .forEach((move, index) => {
      if (move.names.some(name => name === arg)) { moveIndex = index }
    })

  return moveIndex
}
