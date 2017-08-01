define(function (require, exports, module) {

    var util = require('util');

    module.exports = {
        $name$: util.makeAppComponentName('AtividadesPage'),
        $page$: {
            templateUrl: 'views/pages/atividades.tmpl',
            controller: AtividadesPageController
        }
    };

    AtividadesPageController.$inject = [];

    /**
     * @constructor

     * @param {UtilService} util
     */
    function AtividadesPageController() {
        var self = this;
    }
});
