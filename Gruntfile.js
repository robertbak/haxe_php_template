/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    haxe: {
        test:{
          main: 'MainTest',
          classpath:['test/','app/'],       
          output:'./out/test/haxe',
          target:'php'
        },
        build:{
          main: 'Main',
          classpath:['app/'],       
          output:'./out/build/haxe',
          target:'php'
        }
      },
    shell:{
    	test:{
    		command: "php -f ./out/test/haxe/index.php",
        	options: {
            	stdout: true
        	}
        }
    }
  });

  grunt.loadNpmTasks('grunt-haxe');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('test', ['haxe','shell']);
  grunt.registerTask('build', ['haxe']);

  grunt.registerTask('default', ['test']);
};