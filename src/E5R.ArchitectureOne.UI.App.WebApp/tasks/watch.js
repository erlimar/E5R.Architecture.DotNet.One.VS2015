var util = require('./util');

module.exports = {
    'app': {
        options: {
            interrupt: true,
            livereload: true
        },
        files: [
            'gruntfile.js',
            'tasks/**/*.js',
            util.appPath('modules/**/*.*'),
            '!' + util.appPath('modules/boot/tmpl.js'),
            util.appPath('styles/**/*.*'),
            util.appPath('views/**/*.html'),
            util.appPath('app-template/**/*.*'),
            util.appPath('config.js')
        ],
        tasks: ['post-build']
    }
}
