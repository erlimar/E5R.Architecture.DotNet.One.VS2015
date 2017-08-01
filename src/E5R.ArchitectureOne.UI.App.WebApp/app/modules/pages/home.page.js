define(function (require, exports, module) {

    var util = require('util');

    module.exports = {
        $name$: util.makeAppComponentName('HomePage'),
        $page$: {
            templateUrl: 'views/pages/home.tmpl',
            controller: HomePageController
        }
    };

    HomePageController.$inject = [];

    /**
     * @constructor

     * @param {UtilService} util
     */
    function HomePageController() {
        var self = this;
    }
});
