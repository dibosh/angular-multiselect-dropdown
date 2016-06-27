(function () {
  'use strict';

  module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    function init(params) {
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
          all: ['gruntfile.js', 'src/multiselect-dropdown/multiselect-dropdown.js', 'test/**/*.js']
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
            files: {
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
        },
        bump: {
          scripts: {
            files: ["dist/*.*"],
            updateConfigs: ["pkg"],
            commitFiles: ["-a"],
            push: false
          }
        }
      });

      grunt.registerTask('default', ['jshint:all', 'sass', 'cssmin', 'htmlmin', 'uglify:build']);

    }

    init({});

  };
})();


