define(function (require, exports, module) {

    var util = require('util');

    module.exports = MenuService;

    MenuService.$name$ = 'MenuService';

    MenuService.$inject = [
        '$http'
    ];

    /**
     * @constructor
     */
    function MenuService($http) {
        var self = this;
        var resource = util.http.bind($http);

        /**
         * Retorna a lista de menus
         */
        self.getMenu = function () {
            return resource('menu').get();
        }
    }
});
