const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db');
const expressSession = require('express-session');
const sessionOptions = {
  secret: "934n4daonidvlczkjvenge9988", //Keep this in .env file
  resave: false,
  saveUninitialized: false,
}

router.use(expressSession(sessionOptions));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// The users is alread at /users/ otherwise the 
// router would not be looking here at this piece middleware
router.post('/registerProcess', (req, res, next) => {
  const { username, email, password1, password2 } = req.body;
  const checkUserExistQuery = `
    SELECT * FROM users WHERE username = $1 OR email = $2
  `;
  db.any(checkUserExistQuery, [username, email])
  .then((results) => {
    if (results.length > 0) {
      //The user already exist
      res.redirect('/login?mgs=userexists')
    } else {
      //new user.insert
      insertUser();
    }
  });

  const insertUser = () => {
    const insertUserQuery = `INSERT INTO users
                             (username, email, password)
                             VAlUES
                             ($1, $2, $3)
                             returning id`
    const hash = bcrypt.hashSync(password, 10);
    db.one(insertUserQuery, [username, email, password1])
    .then((data) => {
      res.json({
        msg: data,
      })
    });
  };
});

router.post('./loginProcess', (req, res) => {
  res.json(req.body);
  const checkUserQuery = `
    SELECT * FROM users WHERE username=$1
  `
  checkUserQuery.then(data => {
    const correctPass = bcrypt.compareSync(req.body.password, data.password);
    if (correctPass){
      req.session.username = data.username;
      req.session.loggedIn = true;
      req.session.email = data.email;
      res.redirect('/');
      /*
      NOTE: every single new http request (route) is a completely new request.
      Cookies: Store data in the browser, with a key on the server
      every single page request the entire cookie is sent 
      Sessions: Stores data in the browser with a key(coookie) on the server
      */
    } else {
      res.redirect('/login?msg=badPass');
    }
  })
  .catch(error => {
    res.json({
      msg: "userDoesNotExist",
    })
  })
});
module.exports = router;

