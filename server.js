var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var db = require('./models');
var path = require('path');


var app = express();

// Serve static content for the app from the 'public' directory
app.use('/public', express.static(path.join(__dirname, '/public')));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ 
	defaultLayout: 'main',
	layoutsDir: path.join(__dirname, 'views/layouts')
 }));
app.set('view engine', 'handlebars');


// Import routes and give the server access to them
var routes = require('./controllers/controller.js');
app.use(routes);

var port = process.env.PORT || 3000;
db.sequelize.sync({force: true}).then(function(){  //take force true out before heroku commit
	app.listen(port);
})
