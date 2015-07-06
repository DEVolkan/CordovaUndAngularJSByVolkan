var db = null;
(function (angular) {
    angular.module('app')
            .run(["$location", "service", "$cordovaSQLite", function ($location, service, $cordovaSQLite) {
                function cordova() {
                    "use strict";

                    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

                    function onDeviceReady() {
                        // Verarbeiten der Cordova-Pause- und -Fortsetzenereignisse
                        document.addEventListener('pause', onPause.bind(this), false);
                        document.addEventListener('resume', onResume.bind(this), false);
                        
                        var db = $cordovaSQLite.openDB({ name: "my.db" });

                        // for opening a background db:
                        var db = $cordovaSQLite.openDB({ name: "my.db", bgType: 1 });

                        $scope.execute = function () {
                            var query = "INSERT INTO test_table (data, data_num) VALUES (?,?)";
                            $cordovaSQLite.execute(db, query, ["test", 100]).then(function (res) {
                                console.log("insertId: " + res.insertId);
                            }, function (err) {
                                console.error(err);
                            });
                        };

                        // TODO: Cordova wurde geladen. F�hren Sie hier eine Initialisierung aus, die Cordova erfordert.
                    };

                    function onPause() {
                        console.log("Pause");
                        // TODO: Diese Anwendung wurde ausgesetzt. Speichern Sie hier den Anwendungszustand.
                    };

                    function onResume() {
                        console.log("Fortsetzung");
                        // TODO: Diese Anwendung wurde erneut aktiviert. Stellen Sie hier den Anwendungszustand wieder her.
                    };
                }
                cordova();
                return service.loadData();
            }]);
})(angular);