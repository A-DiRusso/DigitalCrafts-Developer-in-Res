// without the dot slash node 
// looks in it's own global module folder
//http is built into node
const http = require('http');

// const handleReqAndRes = (req, res) => {
//   const timeStamp = new Date();
//   console.log('Received a Request');
//   console.log(req.url);
//   res.end(`<h1>Hello World! It's ${timeStamp}!</h1>`); //.end() tapes up the package                                                        and ships it 
// };
//What's a server?
// A server is a piece of code or a computer running a piece of code that does something useful
// Servers store data and often manipulate that data
const server = http.createServer((req, res) => {
  const timeStamp = new Date();
  console.log('I totally Received a Request!!');
  console.log(req.url);
  res.end(`<h1>Hello World! It's ${timeStamp}!</h1>`);
});
//http.createServer() accpets a function and 
// returns a 'server'
// When the server recives a request:
//1. It puts together *most* of a response - all of the networking stuff.
//2. It calls *your* function and passes it the req and res



//What is 3000? - 
server.listen(3000);