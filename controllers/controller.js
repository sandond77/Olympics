var express = require('express');
var router = express.Router();
var db = require('../models');
var path = require('path');

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/gold', function(req, res){
  res.sendFile(path.join(__dirname, '../views/gold.html'));
});

router.get('/silver', function(req, res){
  res.sendFile(path.join(__dirname, '../views/silver.html'));
});

router.get('/bronze', function(req, res){
  res.sendFile(path.join(__dirname, '../views/bronze.html'));
});

router.get('/comments', function(req, res){
  res.sendFile(path.join(__dirname, '../views/comments.html'));
});

module.exports = router;

