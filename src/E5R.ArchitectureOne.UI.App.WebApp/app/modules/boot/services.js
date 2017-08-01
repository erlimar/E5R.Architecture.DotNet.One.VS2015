define(function (require, exports, module) {

    var services = [
        require('services/menu.service'),
        require('services/atividade.service')
    ]

    module.exports = function (ngModule) {
        for (var s in services) {
            var service = services[s];
            ngModule.service(service.$name$, service);
        }
    }
});
