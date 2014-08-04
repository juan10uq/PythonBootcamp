(function () {
    'use strict';

    var app = angular.module('common').factory('utils', utils);

    function utils() {
        // keyCodes Array
        var keyCodes = {
            backspace: 8,
            tab: 9,
            enter: 13,
            esc: 27,
            space: 32,
            pageUp: 33,
            pageDown: 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            insert: 45,
            del: 46
        };

        //
        return {
            keyCodes: keyCodes
        };
    }
})();
