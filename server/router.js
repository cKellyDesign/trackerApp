exports.setRoutes = function(trackerApp) {

	trackerApp.get('/', function (req, res){
		res.sendfile('../www/index.html');
	});
};