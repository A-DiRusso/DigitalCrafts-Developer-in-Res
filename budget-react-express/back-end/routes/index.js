const express = require('express');
const router = express.Router();
const db = require('../db');

router.post(`/get-dudes`,)

router.post('/setup', async (req, res, next) => {
  const { name, budget } = req.body;
  const insertQuery = `
    INSERT INTO dudes (name, budget)
    VALUES
    ($1, $2)
  `
  const inserted = await db.query(insertQuery,[name,budget]);
  res.json(req.body);
})

router.post('/get-dudes', async (req, res) => {
  const name = req.body.name;
  const getDudeQuery = `SELECT * FROM dudes
  WHERE name = $1`
  const dudeInfo = await db.query(getDudeQuery, [name]);
  res.json({
    dudeInfo,
  })
})
module.exports = router;
