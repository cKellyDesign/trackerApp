var _ = require('underscore'),
	mongoose = require('mongoose');

module.exports = function init (User){
	return function userLogin (req, res, next){
		var userData = {
			username: req.body.username,
			password: req.body.password
		};

		User.findOne({ username: userData.username }, function(err, user){
			if (err || !user) {
				res.json(404, 'Username Not Found' );
				return;
			} else if (user.password !== userData.password) {
				res.json(403, 'Incorrect Password' );
				return;
			}
			res.status(200).send({ username: user.username, forms: user.forms });
			next();
		});
	};
};