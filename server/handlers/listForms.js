var _ = require('underscore'),
	mongoose = require('mongoose'),
	FormModel = require('./../schema/formFields').FormModel;

module.exports = function listUsers (req, res, next){
	FormModel.find({}, function(err, forms){
		if (err) res.send(err);
		res.send(forms);
		next();
	});
};