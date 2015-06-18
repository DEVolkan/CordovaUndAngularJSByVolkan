(function (angular) {
    angular.module("app")
            .controller('homeController', homeController);

    homeController.$inject = ['$scope'];

    function homeController($scope) {
        $scope.test = "HelloWorld";
    }
})(angular);