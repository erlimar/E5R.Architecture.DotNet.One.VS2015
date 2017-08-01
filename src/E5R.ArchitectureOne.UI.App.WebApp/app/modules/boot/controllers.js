define(function (require, exports, module) {

    var controllers = [
        require('controllers/main.controller')
    ]

    module.exports = function (ngModule) {
        for (var c in controllers) {
            var controller = controllers[c];
            ngModule.controller(controller.$name$, controller);
        }
    }
});
