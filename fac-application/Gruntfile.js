module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-stylelint');
    grunt.loadNpmTasks('grunt-sass-lint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    //grunt.loadNpmTasks('grunt-gh-pages');

    grunt.initConfig({
        eslint: { //npx eslint src/components/*.js --fix
            options: {
                configFile: '.eslintrc.json',
                fix: true
            },
            target: ['src/components/*.js']
        },
        stylelint: {
            options: {
                configFile: '.stylelintrc.json'
            },
            all: ['src/scss/**/*.scss']
        },
        sasslint: {
            options: {
                configFile: '.sasslintrc.json',
            },
            target: ['src/scss/**/*.scss']
        },
        postcss: {
            options: {
              //map: true,
              syntax: require('postcss-scss'),
              processors: [
                require('postcss-sorting'),
                require('pixrem')(), // add fallbacks for rem units
                require('autoprefixer')() // add vendor prefixes
                //require('cssnano')() // minify the result
              ]
            },
            dist: {
              src: 'src/scss/**/*.scss'
            }
          },
          //'gh-pages': {
          //  options: {
          //    base: 'build',
          //    dest: '/fac-application/'
          //  },
          //  src: ['**']
          //},
        watch: {
            files: ['Gruntfile.js','src/components/*.js','src/scss/**/*.scss'],
            tasks: [ 'stylelint', 'eslint', 'postcss']
        }
    });

    grunt.registerTask('default', ['eslint','stylelint','sasslint']);
    //grunt.registerTask('ghpages', ['gh-pages']);
    grunt.registerTask('postprocess', ['postcss']); //npx stylelint src/scss/**/*.scss --fix
};

