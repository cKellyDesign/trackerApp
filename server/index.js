var http = require('http'),
	path = require('path'),
	express = require('express'),
	requireJS = require('requirejs'),
	bodyParser = require('body-parser'),
	mongoskin = require('mongoskin'),
	router = require('./router');

var trackerApp = express();

requireJS.config({
	nodeRequire: require
});

trackerApp.use(bodyParser.json());

var db = mongoskin.db('mongodb://@localhost:27017/trackerApp');

trackerApp.param('collectionName', function(req, res, next, collectionName){
	req.collection = db.collection(collectionName);
	return next();
});

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
});