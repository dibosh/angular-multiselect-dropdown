/**
 @toc
 2. load grunt plugins
 3. init
 4. setup variables
 5. grunt.initConfig
 6. register grunt tasks

 */
(function () {
  'use strict';

  module.exports = function (grunt) {

    /**
     Load grunt plugins
     @toc 2.
     */
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-sass');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-karma');

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);


    /**
     Function that wraps everything to allow dynamically setting/changing grunt options and config later by grunt task.
     This init function is called once immediately (for using the default grunt options, config, and setup)
     and then may be called again AFTER updating grunt (command line) options.
     @toc 3.
     @method init
     */
    function init(params) {
      /**
       Project configuration.
       @toc 5.
       */
      grunt.initConfig({
        concat: {
          devCss: {
            src: [],
            dest: []
          }
        },
        jshint: {
          options: {
            globalstrict: true,
            node: true,
            loopfunc: true,
            browser: true,
            devel: true,
            globals: {
              angular: false,
              $: false,
              moment: false,
              Pikaday: false,
              module: false,
              forge: false
            }
          },
          all: ['Gruntfile.js', 'src/multiselect-dropdown/multiselect-dropdown.js', 'test/**/*.js']
        },
        uglify: {
          options: {
            mangle: false
          },
          build: {
            files: {
              'dist/multiselect-dropdown.min.js': ['src/multiselect-dropdown/multiselect-dropdown.js']
            }
          }
        },
        sass: {
          dist: {
            options: {},
            files: {
              "main.css": "_base.scss",
              "dist/multiselect-dropdown.css": "src/multiselect-dropdown/multiselect-dropdown.scss"
            }
          }
        },
        cssmin: {
          dist: {
            files: {
              'dist/multiselect-dropdown.min.css': ['dist/multiselect-dropdown.css']
            }
          }
        },
        htmlmin: {
          dist: {
            options: {
              removeComments: true,
              collapseWhitespace: true
            },
            files: {
              'dist/multiselect-dropdown.html': 'src/multiselect-dropdown/multiselect-dropdown.html'
            }
          }
        }
        /*,
         karma: {
         unit: {
         configFile: publicPathRelativeRoot+'config/karma.conf.js',
         singleRun: true,
         browsers: ['PhantomJS']
         }
         }*/
      });


      /**
       register/define grunt tasks
       @toc 6.
       */
        // Default task(s).
        // grunt.registerTask('default', ['jshint:beforeconcat', 'less:development', 'concat:devJs', 'concat:devCss']);
      grunt.registerTask('default', ['jshint:all', 'sass', 'cssmin', 'htmlmin', 'uglify:build']);

    }

    init({});		//initialize here for defaults (init may be called again later within a task)

  };
})();


