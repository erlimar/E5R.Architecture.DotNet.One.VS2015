define(function (require, exports, module) {

    var tmpl = require('boot/tmpl');
    var routes = require('boot/routes');

    module.exports = function (ngModule) {
        ngModule.run(appRun);
        ngModule.config(appConfig);
    }

    appRun.$inject = [
        '$templateCache'
    ];

    appConfig.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];

    /**
     * OnAppRun
     *
     * @param {$templateCache} templateCache
     */
    function appRun(templateCache) {
        tmpl(templateCache);
    }

    /**
     * OnAppConfig
     *
     * @param {$stateProvider} stateProvider
     */
    function appConfig(stateProvider, urlRouterProvider) {

        urlRouterProvider.otherwise('/');

        for (var r in routes) {
            var route = routes[r];

            stateProvider.state(route);
        }
    }
});
