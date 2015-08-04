(function (angular) {
    angular.module("app")
            .controller('homeController', homeController);

    homeController.$inject = ['$scope', 'service', '$cordovaSQLite'];

    function homeController($scope, service, $cordovaSQLite) {
        $scope.testIntegers = service.getTestIntegers;
        console.log($cordovaSQLite);
        $scope.test = "HelloWorld";
        $scope.testDieZweite = ["1", "2"];
        $scope.output = "";
        $scope.aufgabe1 = "Pakete abhollen";
        $scope.aufgabe2 = "Unterlagen abgeben";
        $scope.area1 = "DHL";
        $scope.area2 = "Mich betreffend"
        $scope.githubprof = "false?";
        $scope.todo = "true?";
        var db = null;


        function createDB() {
            var db = window.openDatabase("Database", "1.0", "TestDatabase", 200000);
            db.transaction(executeQuery, errorCB, successCB);
        };
        //function createDB() {
        //    var dbSize = 5 * 1024 * 1024; // 5mb initial database   
        //    var db = window.openDatabase("Test Table", "", "TestTable", dbSize,
        //    function () {
        //        console.log('db successfully opened or created');
        //    },
        //    function () {
        //        console.log('db error');
        //    }
        //    );
        //    db.transaction(executeQuery, errorCB, successCB);
        //};
        $scope.ausfuehren = createDB;

        function executeQuery(tx) {
            //tx.executeSql('DROP TABLE IF EXISTS TestTable');
            tx.executeSql('CREATE TABLE IF NOT EXISTS TestTable (id unique, task, area)');
            //tx.executeSql('CREATE TABLE TestTable (id unique, task, area)');
            tx.executeSql('INSERT INTO TestTable (id, task, area) VALUES (1, "' + $scope.aufgabe1 + '", "' + $scope.area1 + '")');
            tx.executeSql('INSERT INTO TestTable (id, task, area) VALUES (2, "' + $scope.aufgabe2 + '", "' + $scope.area2 + '")');
        };

        $scope.ausgabe = successCB()

        function errorCB(err) {
            console.log("Error occured while executing SQL: " + err.code);
        };

        function successCB() {
            var db = window.openDatabase("Database", "1.0", "TestDatabase", 200000);
            db.transaction(queryDB, errorCB);
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
        //function queryDB(tx) {
        //    tx.executeSql('SELECT * FROM TestTable where area = "DHL"', [], querySuccess, errorCB);
        //};
    };

})(angular);