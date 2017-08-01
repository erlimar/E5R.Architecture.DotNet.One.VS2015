/* ok! */
var util = require('./util');

module.exports = {
    'app.modules': {
        options: {
            baseUrl: 'app/modules',
            mainConfigFile: 'app/config.js',
            include: ['**/*.js'],
            optimize: 'none',
            //optimize: 'uglify',
            out: util.buildPath('app-modules.js')
        }
    }
}
