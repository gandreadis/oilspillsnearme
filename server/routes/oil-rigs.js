const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.json([
    {
      countryName: "Angola",
      count: 2,
      year: 2009
    },
    {
      countryName: "Canada",
      count: 15,
      year: 2009
    },
    {
      countryName: "Netherlands",
      count: 3,
      year: 2009
    },
  ]);
});

module.exports = router;
