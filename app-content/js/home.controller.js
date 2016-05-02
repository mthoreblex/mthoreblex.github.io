angular
    .module('app')
    .controller('HomeController', function (deviceDetector, $scope) {
        $scope.isMobile = deviceDetector.isMobile();
    });