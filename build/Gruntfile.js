module.exports = function(grunt) {
    var src = grunt.option('src')
    var dst = grunt.option('dst')
    var path = require('path')
    require('load-grunt-tasks')(grunt)
    grunt.initConfig({
        clean: {
            icons: {
                options: {
                    force: true
                },
                src: [
                    path.join(dst, 'svg/*.svg')
                ]
            }
        },
        shell: {
            installSketchTool: {
                command: '/Applications/Sketch.app/Contents/Resources/sketchtool/install.sh'
            },
            exportIcons: {
                command: 'sketchtool export slices "' + path.join(src) + '" --output="' + path.join(dst, 'svg/') + '"'
            }
        },
        webfont: {
            icons: {
                src: path.join(dst, 'svg/*.svg'),
                dest: path.join(dst, 'src/fonts/'),
                destCss: path.join(dst, 'src/css/'),
                options: {
                    font: 'apigee-icons',
                    fontHeight: 512,
                    normalize: true,
                    optimize: false,
                    destHtml: path.join(dst, 'preview/'),
                    htmlDemoTemplate: 'template.html',
                    templateOptions: {
                        classPrefix: 'apic-'
                    },
                    engine: 'node',
                    verbose: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('all', [ 'clean', 'shell', 'webfont:icons' ]);
    grunt.registerTask('font-only', [ 'webfont:icons' ]);

};