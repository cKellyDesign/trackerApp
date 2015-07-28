var path = require('path'),
	_ = require('underscore'),
	// mongoose = require('mongoose'),
	User = require('./schema/user'),
	formModelHelper = require('./helpers/formsModelHelper');

exports.setRoutes = function(trackerApp) {

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

	trackerApp.post('/newUser', function (req, res){
		var userData = { 
			name: req.body.name,
			username: req.body.username,
			email: req.body.email,
			phone: req.body.phone
		}
		new User(userData).save();
		res.send(userData);
		// User.find({ username: req.body.username }, function(err, user){
		// 	res.send(user);
		// });
	});

	trackerApp.post('/sendMessage/abcd', function (req, res){
		// console.log("\n\nSERVER HIT AT SEND MESSAGE ", req.body);
		res.send(req.body);
	});
};