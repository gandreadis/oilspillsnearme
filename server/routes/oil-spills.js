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
    {
      id: 'c',
      lat: 37,
      lng: 95,
      sizeTonnes: 300000,
      name: "Oil Spill C",
      date: "01/9/2008"
    },
    {
      id: 'd',
      lat: 39.76,
      lng: -98.5,
      sizeTonnes: 100000,
      name: "Oil Spill D",
      date: "01/9/2008"
    },
    {
      id: 'e',
      lat: 61,
      lng: 105,
      sizeTonnes: 150000,
      name: "Oil Spill E",
      date: "01/9/2008"
    },
    {
      id: 'f',
      lat: 0.78,
      lng: 113.9,
      sizeTonnes: 100000,
      name: "Oil Spill F",
      date: "01/9/2008"
    },
    {
      id: 'g',
      lat: 36.2,
      lng: 138.2,
      sizeTonnes: 90000,
      name: "Oil Spill G",
      date: "01/9/2008"
    },
    {
      id: 'h',
      lat: 38.96,
      lng: 35.24,
      sizeTonnes: 80000,
      name: "Oil Spill H",
      date: "01/9/2008"
    },
    {
      id: 'i',
      lat: -10,
      lng: -55,
      sizeTonnes: 200000,
      name: "Oil Spill I",
      date: "01/9/2008"
    },
    {
      id: 'j',
      lat: 51.16,
      lng: 10.45,
      sizeTonnes: 50000,
      name: "Oil Spill J",
      date: "01/9/2008"
    },
  ]);
});

module.exports = router;
