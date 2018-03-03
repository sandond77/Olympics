var express = require('express');
var router = express.Router();
var db = require('../models');
var path = require('path');

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../views/html/index.html'));
});

router.get('/gold', function(req, res){
  res.sendFile(path.join(__dirname, '../views/html/gold.html'));
});

router.get('/silver', function(req, res){
  res.sendFile(path.join(__dirname, '../views/html/silver.html'));
});

router.get('/bronze', function(req, res){
  res.sendFile(path.join(__dirname, '../views/html/bronze.html'));
});

router.get('/api', function(req, res){
	db.Comments.findAll({
	}).then(function(data){
		res.json()
		console.log("response was sent")
	})
});

router.get('/api/comments', function(req, res){
	db.Comments.findAll({
	}).then(function(data){
		var hbsObject = {
			Message: data
		}

		console.log("handlebars object", hbsObject);
		res.render('index')
		console.log("rendered")
	});
});

router.post('/api/comments', function(req, res){
	db.Comments.create({
		Message: req.body.Message
	});
});

router.get('/standings', function(req,res){
    res.sendFile(path.join(__dirname, '../public/assets/javascript/standings.json'));
});


module.exports = router;

