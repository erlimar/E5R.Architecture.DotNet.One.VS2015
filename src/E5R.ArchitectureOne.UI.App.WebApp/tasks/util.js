/* TODO: Remover propriedades/metodos nao utilizados*/
var libRoot = "lib";
var libRootDest = "wwwroot/lib";
var appRoot = "app";
var appRootDest = "wwwroot/app";
var buildRoot = "build";

module.exports = {
    libRootPath: libRoot,
    libRootDestPath: libRootDest,
    appRootPath: appRoot,
    appRootDestPath: appRootDest,
    buildRootPath: buildRoot,
    libPath: function (path) {
        return libRoot + '/' + path;
    },
    libDestPath: function (path) {
        return libRootDest + '/' + path;
    },
    appPath: function (path) {
        return appRoot + '/' + path;
    },
    appDestPath: function (path) {
        return appRootDest + '/' + path;
    },
    buildPath: function (path) {
        return buildRoot + '/' + path;
    },
    jsLib: function (path) {
        return libRoot + '/js/' + path + '.js';
    },
    jsLibDest: function (path) {
        return libRootDest + '/js/' + path + '.js';
    },
    cssLib: function (path) {
        return libRoot + '/css/' + path + '.css';
    },
    cssLibDest: function (path) {
        return libRootDest + '/css/' + path + '.css';
    },
    jsApp: function (path) {
        return appRoot + '/' + path + '.js';
    },
    jsAppDest: function (path) {
        return appRootDest + '/' + path + '.js';
    },
    cssApp: function (path) {
        return appRoot + '/' + path + '.css';
    },
    cssAppDest: function (path) {
        return appRootDest + '/' + path + '.css';
    },
    copyBower: function (src, paths, dest) {
        return {
            expand: true,
            flatten: true,
            src: paths.map(function (s) { return 'bower_components/' + src + '/' + s; }),
            dest: buildRoot + '/bowerlibs/' + dest
        };
    }
}
