define(function (require, exports, module) {

    var util = require('util');

    module.exports = AtividadeService;

    AtividadeService.$name$ = 'AtividadeService';

    AtividadeService.$inject = [
        '$http'
    ];

    /**
     * @constructor
     */
    function AtividadeService($http) {
        var self = this;
        var resource = util.http.bind($http);

        /**
         * Retorna a lista de atividades
         */
        self.getAtividades = function () {
            return resource('atividade').get();
        }
    }
});
