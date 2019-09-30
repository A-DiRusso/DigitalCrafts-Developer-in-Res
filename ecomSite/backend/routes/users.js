const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcryptjs');
const randToken = require('rand-token');

router.post('/signup', (req, res, next) => {
  const { first, last, email, password } = req.body;
  if((!first) || (!last) || (!email) || (!password)){
    res.json({
      msg: "Invalid Data"
    });
    return;
  }
  const checkUserQuery = `SELECT * FROM users WHERE email = ?`
  db.query(checkUserQuery, [email], (err, results) => {
    if(err){throw err};
    if(results.length > 0){
      res.json({
        msg: "Email Already In Use"
      })
    } else {
      const insertUserQurey = `INSERT INTO users
        (first, last, email, password, token)
        VALUES
        (?,?,?,?,?)`;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const token = randToken.uid(50);
      db.query(insertUserQurey, [first,last,email,hash,token], (err2) => {
        if(err2){throw err2};
        res.json({
          msg: "Successfully Added A User",
          token,
          email,
          first
        })
      })
    }
  })
  // res.json(req.body);
});

router.post('/login', (req, res, next) => {
  const { email, password : givenPassword} = req.body;
  const checkUserQuery = `SELECT * FROM users WHERE email = ?`;
  db.query(checkUserQuery, [email], (err, results) => {
    if(err){throw err};
    if(results.length > 0) {
      const { first, token, password: queriedPassword } = results[0];
      const isValidPass = bcrypt.compareSync(givenPassword, queriedPassword);
      if (isValidPass) {
        const token = randToken.uid(50);
        const updateUserToken = `UPDATE users SET token = ? WHERE email = ?`
        db.query(updateUserToken,[token,email], (err) => {if(err) {throw err}});
        res.json({
          msg: "Logged In",
          first,
          email,
          token,
        })

      } else {
        res.json({
          msg: "Invalid Password"
        })
      }
    } else {
      res.json({ msg: 'No Email' })
    }
  })
});

module.exports = router;
