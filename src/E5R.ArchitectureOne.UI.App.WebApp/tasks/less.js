/* ok! */
var util = require('./util');

module.exports = {
    'app': {
        files: [{
            cwd: util.appPath(''),
            expand: true,
            src: '**/*.less',
            dest: util.buildPath(''),
            ext: '.css'
        }]
    }
}
