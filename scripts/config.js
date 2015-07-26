require.config({
	baseUrl: 'init.js',
	deps: ['require.js'],
	shim: {
		'jquery': {
			exports: '$'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		}
	},
	paths: {
		'jquery': '../components/jQuery/jquery-1.11.3.min',
		'backbone': '../components/backboneJS/backbone-min',
		'underscore': '../components/underscoreJS/underscore-min'
	}

});