(function () {
    'use strict';

    var app = angular.module('ngBoilerplate');

    // Configure Toastr
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';

    // Remote service URL
    //var serviceRoot = window.location.protocol + '//' + window.location.host + '/';
    var serviceRoot = 'http://localhost:52081/';
    var remoteOdataServiceName = serviceRoot + 'odata/';
    var remoteBreezeService = serviceRoot + 'breeze/';

    var events = {
        controllerActivateSuccess: 'controller.activateSuccess'
    };

    var imageSettings = {
        imageBasePath: '../../asserts/img/'
    };

    var config = {
        appErrorPrefix: '[CP Error] ', //Configure the exceptionHandler decorator
        docTitle: 'CP: ',
        events: events,
        imageSettings: imageSettings,
        remoteOdataServiceName: remoteOdataServiceName,
        remoteBreezeService: remoteBreezeService,
        version: 'Python Boot Camp 1.0'
    };
    // expose config module
    app.value('config', config);
    
    app.config(['$logProvider', function ($logProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
    }]);

    //#region Configure the common services via commonConfig
    app.config(['commonConfigProvider', function (cfg) {
        cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
    }]);
    //#endregion
})();