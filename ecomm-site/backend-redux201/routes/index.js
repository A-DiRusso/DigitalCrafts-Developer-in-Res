const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/dairy-inv', (req, res, next) => {
  const getDairyQuery = `SELECT * FROM dairy`;
  db.query(getDairyQuery, (err, results) => {
    if(err){throw err}
    res.json(results);
  });
});

router.post('/update-dept/:dept', (req, res, next) => {
  const dept = req.params.dept.toLowerCase();
  const quantity = req.body.quantity;
  const food = req.body.food;
  const updateFoodQuery = `INSERT  ??
                            SET quantity = ? 
                            WHERE food = ?`
  ;
  db.query(updateFoodQuery, [dept, quantity, food], (err, results) => {
    if(err){throw err};

  });
})

module.exports = router;
