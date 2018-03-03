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

router.get('/comments', function(req, res){
	db.Comments.findAll({
	}).then(function(data){
		var hbsObject = {
			Comments: data
		}

		console.log("handlebars object", hbsObject);
		res.render("index", hbsObject)
	});
});

router.post('/comments', function(req, res){
	db.Comments.create({
		Message: req.body.Message
	});
});

<<<<<<< HEAD
=======
router.get('/standings', function(req,res){
    res.sendFile(path.join(__dirname, '../public/assets/javascript/standings.json'));
});
>>>>>>> e724df0c5c2180e9f38fa10dd7125bf23e7f1970

module.exports = router;

