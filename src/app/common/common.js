(function () {
    'use strict';

    // Define the common module
    // Contains services:
    //  - common
    //  - logger
    var commonModule = angular.module('common', []);

    // Must configure the common service and set its
    // events via the commonConfigProvider
    commonModule.provider('commonConfig', function () {
        this.config = {
            // These are the properties we need to set
            //controllerActivateSuccessEvent: '',
            //spinnerToggleEvent: ''
        };

        this.$get = function () {
            return {
                config: this.config
            };
        };
    });

    commonModule.factory('common',
        ['$q', '$rootScope', '$timeout', 'commonConfig', 'logger', 'constants', 'utils', '$http', common]);

    function common($q, $rootScope, $timeout, commonConfig, logger, constants, utils, $http) {
        function activateController(promises, controllerId) {
            return $q.all(promises).then(function (eventArgs) {
                var data = { controllerId: controllerId };
                $broadcast(commonConfig.config.controllerActivateSuccessEvent, data);
            });
        }

        function $broadcast() {
            return $rootScope.$broadcast.apply($rootScope, arguments);
        }

        return {
            // common angular dependencies
            $broadcast: $broadcast,
            $q: $q,
            $timeout: $timeout,
            // generic
            activateController: activateController,
            logger: logger, // for accessibility
            constants: constants,
            utils: utils,
            $http: $http
        };
    }
})();