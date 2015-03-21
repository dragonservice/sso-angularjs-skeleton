'use strict';

// Serves the cookie for the application

module.exports = 'controllers/cookie';
var dependencies = [
    'ngCookies'
];

angular.module(module.exports, dependencies)
    .controller('CookieCtrl', function ($cookies, $location) {
        if ($cookies.session) {
            $location.path('/verify/' + $cookies.session);
        }
    });
