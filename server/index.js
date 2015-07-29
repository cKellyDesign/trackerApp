var http = require('http'),
	path = require('path'),
	_ = require('underscore'),
	express = require('express'),
	requireJS = require('requirejs'),
	bodyParser = require('body-parser'),
	// mongoose = require('mongoose'),
	// router = require('./router');
	mongo = require('mongodb'),
	monk = require('monk'),
	db = monk('localhost:27107/nodeTest1'),
	formModelHelper = require('./helpers/formsModelHelper');
	// router = express.Router();

var trackerApp = express();

requireJS.config({
	nodeRequire: require
});

trackerApp.use(bodyParser.json());

// trackerApp.use(function(req, res, next){
// 	req.db = db;
// 	next();
// });

trackerApp.get('/', function (req, res){
	res.sendFile(path.join(__dirname + '/../www/index.html'));
});

trackerApp.get('/getFormModel/:formSlug', function (req, res){
	console.log("\n\nGET FORM MODEL: ", req.params.formSlug);
	res.send(_.findWhere(formModelHelper, { 'formName': req.params.formSlug }));
});

trackerApp.post('/newUser', function (req, res){
	console.log('\n\nPOST DETECTED:\n', req.body, '\n\n');
	// var db = req.db;
	
	db.usercollection.insert(req.body);
	res.send(userData);
});

trackerApp.get('/users', function (req, res) {
	console.log('\n****GET USERS DETECTED*****\n');
	// var db = req.db;
	var collection = db.get('usercollection');
	collection.find({},{}, function(e, docs){
		console.log("DOCS", docs);
		res.send(docs);
	});
});

trackerApp.use(function(err,req,res,next){
	res.status(err.status || 500);
	console.log("!!!!!!!!!!!!ERROR: ", err);
	res.send(err);
});


// Set Routes
// router.setRoutes(trackerApp);

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