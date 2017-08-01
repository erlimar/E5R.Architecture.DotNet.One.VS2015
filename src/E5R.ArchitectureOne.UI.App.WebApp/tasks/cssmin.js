/* ok! */
var util = require('./util');

var css = {
    'vendor': { files: {} },
    'app': { files: {} }
};

css['vendor'].files[util.cssLibDest('vendor.min')] = [util.cssLibDest('vendor')];
css['app'].files[util.cssAppDest('app.min')] = [util.cssAppDest('app')];

module.exports = {
    'vendor.min.css': css['vendor'],
    'app.min.css': css['app'],
}
