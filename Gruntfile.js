module.exports = function(grunt) {
    
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		watch: {
			scripts: {
				files: ["scripts/*.js"],
				tasks: ["eslint", "uglify", "browserify"],
				options: {
					spawn: false,
				},
			}
		},
		eslint: {
			all: ["scripts/*.js"]
		},
		uglify: {
			options: {
				banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"yyyy-mm-dd\") %> */\n"
			},
			build: {
				files: [{
					expand: true,
					cwd: "build", /*you had script here*/
					src: "bundle.js", /*you had *.js */
					dest: "build",
					ext: ".min.js"
				}]
			}
		},
		browserify: {
			dist: {
				files: {
					"build/bundle.js": ["scripts/main.js"]
				}
			}
		}
	})
    
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks("grunt-contrib-uglify")
	grunt.loadNpmTasks("grunt-contrib-watch")
	grunt.loadNpmTasks("gruntify-eslint")
	grunt.loadNpmTasks("grunt-browserify")
   
	/* grunt condenses everything so you don't have to run 4 different tasks */
        
	grunt.registerTask("default", ["eslint", "browserify", "uglify","watch"])
	// Default task(s).
    
}