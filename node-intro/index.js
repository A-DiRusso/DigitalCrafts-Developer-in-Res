// bring in pg promise a wrapper for your db
// that gives promises to you
const promise = require('bluebird');
const initOptions = {
  promiseLib: promise
}
const config = {
  host: 'localhost',
  port: 5432,
  database: 'grocery-app',
  user: 'anthonydirusso'
}
const pg = require('pg-promise')(initOptions);
const db = pg(config);

db.query(`select first_name from users`).then(results => console.log(results))


