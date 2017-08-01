﻿/*
 * grunt-contrib-requirejs
 * http://gruntjs.com/
 *
 * Copyright (c) 2016 Tyler Kellen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    var requirejs = require('requirejs');
    var glob = require('glob');
    var path = require('path');
    var LOG_LEVEL_TRACE = 0, LOG_LEVEL_WARN = 2;

    // TODO: extend this to send build log to grunt.log.ok / grunt.log.error
    // by overriding the r.js logger (or submit issue to r.js to expand logging support)
    requirejs.define('node/print', [], function () {
        return function print(msg) {
            if (msg.substring(0, 5) === 'Error') {
                grunt.log.errorlns(msg);
                grunt.fail.warn('RequireJS failed.');
            } else {
                grunt.log.oklns(msg);
            }
        };
    });

    grunt.registerMultiTask('requirejs', 'Build a RequireJS project.', function () {

        var done = this.async();
        var options = this.options({
            logLevel: grunt.option('verbose') ? LOG_LEVEL_TRACE : LOG_LEVEL_WARN,
            error: false,
            done: function (done) {
                done();
            }
        });
        // The following catches errors in the user-defined `done` function and outputs them.
        var tryCatchDone = function (fn, done, output) {
            try {
                fn(done, output);
            } catch (e) {
                grunt.fail.warn('There was an error while processing your done function: "' + e + '"');
            }
        };

        // The following catches errors in the user-defined `error` function and passes them.
        // if the error function options is not set, this value should be undefined
        var tryCatchError = function (fn, done, err) {
            try {
                fn(done, err);
            } catch (e) {
                grunt.fail.fatal('There was an error while processing your error function: "' + e + '"');
            }
        };

        var resolveIncludes = function (src, cwd) {
            return glob.sync(src, { cwd: cwd }).map(function (filePath) {
                var dir = path.dirname(filePath);
                var file = path.basename(filePath, path.extname(filePath));
                return dir + '/' + file;
            });
        }

        // Apply Glob to includes entries
        if (typeof options.include === 'string' || Array.isArray(options.include)) {
            var globInclude = Array.isArray(options.include)
                ? options.include
                : [options.include];
            var cwd = options.baseUrl || '.';

            options.include = [];

            globInclude.forEach(function (src) {
                var resolvedIncludes = resolveIncludes(src, cwd);
                options.include = options.include.concat(resolvedIncludes);
            });
        }

        requirejs.optimize(
                options,
                tryCatchDone.bind(null, options.done, done),
                options.error ? tryCatchError.bind(null, options.error, done) : undefined
        );

    });
};