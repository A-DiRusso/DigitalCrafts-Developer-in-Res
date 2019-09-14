const nerds = require('nerds');
// player three is from 'Pokemon'
module.exports = playerThree = () => {
  let singlePokemon = nerds.resolve('Pokemon').include(['name']).asArray()[0];
  return singlePokemon;
}