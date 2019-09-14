//========================================================================
//CALLBACK EXAMPLES
// const bark = require('./dog');
// const chirp = require('./bird');
// const greet = require('./greet');
// // const { c, b } = require('./animals');
// const hoot = require('./owl');
// greet(hoot, 'Jonathan');
// greet(bark, 'Tony');
// greet(chirp);
// greet(c);
// greet(b);
// const woof = bark();
// greet(woof);



// function helloWorld() {
//   console.log('Hello World!');
// }

//setTimeout and setInterval are not presise. 
//setTimeout(); - you pass it a function it waits then it calls it
//setInterval(); - you pass it a function it waits then calls it then waits calls it forever
// console.log('About to call setTimeout()');
// setTimeout(helloWorld, 1000);
// console.log('You called setTimeout()');

// setInterval(helloWorld, 1000);

// setInterval(function helloWorld() {
//   console.log('Hello World');
// }, 1000);

setInterval(() => console.log('Hello world'), 1000);

// MODULE EXAMPLES
//========================================================================
// const catSound = require('./cat');
// require is a function that lovingly grabs the thing
// and makes it the variable catSound
// console.log(catSound);

//three ways to grab just cat



// target it when you use it
//catSound.cat; - Option Zero

//grab before the assignment
//const catSound = require(./cat).cat; - Option One-A

//get rid of the variable all together
// console.log(require('./cat').cat); Option //Option One-B




//destructuring for the win :) - Option Two
// basically its saying {cat: valueOf(cat)}
// const { cat, kitten } = catSound;
//can also be written const { cat, kitten } = require('./cat);
// console.log(cat, kitten);
// console.log(kitten, cat);

