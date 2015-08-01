var http = require('http'),
	path = require('path'),
	express = require('express'),
	requireJS = require('requirejs'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	router = require('./router');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connect error:'));
db.once('open', console.log.bind(console,'\nconnected to mongodb!'));

var trackerApp = express();

requireJS.config({
	nodeRequire: require
});

trackerApp.use(bodyParser.json());

// Set Routes
router.setRoutes(trackerApp);

// Set Configs
trackerApp.set('port', 8000);
trackerApp.set('case sensitive routing', false);

// Set Static Paths
// console.log("\n\n__dirname = ", __dirname);
trackerApp.use('/js', express.static(path.join(__dirname, '../www/js')));
trackerApp.use('/css', express.static(path.join(__dirname, '../www/css')));
trackerApp.use('/img', express.static(path.join(__dirname, '../www/img')));


// Listener
var server = trackerApp.listen(process.env.PORT || trackerApp.get('port'), function(){
	console.log("Server has been started at " + server.address().port);
})