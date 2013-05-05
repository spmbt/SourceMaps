module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-jsmin-sourcemap');
  grunt.initConfig({
    'jsmin-sourcemap': {
      all: {
        src: ['scripts/script.js'],
        dest: 'scripts/script.jsmin-grunt.js',
        destMap: 'scripts/script.jsmin-grunt.js.map'
      }
    }
  });
  grunt.registerTask('default', 'jsmin-sourcemap');
};
