const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.json([
    {
      id: 'a',
      lat: 50.5,
      lng: -5,
      sizeTonnes: 100000,
      name: "Oil Spill A",
      date: "04/21/2010"
    },
    {
      id: 'b',
      lat: 10.5,
      lng: 55.5,
      sizeTonnes: 200000,
      name: "Oil Spill B",
      date: "06/21/2010"
    },
  ]);
});

module.exports = router;
