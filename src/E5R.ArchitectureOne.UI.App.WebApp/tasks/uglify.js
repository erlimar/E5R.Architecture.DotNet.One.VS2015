/* ok! */
var util = require('./util');

var js = {
    'vendor': { files: {} },
    'vendor-ie8': { files: {} },
    'app': { files: {} }
};

js['vendor'].files[util.jsLibDest('vendor.min')] = [util.jsLibDest('vendor')];
js['vendor-ie8'].files[util.jsLibDest('vendor-ie8.min')] = [util.jsLibDest('vendor-ie8')];
js['app'].files[util.jsAppDest('app.min')] = [util.jsAppDest('app')];

module.exports = {
    'vendor.min.js': js['vendor'],
    'vendor-ie8.min.js': js['vendor-ie8'],
    'app.min.js': js['app']
}
