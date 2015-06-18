(function(angular) {
    angular.module('app')
            .config(function($httpProvider) {
                $httpProvider.defaults.cache = true;
            });
})(angular);