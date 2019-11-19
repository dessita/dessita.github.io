module.exports = function(grunt) {

    grunt.initConfig({
        svgstore: {
            dist: {
                files: {
                    '_includes/svg-defs.svg':
                        ['assets/images/svg/*.svg']
                }
            },
            options:{
              cleanup:true
            },
            your_target: {
                // Target-specific file lists and/or options go here.
            }
        },

        watch:{
            svgs:{
                files: 'assets/images/svg/*.svg',
                tasks:['svgstore'],
                options: {
                    livereload: true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-contrib-watch');

// Default task(s).
    grunt.registerTask('default', ['watch']);

};