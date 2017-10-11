const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.json({content: "test"});
});

module.exports = router;
