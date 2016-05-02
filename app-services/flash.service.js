angular
    .module('app')
    .factory('FlashService', function ($rootScope) {
        var service = {};

        (function() {
            $rootScope.$on('$locationChangeStart', function () {
                var flash = $rootScope.flash;
                if (flash) {
                    if (!flash.keepAfterLocationChange) {
                        delete $rootScope.flash;
                    }
                    else {
                        // only keep for a single location change
                        flash.keepAfterLocationChange = false;
                    }
                }
            });
        })();

        service.success = function(message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: 'success',
                keepAfterLocationChange: keepAfterLocationChange
            };
        };

        service.error = function(message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: 'danger',
                keepAfterLocationChange: keepAfterLocationChange
            };
        };

        return service;
    });