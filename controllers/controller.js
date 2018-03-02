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

	db.Comments.findAll({
	}).then(function(data){
		var comments = document.getElementById('comments');
		var newComments = document.createElement('p');
		newComments.appendChild(document.createTextNode('Test'));
		comments.appendChild(newComments);
	});
});

router.post('/comments', function(req, res){
	db.Comments.create({
		Message: req.body.Message
	}).then(function(data){
		res.sendFile(path.join(__dirname, '../views/comments.html'));
	});

});


module.exports = router;

