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

	trackerApp.post('/submitLogin', function (req, res, next){
		var userData = {
			username: req.body.username,
			password: req.body.password
		};

		User.findOne({ username: userData.username }, function(err, user){
			if (err || !user) {
				res.json(403, { message: 'Username Not Found' });
				return;
			} else if (user.password !== userData.password) {
				res.json(403, { message: 'Incorrect Password' });
				return;
			}
			res.json(200, { username: user.username });
			next();
		});
	});

	trackerApp.post('/newUser', function (req, res, next){
		var userData = {
			username: req.body.username,
			password: req.body.password
			// name: req.body.name,
			// email: req.body.email,
			// phone: req.body.phone
		};
		new User(userData).save();
		
		
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