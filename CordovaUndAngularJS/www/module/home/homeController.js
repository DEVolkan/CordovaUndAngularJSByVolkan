(function (angular) {
    angular.module("app")
            .controller('homeController', homeController);

    homeController.$inject = ['$scope', 'service'];

    function homeController($scope, service) {
        ////services(expanded angularJs)
        $scope.testIntegers = service.getTestIntegers;
        console.log($scope.testIntegers);

        $scope.test = "HelloWorld";
    }

})(angular);