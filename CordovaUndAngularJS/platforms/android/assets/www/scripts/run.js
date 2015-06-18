(function(angular) {
    angular.module('app')
            .run(["$location", "service", function($location, service) {
                return service.loadData();
                }]);
})(angular);