define(function (require, exports, module) {

    var pages = [
        require('pages/home.page'),
        require('pages/atividades.page')
    ]

    module.exports = function (ngModule) {
        for (var p in pages) {
            var page = pages[p];
            ngModule.component(page.$name$, page.$page$);
        }
    }
});
