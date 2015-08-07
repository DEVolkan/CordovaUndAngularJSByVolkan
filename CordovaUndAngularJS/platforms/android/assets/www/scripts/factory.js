(function(angular) {
    angular.module('app')
            .factory('service', function ($http, $q, $filter, $cordovaSQLite, $scope) {
                var service = {
                    loadData: loadData
                };
                
                function loadData() {
                    service.getTestIntegers = [1, 2, 3, 4, 5];
                    return service.getTestIntegers;
                };

                service.createDataBase = function () {
                    var db = window.openDatabase("Database", "1.0", "TestDatabase", 200000);
                    db.transaction(executeQuery, errorCB, successCB);
                }

                service.insertDataInDB = function () {

                }

                return service;
            });
})(angular);