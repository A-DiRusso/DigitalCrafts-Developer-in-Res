const express = require('express');
const router = express.Router();
const db = require('../db');
const fs = require('fs');

router.post('/homes', (req, res) => {
  if(!res.locals.loggedIn){
    res.json({
      msg: "Bad Token"
    })
    return;
  }
  const f = req.file;
  const finalFilePath = f.destination + '/' + Date.now() + f.originalname;
  fs.rename(f.path, finalFilePath, (err) => {
    if(err) throw err;
  });
  const { title, location, price, amenities, details, guests, token } = req.body;
  console.log('host req.body', req.body)
  const filePathArray = finalFilePath.slice(8);
  const imagePathForDb = `${filePathArray}`;
  console.log(imagePathForDb);

  const insertHomeQuery = `INSERT INTO homes
    (uid, title, location, price, amenities, details, guests, images)
      VALUES
    (?,?,?,?,?,?,?,?)`

  const dbValues = [res.locals.uid, title, location, price, amenities, details, guests, imagePathForDb]

  db.query(insertHomeQuery, dbValues, (err) => {
    if (err){throw err};
    res.json({
      msg: "Home Added"
    })
  })
})

module.exports = router;