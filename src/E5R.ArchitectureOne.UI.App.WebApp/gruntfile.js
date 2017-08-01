/// <binding BeforeBuild='build' AfterBuild='post-build' Clean='clean' ProjectOpened='watch' />

module.exports = function (grunt) {
    function task(name) { return require('./tasks/' + name); }

    grunt.initConfig({
        bower: task('bower-install'),
        copy: task('copy'),
        concat: task('concat'),
        clean: task('clean'),
        uglify: task('uglify'),
        cssmin: task('cssmin'),
        less: task('less'),
        requirejs: task('requirejs'),
        ngtemplates: task('angular-templates'),
        watch: task('watch')
    });

    grunt.registerTask("default", []);
    grunt.registerTask("build", [
        "bower:install",
        "copy:bower"
    ]);
    grunt.registerTask("post-build", [
        "less:app",
        "concat:vendor.js",
        "concat:vendor-ie8.js",
        "concat:vendor.css",
        "ngtemplates:app",
        "requirejs:app.modules",
        "concat:app.styles.css",
        "concat:app.template.css",
        "concat:app.template.js",
        "concat:app.css",
        "concat:app.js",
        "uglify:vendor.min.js",
        "uglify:vendor-ie8.min.js",
        "uglify:app.min.js",
        "cssmin:vendor.min.css",
        "cssmin:app.min.css",
        "copy:webfonts"
    ]);
    grunt.registerTask("clean", [
        "clean:build"
    ]);

    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-angular-templates");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadTasks("./tasks/custom");
};
