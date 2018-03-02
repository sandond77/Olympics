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






// router.get('/gold', function(req, res){
//   	db.Medalist.findAll({
//     	where: {
//      	 	medals: gold
//     	}
//   	}).then(function(data){
//     	console.log(data)
//     	//Need to figure out how and where to render our data an to the page...
//   	});
// });


// router.get('/silver', function(req, res){
//   	db.Medalist.findAll({
//     	where: {
//       		medals: silver
//     	}
//   	}).then(function(data){
//    		console.log(data)
//   	});
// });

// router.get('/bronze', function(req, res){
//   	db.Medalist.findAll({
//     	where: {
//       		medals: bronze
//     	}
//   	}).then(function(data){
//     	console.log(data)
//   	});
// });

// router.post('/add', function(req, res){
// 	db.Medalist.create({
// 		//insert data here
//   	}).then(function(data){
//    	 	console.log(data)
//   	});
// });

module.exports = router;