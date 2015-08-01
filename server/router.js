var path = require('path'),
	_ = require('underscore'),
	mongoose = require('mongoose'),
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

	trackerApp.post('/newUser', function (req, res){
		
		res.send('post successful');
	});
};