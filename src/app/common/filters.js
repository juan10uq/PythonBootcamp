(function () {
    'use strict';

    var app = angular.module('commonFilters', []);

    // true (\u2713 -> ✓)
    // false (\u2718 -> ✘).
    app.filter('checkmark', function () {
        return function (input) {
            return input ? '\u2713' : '\u2718';
        };
    });
})();