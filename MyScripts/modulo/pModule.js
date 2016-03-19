var app;
(function () {
    app = angular.module("recibosApp", ['ngRoute']);
    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                    .when('/Recibos/', {
                        templateUrl: 'MyScripts/view/recibos.html',
                        controller: 'RecibosCtrl'
                    });
        }]);
})();
