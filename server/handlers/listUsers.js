var _ = require('underscore'),
	mongoose = require('mongoose'),
	User = require('./../schema/user');

module.exports = function listUsers (req, res, next){
	User.find({}, function(err, users){
		if (err) res.send(err);
		res.send(users);
		next();
	});
};