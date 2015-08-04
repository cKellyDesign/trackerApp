var path = require('path'),
	_ = require('underscore'),
	mongoose = require('mongoose'),
	User = require('./schema/user'),
	formModelHelper = require('./helpers/formsModelHelper'),
	newUserHandler = require('./handlers/newUser'),
	loginHandler = require('./handlers/userLogin'),
	listUsers = require('./handlers/listUsers'),
	getUser = require('./handlers/getUser'),
	isDev = process.env.NODE_ENV === 'development';

exports.setRoutes = function(trackerApp, db) {

	trackerApp.get('/', function (req, res, next) {
		res.sendFile(path.join(__dirname + '/../www/index.html'));
		next();
	});

	trackerApp.get('/getFormModel/:formSlug', function (req, res, next) {
		res.send(_.findWhere(formModelHelper, { 'formName': req.params.formSlug }));
		next();
	});

	trackerApp.post('/submitLogin', loginHandler);
	trackerApp.post('/newUser', newUserHandler);

	trackerApp.get('/users', listUsers);
	trackerApp.get('/getUser/:username', getUser);
};