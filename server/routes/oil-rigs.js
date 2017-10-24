const {mapBindingToValues} = require("./util");
const {executeSparql} = require("../rdf-store-connector");

const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  executeSparql(`
    PREFIX osnm: <http://www.oilspillsnear.me/>
    PREFIX time: <http://www.w3.org/2006/time#>
    
    SELECT DISTINCT *
    WHERE {
      ?oilRigCount time:year "2010" .
      ?oilRigCount time:year ?year .
      ?oilRigCount osnm:countryName ?countryName .
      ?oilRigCount osnm:count ?count .
    }
  `, {
    reasoning: true
  }).then(({body}) => {
    res.json(body.results.bindings.map(mapBindingToValues))
  });
});

module.exports = router;
