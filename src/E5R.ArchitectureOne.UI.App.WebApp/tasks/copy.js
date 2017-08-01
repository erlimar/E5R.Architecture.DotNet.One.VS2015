/* ok! */
var util = require('./util');

module.exports = {
    bower: {
        files: [
            util.copyBower('jquery/dist',['jquery.js'], 'js'),
            util.copyBower('bootstrap/dist/js',['bootstrap.js'], 'js'),
            util.copyBower('bootstrap/dist/css', ['bootstrap.css','bootstrap-theme.css'], 'css'),
            util.copyBower('bootstrap/dist/fonts', ['*'], 'fonts'),
            util.copyBower('html5shiv/dist', ['html5shiv.js'], 'js'),
            util.copyBower('respond/dest', ['respond.src.js'], 'js'),
            util.copyBower('angular' ,['angular.js'], 'js'),
            util.copyBower('angular-animate' ,['angular-animate.js'], 'js'),
            util.copyBower('angular-touch' ,['angular-touch.js'], 'js'),
            util.copyBower('angular-ui-router/release', ['angular-ui-router.js'], 'js'),
            util.copyBower('angular-bootstrap', ['ui-bootstrap-tpls.js'], 'js'),
            util.copyBower('angular-bootstrap', ['ui-bootstrap-csp.css'], 'css'),
            util.copyBower('requirejs', ['require.js'], 'js'),
            util.copyBower('fastclick/lib', ['fastclick.js'], 'js'),
            util.copyBower('jquery-slimscroll', ['jquery.slimscroll.js'], 'js'),
            util.copyBower('jquery.nicescroll/dist', ['jquery.nicescroll.js'], 'js'),
            util.copyBower('font-awesome/css', ['font-awesome.css'], 'css'),
            util.copyBower('font-awesome/fonts', ['*'], 'fonts')
        ]
    },
    webfonts: {
        files: [
            {
                expand: true,
                flatten: true,
                src: util.buildPath('bowerlibs/fonts/*.{otf,eot,svg,ttf,woff,woff2}'),
                dest: util.libDestPath('fonts/')
            }
        ]
    }
}
