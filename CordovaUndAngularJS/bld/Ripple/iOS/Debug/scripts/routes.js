(function (angular) {
    angular.module('app')
            .config(["$routeProvider", function ($routeProvider) {
                $routeProvider
                        .when('/', {
                            templateUrl: 'module/home/view/homeIndex.html',
                            controller: 'homeController',
                        });
            }]);
})(angular);