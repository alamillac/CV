module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    handlebars: {
        all: {
            options: {
                partialRegex: /.*/,
                partialsPathRegex: /\/partials\//,
                helpers: ['libs/templateHelpers.js'],
                commonjs: true
            },
            files: {
                "app/js/templates.js": ["views/**/*.hbs"]
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');

  grunt.registerTask('default', ['jshint']);

};
