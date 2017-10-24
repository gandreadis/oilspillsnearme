const {executeSparql} = require("../rdf-store-connector");

const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  executeSparql(`
    PREFIX osnm: <http://www.oilspillsnear.me/>
    PREFIX time: <http://www.w3.org/2006/time#>
    SELECT DISTINCT ?countryName ?count
    
    WHERE {
      ?oilRigCount time:year "2010" .
      ?oilRigCount osnm:countryName ?countryName .
      ?oilRigCount osnm:count ?count .
    }
  `, {
    reasoning: true
  }).then(({body}) => {
    res.json(body.results.bindings.map(binding => ({
      year: 2010,
      countryName: binding.countryName ? binding.countryName.value : undefined,
      count: binding.count ? binding.count.value : undefined,
    })))
  });

  // res.json([
  //   {
  //     countryName: "Angola",
  //     count: 2,
  //     year: 2009
  //   },
  //   {
  //     countryName: "Canada",
  //     count: 15,
  //     year: 2009
  //   },
  //   {
  //     countryName: "Netherlands",
  //     count: 3,
  //     year: 2009
  //   },
  // ]);
});

module.exports = router;
