var path = require('path'),
	_ = require('underscore'),
	mongoose = require('mongoose'),
	User = require('./schema/user'),
	Models = require('./schema/formFields'),
	formModelHelper = require('./helpers/formsModelHelper'),
	newUserHandler = require('./handlers/newUser')(User),
	loginHandler = require('./handlers/userLogin')(User),
	listUsers = require('./handlers/listUsers')(User),
	listForms = require('./handlers/listForms'),
	getUser = require('./handlers/getUser')(User),
	newFormHandler = require('./handlers/newFormHandler')(Models),
	isDev = process.env.NODE_ENV === 'development';

exports.setRoutes = function(trackerApp, db) {

	trackerApp.get('/', function (req, res, next) {
		res.sendFile(path.join(__dirname + '/../www/index.html'));
	});

	trackerApp.get('/getFormModel/:formSlug', function (req, res, next) {
		res.send(_.findWhere(formModelHelper, { 'formName': req.params.formSlug }));
		next();
	});

	trackerApp.post('/submitLogin', loginHandler);
	trackerApp.post('/newUser', newUserHandler);
	trackerApp.post('/newForm', newFormHandler);

	trackerApp.get('/forms', listForms);
	trackerApp.get('/users', listUsers);
	trackerApp.get('/getUser/:username', getUser);
};