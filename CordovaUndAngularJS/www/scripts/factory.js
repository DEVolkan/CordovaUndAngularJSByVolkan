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

                service.initializationDataBase = function () {
                    var db = window.openDatabase("Database", "1.0", "TestDatabase", 200000);
                    db.transaction(executeQuery, errorCB, successCB);
                }

                service.createDataBase = function () {
                    tx.executeSql('CREATE TABLE IF NOT EXISTS TestTable (guid unique, createdDate, task, area, underArea, importance)');
                }

                service.insertDataInDB = function (task, area, underArea, importance) {
                    var guid = createGuid();
                    var createdDate = Date.now();
                    tx.executeSql('INSERT INTO TestTable (guid, createdDate, task, area, underArea, importance) VALUES ("'
                        + guid + '", "'
                        + createdDate + '", "'
                        + task + '", "'
                        + area + '", "'
                        + underArea + '", "'
                        + importance + '")');
                    
                }

                function createGuid() {
                    return 12;
                }

                

                return service;
            });
})(angular);