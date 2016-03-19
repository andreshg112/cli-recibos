var app;
(function () {
    app = angular.module("productsModule", ['ngRoute']);
    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                    .when('/Productos/Ejemplo1', {
                        templateUrl: 'MyScripts/view/Ejemplo1.html'
                    })
                    .when('/Productos/Ejemplo2', {
                        templateUrl: 'MyScripts/view/Ejemplo2.html',
                        controller: 'Ejemplo2Controller'
                    })
                    .when('/Contactos/', {
                        templateUrl: 'MyScripts/view/contactosTemplate.html',
                        controller: 'contactosController'
                    });
        }]);
})();
