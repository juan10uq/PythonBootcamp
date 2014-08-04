(function () {
    'use strict';

    var directiveId = 'cpFooter';

    var app = angular.module('ngBoilerplate');
    app.directive(directiveId, function () {
        return {
            templateUrl: 'layout/cpFooter.tpl.html',
            restrict: 'E'
        };
    });
})();