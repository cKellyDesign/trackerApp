var path = require('path');
var _ = require('underscore');
var formModelHelper = require('./helpers/formsModelHelper');
// var formModels = 

exports.setRoutes = function(trackerApp) {

	trackerApp.get('/', function (req, res){
		res.sendFile(path.join(__dirname + '/../www/index.html'));
	});

	trackerApp.get('/getFormModel/:formSlug', function (req, res){
		res.send(_.findWhere(formModelHelper, { 'formName': req.params.formSlug }));
	});
};