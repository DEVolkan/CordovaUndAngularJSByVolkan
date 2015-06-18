(function(angular) {
    angular.module('app')
            .factory('service', function($http, $q, $filter) {
                return  {
                    test: 1
                };
            });
})(angular);