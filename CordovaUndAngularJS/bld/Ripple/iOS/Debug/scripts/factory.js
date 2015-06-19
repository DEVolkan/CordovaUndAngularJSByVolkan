(function(angular) {
    angular.module('app')
            .factory('service', function ($http, $q, $filter) {
                var service = {
                    loadData: loadData
                };
                
                function loadData() {
                    service.getTestIntegers = [1, 2, 3, 4, 5];
                    return service.getTestIntegers;
                };

                return service;
            });
})(angular);