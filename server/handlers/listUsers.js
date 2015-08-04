var _ = require('underscore'),
	mongoose = require('mongoose');

module.exports = function init(User) {
	return function listUsers (req, res, next){
		User.find({}, function(err, users){
			if (err) res.send(err);
			res.send(users);
			next();
		});
	};
};