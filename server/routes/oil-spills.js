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
      ?spill a osnm:OilSpill .
      ?spill osnm:hasSize ?size .
      ?spill osnm:hasNote ?note .
      ?spill time:inXSDDate ?dateTime .
      ?spill osnm:hasLatitude ?lat .
      ?spill osnm:hasLongitude ?lng .
      ?spill osnm:hasId ?id .
    }
  `, {
    reasoning: true
  }).then(({body}) => {
    res.json(body.results.bindings.map(mapBindingToValues))
  });
});

router.get('/:id', function (req, res, next) {
  executeSparql(`
    PREFIX osnm: <http://www.oilspillsnear.me/>
    PREFIX time: <http://www.w3.org/2006/time#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    
    SELECT DISTINCT *
    WHERE {
      ?spill a osnm:OilSpill .
      ?spill osnm:hasSize ?size .
      ?spill osnm:hasNote ?note .
      ?spill time:inXSDDate ?dateTime .
      ?spill osnm:hasLatitude ?lat .
      ?spill osnm:hasLongitude ?lng .
      ?spill osnm:hasId "${req.params.id}" .
      ?spill osnm:hasId ?id .
      ?spill osnm:hasNearbyCountry ?country .
      ?country osnm:hasLatitude ?countryLat .
      ?country osnm:hasLongitude ?countryLng .
      ?country rdfs:label ?countryName .
    }
  `, {
    reasoning: true
  }).then(({body}) => {
    if (body.results.bindings.length === 0) {
      res.status(404).send("Not found.");
      return;
    }

    res.json(body.results.bindings.map(mapBindingToValues)[0]);
  });
});


router.get('/:id/beaches', function (req, res, next) {
  executeSparql(`
    PREFIX osnm: <http://www.oilspillsnear.me/>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    
    SELECT DISTINCT *
    WHERE {
      ?spill a osnm:OilSpill .
      ?spill osnm:hasId "${req.params.id}" .
      ?spill osnm:hasNearbyCountry ?country .
      ?country osnm:hasCode ?countryCode .
      ?beach osnm:hasCountryCode ?countryCode .
      ?beach osnm:hasLatitude ?lat .
      ?beach osnm:hasLongitude ?lng .
      ?beach rdfs:label ?name .
    }
  `, {
    reasoning: true
  }).then(({body}) => {
    if (body.results.bindings.length === 0) {
      res.status(404).send("Not found.");
      return;
    }

    res.json(body.results.bindings.map(mapBindingToValues));
  });
});

module.exports = router;
