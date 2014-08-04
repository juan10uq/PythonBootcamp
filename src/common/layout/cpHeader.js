(function () {
    'use strict';

    var directiveId = 'cpHeader';

    var app = angular.module('ngBoilerplate');
    app.directive(directiveId, function () {
        return {
            templateUrl: 'layout/cpHeader.tpl.html',
            restrict: 'E'
        };
    });
})();