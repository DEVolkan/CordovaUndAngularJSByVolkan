
(function (angular) {
    angular.module('app')
            .run(["$location", "service", "$cordovaSQLite",  function ($location, service, $cordovaSQLite, $scope) {
                function cordova() {
                    "use strict";

                    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

                    function onDeviceReady() {
                        // Verarbeiten der Cordova-Pause- und -Fortsetzenereignisse
                        document.addEventListener('pause', onPause.bind(this), false);
                        document.addEventListener('resume', onResume.bind(this), false);

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