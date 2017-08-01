define(function (require, exports, module) {

    var svcModule = angular.module('app.services', []),
        ctrlModule = angular.module('app.controllers', ['app.services']),
        componentModule = angular.module('app.components', ['app.services']),
        pageModule = angular.module('app.pages', ['app.services']),
        thirdPartyModules = [
            'ngAnimate',
            'ngTouch',
            'ui.bootstrap',
            'ui.router'
        ],
        appDependencies = [
            'app.controllers',
            'app.components',
            'app.pages'
        ],
        appModule = angular.module('app', appDependencies.concat(thirdPartyModules));

    require('boot/services')(svcModule);
    require('boot/controllers')(ctrlModule);
    require('boot/pages')(pageModule);
    require('boot/components')(componentModule);
    require('boot/app')(appModule);

    angular.bootstrap(document, ['app']);
});
