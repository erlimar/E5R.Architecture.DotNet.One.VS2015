define(function (require, exports, module) {

    var util = require('util');

    module.exports = {
        $name$: util.makeAppComponentName('MainMenu'),
        $component$: {
            templateUrl: 'views/components/menu/main-menu.tmpl',
            controller: MainMenuController
        }
    };

    MainMenuController.$inject = [
        'MenuService',
        '$state'
    ];

    /**
     * @constructor

     * @param {UtilService} util
     */
    function MainMenuController(svcMenu, $state) {
        var self = this;

        self.menuList = [];

        svcMenu.getMenu()

            .then(function (result) {
                console.log('svcMenu.getMenu() #then:', result);
                self.menuList = result;
                gotoDefault();
            })

            .catch(function (error) {
                console.log('svcMenu.getMenu() #catch:', error);
            });

        var gotoDefault = function () {
            var defaultRoute;

            self.menuList.forEach(function (menu) {
                if (menu.inicial) {
                    defaultRoute = menu.rota;
                }
            });

            if (defaultRoute) {
                $state.go(defaultRoute);
            }
        }
    }
});
