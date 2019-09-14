// how should be a function that returns a string
// function sayHello (how) {
//   case  how() === 'Tweet Tweet' 
//     console.log(`${how()}! I am happy to meet you, Bird!`),
//   switch how() === 'Woof Woof' 
//     console.log(`${how()}! I am happy to meet you, Dog!`),
//   switch how() === 'Hoo Hoo'
//     console.log(`${how()}! I am happy to meet you, Owl!`),
// }
function sayHello(howFn, toWhom) {
  const salutation = howFn(toWhom);
  console.log(`${salutation}! I am happy to meet you!`);
}
// module.exports is specific to node
//assign the sayHello function as the export
module.exports = sayHello;



