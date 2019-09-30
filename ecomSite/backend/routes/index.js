const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: './public/images'});
const db = require('../db');

router.post('*', upload.single('locationImage'), (req, res, next) => {
  const token = req.body.token;
  const getUserIdQuery = `SELECT id FROM users WHERE token = ?`;

  db.query(getUserIdQuery, [token], (err, results) => {
    if(err){throw err};
    if(results.length === 0){
     res.locals.loggedIn = false;
    } else {
      res.locals.loggedIn = true;
      res.locals.uid = results[0].id;
      // res.locals.file = req.file;
    }
    next();
  })
})

router.get('/', (req, res) => {
  res.json({
    msg: 'backend reached'
  })
})

router.get('/abodes', (req, res, next) => {
  console.log('/abodes req.body', req.body)
  const abodesQuery = `SELECT * FROM homes
    ORDER BY RAND()
    LIMIT 8`;
  db.query(abodesQuery, (err, results) => {
    if(err){throw err};
    res.json(results);
  })
})
 
router.get('/cities', (req, res, next) => {
  const citiesQuery = `SELECT * FROM cities
    ORDER BY RAND()
    LIMIT 8`;
  db.query(citiesQuery, (err, results) => {
    if(err){throw err};
    res.json(results);
  })
})

router.get('/abode/:abodeId', (req, res, next) => {
  const abodeId = req.params.abodeId;
  const getAbodeQuery = `SELECT * FROM homes 
  WHERE id = ?`;
  db.query(getAbodeQuery, [abodeId], (err, result) => {
    if(err){ throw err}
    res.json(result[0]);
  })
})

router.post('/payment/stripe', (req, res) => {
  console.log(req.body);
  res.json(req.body);
})

module.exports = router;
