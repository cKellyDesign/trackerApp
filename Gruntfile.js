module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt); // Predfine Task Dependencies

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Express
		express: {
			options: {
				port: 8000
			},
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
		},

		// Watch
		watch: {
			express: {
				files: ['server/**.js', 'server/**/**.js'],
				tasks: ['express:dev'],
				options: {
					spawn: false
				}
			},
			scripts: {
				files: ['scripts/**.js', 'scripts/**/**.js'],
				tasks: ['requirejs:compile']
			},
			css: {
				files: ['styles/**/**.scss', 'syles/**.scss'],
				tasks: ['sass']
			// },
			// html: {
			// 	files: ['www/index.html']
			}
		},

		// Sass
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'www/css/main.css': 'styles/main.scss'
				}
			}
		},

		// RequireJS
		requirejs: {
			compile: {
				options: {
					baseUrl: 'scripts',
					mainConfigFile: 'scripts/config.js',
					name: '../node_modules/requirejs/require',
					out: 'www/js/trackerApp.js',
					optimize: 'none',
				}
			}
		}

	});

	// Define Tasks
	grunt.registerTask('default', ['express:dev', 'sass', 'requirejs:compile', 'watch']);
};