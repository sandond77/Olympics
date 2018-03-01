var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res){
  res.redirect('index.html'); 
});

router.get('/gold', function(req, res){
  	db.Medalist.findAll({
    	where: {
     	 	medals: gold
    	}
  	}).then(function(data){
    	console.log(data)
    	//Need to figure out how and where to render our data an to the page...
  	});
});


router.get('/silver', function(req, res){
  	db.Medalist.findAll({
    	where: {
      		medals: silver
    	}
  	}).then(function(data){
   		console.log(data)
  	});
});

router.get('/bronze', function(req, res){
  	db.Medalist.findAll({
    	where: {
      		medals: bronze
    	}
  	}).then(function(data){
    	console.log(data)
  	});
});

router.post('/add', function(req, res){
	db.Medalist.create({
		  Country: "Norway",
      Gold: 14,
      Silver: 14, 
      Bronze: 11,
      Sport: "Winter Sports"
  	}).then(function(data){
        console.log("psoted");
        // res.json(data)
  	});
});

module.exports = router;
