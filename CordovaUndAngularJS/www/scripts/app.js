(function(angular) {
    angular.module('app', ['ngRoute', 'ui.bootstrap']);
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
    });
})(angular);