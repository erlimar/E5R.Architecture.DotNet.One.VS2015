define(function (require, exports, module) {

    var util = require('util');

    module.exports = [
        {
            name: 'home',
            url: '/home',
            component: util.makeAppComponentName('HomePage')
        },
        {
            name: 'atividades',
            url: '/atividades',
            component: util.makeAppComponentName('AtividadesPage')
        }
    ];

    //resolve: {
    //    bind: function (InjectService, $transition$) {
    //        return InjectService.getAll(); // Promise
    //    }
    //}
});
