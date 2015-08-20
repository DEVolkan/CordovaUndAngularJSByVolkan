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
                    db.transaction(createDataBase, errorConnectionBinding, successConnectionBinding);
                }

                service.createDataBase = function () {
                    tx.executeSql('CREATE TABLE IF NOT EXISTS TestTable (guid unique, createdDate, task, area, underArea, importance, difficult)');
                }

                service.insertDataInDB = function (task, area, underArea, importance, difficult) {
                    var guid = guid();
                    var createdDate = Date.now();
                    tx.executeSql('INSERT INTO TestTable (guid, createdDate, task, area, underArea, importance, difficult) VALUES ("'
                        + guid + '", "'
                        + createdDate + '", "'
                        + task + '", "'
                        + area + '", "'
                        + underArea + '", "'
                        + importance + '","'
                        + difficult + '")');
                    
                }

                //function createGuid() {
                //    return 12;
                //}

                function errorConnectionBinding(err) {
                    console.log("Error occured while executing SQL: " + err.code);
                };

                function successConnectionBinding() {
                    var db = null;
                    var db = window.openDatabase("Database", "1.0", "TestDatabase", 200000);
                    db.transaction(queryDB, errorCB);
                };

                function queryDB(tx) {
                    tx.executeSql('SELECT * FROM TestTable', [], querySuccess, errorConnectionBinding);
                };

                function querySuccess(tx, results) {
                    var length = results.rows.length;
                    var result = [];
                    for (var i = 0; i < length; i++) {
                        result.push(results.rows[i]);
                    };
                    service.allTask = result;
                };

                return service;
            });
})(angular);