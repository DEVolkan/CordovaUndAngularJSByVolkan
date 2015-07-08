(function (angular) {
    angular.module("app")
            .controller('homeController', homeController);

    homeController.$inject = ['$scope', 'service'];

    function homeController($scope, service) {
        $scope.testIntegers = service.getTestIntegers;

        $scope.test = "HelloWorld";
        $scope.testDieZweite = ["1", "2"];
        $scope.output = "";


        function executeQuery(tx) {
            tx.executeSql('DROP TABLE IF EXISTS TestTable');
            tx.executeSql('CREATE TABLE IF NOT EXISTS TestTable (id unique, data)');
            tx.executeSql('INSERT INTO TestTable (id, data) VALUES (1, "あいうえお")');
            tx.executeSql('INSERT INTO TestTable (id, data) VALUES (2, "かきくけこ")');
            tx.executeSql('INSERT INTO TestTable (id, data) VALUES (3, "さしすせそ")');
            tx.executeSql('INSERT INTO TestTable (id, data) VALUES (4, "たちつてと")');
            tx.executeSql('INSERT INTO TestTable (id, data) VALUES (5, "なにぬねの")');
            tx.executeSql('INSERT INTO TestTable (id, data) VALUES (6, "はひふへほ")');
            tx.executeSql('INSERT INTO TestTable (id, data) VALUES (7, "まみむめも")');
        };

        function queryDB(tx) {
            tx.executeSql('SELECT * FROM TestTable', [], querySuccess, errorCB);
        };

        function querySuccess(tx, results) {
            var len = results.rows.length;
            var result = [];
            for (var i = 0; i < results.rows.length; i++) {
                result.push(results.rows[i]);
            };
            $scope.output = result;
        };

        function errorCB(err) {
            console.log("Error occured while executing SQL: " + err.code);
        };

        function successCB() {
            var db = window.openDatabase("Database", "1.0", "TestDatabase", 200000);
            db.transaction(queryDB, errorCB);
        };

        function createDB() {
            var db = window.openDatabase("Database", "1.0", "TestDatabase", 200000);
            db.transaction(executeQuery, errorCB, successCB);

        };
        $scope.ausfuehren = createDB;
    };

})(angular);