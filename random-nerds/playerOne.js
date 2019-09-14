const nerds = require('nerds');
//player one is from 'Harry Potter'
module.exports = playerOne = () => {
  let singleHP = nerds.resolve('Harry Potter').asArray()[0];
  return singleHP;
};

