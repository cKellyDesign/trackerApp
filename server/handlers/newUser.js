var _ = require('underscore'),
	mongoose = require('mongoose'),
	User = require('./../schema/user');

module.exports = function newUser (req, res, next){
	var userData = {
		username: req.body.username,
		password: req.body.password
	};
	User.findOne({ username: userData.username }, function(err, user){
		if (err) {
			res.json(500, 'Something Went Wrong...');
			next();
			return;
		} else if (!user) {
			new User(userData).save();
			res.json(200, { username: userData.username });
			next();
			return;
		} else {
			res.json(404, 'Username Unavailable');
			next();
		}
	});
};