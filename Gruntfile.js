module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Express
		express: {
			options: {
				port: 8000
			}
			dev: {
				options: {
					script: 'server/index.js',
					node_env: 'dev'
				}
			},
			prod: {
				options: {
					script: 'server/index.js',
					node_env: 'production'
				}
			}
		}
	});
	
	// Load Task Dependencies
	grunt.loadNpmTasks('grunt-express-sever');

	// Define Tasks
	grunt.regesterTastk('default', ['express:dev']);
};