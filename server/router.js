var path = require('path'),
	_ = require('underscore'),
	// mongoose = require('mongoose'),
	// User = require('./schema/user'),
	formModelHelper = require('./helpers/formsModelHelper');

exports.setRoutes = function(trackerApp) {
	// var router = trackerApp.Router();
	// mongoose.connect('mongodb://localhost/trackerAppDB');

	trackerApp.get('/', function (req, res){
		res.sendFile(path.join(__dirname + '/../www/index.html'));
	});

	trackerApp.get('/getFormModel/:formSlug', function (req, res){
		res.send(_.findWhere(formModelHelper, { 'formName': req.params.formSlug }));
	});

	// trackerApp.get('/newUser', function (req, res){
	// 	res.send('hello and welcome!');
	// });

	// trackerApp.get('/collections/:collectionName', function(req, res, next){
	// 	req.collection.find({}, {limit: 10, sort: [['_id', -1]]}).toArray(function(e, results){
	// 		if (e) return next(e);
	// 		res.send(results);
	// 	});
	// });

	// trackerApp.post('/collections/:collectionName', function(req, res, next){
	// 	req.collection.insert(req.body, {}, function(e, results){
	// 		if (e) return next(e);
	// 		res.send(results);
	// 	});
	// });

	// trackerApp.get('/collections/:collectionName/:id', function(req, res, next){
	// 	req.collection.findById(req.params.id, function(e, result){
	// 		if (e) return next(e);
	// 		res.send(result);
	// 	});
	// });

	trackerApp.post('/newUser', function (req, res){
		console.log('\n\nPOST DETECTED:\n', req.body, '\n\n');
		// var userData = { 
		// 	name: req.body.name,
		// 	username: req.body.username,
		// 	email: req.body.email,
		// 	phone: req.body.phone
		// }
		// new User(userData).save();
		res.send(userData);
		// User.find({ username: req.body.username }, function(err, user){
		// 	res.send(user);
		// });
	});

	trackerApp.get('/users', function (req, res) {
		console.log('\n****GET USERS DETECTED*****\n');
		// User.find({}, function(err, users){
		// 	if (err) console.log("\n\nERR: ", err, "\n\n"), res.send(err);
		// 	res.send(users);
		// });
	});

	// router.post('/sendMessage/abcd', function (req, res){
	// 	// console.log("\n\nSERVER HIT AT SEND MESSAGE ", req.body);
	// 	res.send(req.body);
	// });
};