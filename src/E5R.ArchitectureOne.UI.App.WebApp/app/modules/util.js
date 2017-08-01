define(function (require, exports, module) {

    var APP_COMPONENT_PREFIX = 'app';
    var API_URL_TEMPLATE = '/api/v1/{sufix}';

    module.exports = {
        makeApiUrl: _makeApiUrl,
        makeAppComponentName: _makeAppComponentName,
        http: _httpResource
    }

    /**
     * Gera uma URL completa da API com base em um sufixo informado.
     */
    function _makeApiUrl(urlSufix) {
        return API_URL_TEMPLATE.replace('{sufix}', urlSufix);
    }

    /**
     * Gera um nome de componente seguindo o prefixo da aplicação
     */
    function _makeAppComponentName(name) {
        return APP_COMPONENT_PREFIX + name;
    }

    /**
     * Prepara o retorno das chamadas a API (back).
     * Trata formato de Data/Hora, Monetário
     */
    function _prepareApiReturn(data) {
        return data;
    }

    /**
     * Cria um recurso base em uma instância de serviço $http e um sufixo
     * de url que permite chamar a API (back-end) de forma genérica.
     */
    function _httpResource(urlSufix) {
        var httpBackEnd = this;

        return {
            'get': methodCall('GET'),
            'post': methodCall('POST'),
            'put': methodCall('PUT'),
            'delete': methodCall('DELETE')
        };

        function methodCall(method){
            return function(params) {
                var promise = httpBackEnd({
                        method: method,
                        url: _makeApiUrl(urlSufix),
                        data: params
                    });
                
                promise = promise.then(successResponse);
                promise = promise.catch(failResponse);

                return promise;
            }
        }

        function successResponse(response) {
            return _prepareApiReturn(response.data);
        }

        function failResponse(response) {
            console.log('API call failed:', response);
            return _prepareApiReturn(response.data);
        }
    }
});
