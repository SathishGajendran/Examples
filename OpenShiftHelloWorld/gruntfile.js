//Grunt Configuration

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		nodemon: {
			dev: {
				script: 'app.js',
				options: {
					cwd: __dirname,
					ignore: ['node_modules/**'],
					ext: 'js,html',
					watch: ['app.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-nodemon');
	grunt.registerTask('default', ['nodemon'])
};