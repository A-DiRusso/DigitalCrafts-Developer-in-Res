// Node is not jS. node reads JS.
// You can use it like $ python test.py to run some JS because node reads JS

let atlTeams = [
  'Braves',
  'Falcons',
  'United',
  'Hawks'
]

console.log(atlTeams);
const http = require('http');


const server = http.createServer();

server.listen(3000, () => {
  console.log(`The server is listening on port: 3000`);
});
