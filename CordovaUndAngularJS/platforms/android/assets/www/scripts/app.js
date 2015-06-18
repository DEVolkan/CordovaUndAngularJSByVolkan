(function(angular) {
    angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngCordova']);
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
    });
})(angular);