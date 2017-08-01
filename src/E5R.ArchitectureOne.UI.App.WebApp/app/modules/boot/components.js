define(function (require, exports, module) {

    var components = [
        require('components/menu/main-menu.component')
    ]

    module.exports = function (ngModule) {
        for (var c in components) {
            var component = components[c];
            ngModule.component(component.$name$, component.$component$);
        }
    }
});
