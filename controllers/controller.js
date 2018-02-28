var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function (req, res) {
  res.redirect('/index.html'); 
});


//Need to figure out how to render our data to the page...
router.get('/gold', function (req, res) {
  db.Medalist.findAll({
    where: {
      medals: gold
    }
  }).then(function(data){
    console.log(data)
  });
});


router.get('/silver', function (req, res) {
  db.Medalist.findAll({
    where: {
      medals: silver
    }
  }).then(function(data){
    console.log(data)
  });
});

router.get('/bronze', function (req, res) {
  db.Medalist.findAll({
    where: {
      medals: bronze
    }
  }).then(function(data){
    console.log(data)
  });
});