var util = require('./util');

module.exports = {
    'vendor.js': {
        src: [
            util.buildPath('bowerlibs/js/jquery.js'),
            util.buildPath('bowerlibs/js/bootstrap.js'),
            util.buildPath('bowerlibs/js/angular.js'),
            util.buildPath('bowerlibs/js/angular-animate.js'),
            util.buildPath('bowerlibs/js/angular-touch.js'),
            util.buildPath('bowerlibs/js/angular-ui-router.js'),
            util.buildPath('bowerlibs/js/ui-bootstrap-tpls.js'),
            util.buildPath('bowerlibs/js/require.js')
        ],
        dest: util.jsLibDest('vendor')
    },
    'vendor-ie8.js': {
        src: [
            util.buildPath('bowerlibs/js/html5shiv.js'),
            util.buildPath('bowerlibs/js/respond.src.js')
        ],
        dest: util.jsLibDest('vendor-ie8')
    },
    'vendor.css': {
        src: [
            util.buildPath('bowerlibs/css/bootstrap.css'),
            util.buildPath('bowerlibs/css/ui-bootstrap-csp.css'),
            util.buildPath('bowerlibs/css/font-awesome.css')
        ],
        dest: util.cssLibDest('vendor')
    },
    'app.styles.css': {
        src: [
            util.cssApp('styles/**/*'),
            util.buildPath('styles/**/*.css')
        ],
        dest: util.buildPath('app-style.css')
    },
    'app.template.css': {
        src: util.cssApp('app-template/css/**/*'),
        dest: util.buildPath('app-template.css')
    },
    'app.template.js': {
        src: util.jsApp('app-template/js/**/*'),
        dest: util.buildPath('app-template.js')
    },
    'app.css': {
        src: [
            util.buildPath('app-template.css'),
            util.buildPath('app-style.css')
        ],
        dest: util.cssAppDest('app')
    },
    'app.js': {
        src: [
            util.buildPath('app-template.js'),
            util.buildPath('app-modules.js')
        ],
        dest: util.jsAppDest('app')
    }
}
