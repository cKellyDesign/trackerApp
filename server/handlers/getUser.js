var _ = require('underscore'),
	mongoose = require('mongoose');

module.exports = function init (User) {
	return function getUser (req, res, next){
		var username = req.params.username;
		User.find({ username: username }, function(err, user){
			if (err) {
				res.send(err);
			} else {
				res.send(user);
			}
			next();
		});
	};
};