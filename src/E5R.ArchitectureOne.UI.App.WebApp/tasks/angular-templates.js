var util = require('./util');

module.exports = {
    'app': {
        options: {
            url: function (url) {
                return url.substring(0, url.lastIndexOf('.html'));
            },
            bootstrap: function (module, script) {
                return [
                    'define(function (require, exports, module) {',
                    '  module.exports = function($templateCache) {',
                       script,
                    '  };',
                    '});',
                    ''
                ].join('\n');
            }
        },
        cwd: util.appPath(''),
        src: 'views/**/*.tmpl.html',
        dest: util.jsApp('modules/boot/tmpl')
    }
}
