var path = require('path'),
	_ = require('underscore'),
	mongoose = require('mongoose'),
	User = require('./schema/user'),
	formModelHelper = require('./helpers/formsModelHelper'),
	isDev = process.env.NODE_ENV === 'development';

exports.setRoutes = function(trackerApp, db) {

	trackerApp.get('/', function (req, res){
		res.sendFile(path.join(__dirname + '/../www/index.html'));
	});

	trackerApp.get('/getFormModel/:formSlug', function (req, res){
		res.send(_.findWhere(formModelHelper, { 'formName': req.params.formSlug }));
	});

	trackerApp.post('/sendMessage/abcd', function (req, res){
		// console.log("\n\nSERVER HIT AT SEND MESSAGE ", req.body);
		res.send(req.body);
	});

	trackerApp.post('/newUser', function (req, res, next){
		var userData = {
			username: req.body.username,
			name: req.body.name,
			email: req.body.email,
			phone: req.body.phone
		};
		new User(userData).save();
		
		User.find({ username: userData.username }, function(err, user){
			if (err) res.send(err);
			console.log("USER SAVED ", userData);
			res.send(userData);
			next();
		});
	});

	trackerApp.get('/users', function(req, res, next){
		User.find({}, function(err, users){
			if (err) res.send(err);
			res.send(users);
			next();
		});
	});

	trackerApp.get('/getUser/:username', function (req, res, next){
		var username = req.params.username;
		User.find({ username: username }, function(err, user){
			if (err) {
				res.send(err);
			} else {
				res.send(user);
			}
			next();
		});
	});
};