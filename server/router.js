var path = require('path');

exports.setRoutes = function(trackerApp) {

	trackerApp.get('/', function (req, res){
		res.sendFile(path.join(__dirname + '/../www/index.html'));
	});
};