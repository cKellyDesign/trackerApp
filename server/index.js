var http = require('http'),
	path = require('path'),
	express = require('express'),
	router = require('./router');

var trackerApp = express();

// Set Routes
router.setRoutes(trackerApp);

// Set Configs
app.set('port', 8000);
app.set('case sensitive routing', false);

// Set Static Paths


