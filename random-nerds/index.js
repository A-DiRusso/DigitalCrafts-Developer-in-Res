const http = require('http');
const hostname = 'localhost';
const port = '3000';
//playerOne is a harry potter character
//playerTwo is a star wars character
//playerThree is a pokemon character

const server = http.createServer((request, response) => {
  const aHarryPotter = require('./playerOne')();
  const aStarWarser = require('./playerTwo')();
  const aPokemon = require('./playerThree')();
  response.end(`<h1><em>${aHarryPotter.first} ${aHarryPotter.last}
           </em> would love to go to the prom with <em>${aStarWarser.name}
           </em><br>but <em>${aStarWarser.name}</em> has pledged eternal love for 
           <em>${aPokemon.name}</em>.</h1>`)     
});

server.listen(port, hostname, () => {
  console.log(`The server is running at http://${hostname}:${port}`);
})

//**************************how to get the nerds info *******************/
// let singleHP = nerds.resolve('Harry Potter').asArray();
// const { first, last } = singleHP[0];
// console.log(first, last);

// let multiPoke = nerds.resolve('Pokemon', 3).include(['name', 'type', 'hp']).asArray();
// console.log(multiPoke);

// let genSW = nerds.resolve('Star Wars', 3).include(['name']).asGenerator();
// console.log(genSW.next().value);
// console.log(genSW.next().value);
// console.log(genSW.next().value);

  // let topics = nerds.resolve();
  // let randomTopic = topics[Math.floor(Math.random() * Math.floor(topics.length))];
  // let singleNerd = nerds.resolve(randomTopic).asArray()[0];
  // console.log(singleNerd);
  // let { first, last, name } = singleNerd;
  // let madPeople = [];
  // first ? madPeople.push(`${first} ${last}`)
  //       : madPeople.push(`<h1>${name}</h1>`)
  
  // const { name } = playerTwo;

  // first ? res.end(`<h1>${first} ${last}</h1>`)
  //       : res.end(`<h1>${name}</h1>`)