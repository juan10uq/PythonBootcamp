(function () {
    'use strict';

    var directiveId = 'cpMainPanel';

    var app = angular.module('ngBoilerplate');
    app.directive(directiveId, function () {
        return {
            templateUrl: 'layout/cpMainPanel.tpl.html',
            restrict: 'E'
        };
    });
})();