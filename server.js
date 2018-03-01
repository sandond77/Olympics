var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var db = require('./models');


var app = express();


// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/views'));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Import routes and give the server access to them
var routes = require('./controllers/controller.js');

app.use('/', routes);
app.use('/gold', routes);
app.use('/silver', routes);
app.use('/bronze', routes);


var port = process.env.PORT || 3000;
db.sequelize.sync().then(function(){  //take force true out before heroku commit
	app.listen(port);	
})
 