const nerds = require('nerds');
//player two is from 'Star Wars'
module.exports =  playerTwo = () => {
  let starWarsNerd = nerds.resolve('Star Wars').include(['name']).asGenerator();
  return starWarsNerd.next().value;
}