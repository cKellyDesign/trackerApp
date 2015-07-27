require([
	'views/rootView', 
	'models/rootModel', 
	'templates/rootTemplate'
	], function(RootView, RootModel, RootTemplate){

	TrApp = window.TrApp || {};
	TrApp.root = new RootView({
		el: $('.j-main')
		// model: new RootModel()
	});

});