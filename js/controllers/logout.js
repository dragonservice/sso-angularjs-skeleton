"use strict";

// Serves the logout for the application

module.exports = 'controllers/logout';
var dependencies = [
    'ngCookies',
    require('../services/user')
];

angular.module(module.exports, dependencies)
    .controller('LogoutCtrl', function ($scope, $http, $routeParams, $location, $cookies, user) {
        $scope.logout = function () {
            $http
                .post(config.sso.server + '/logout', { session: user.get()['session'] })
                .success(function () {
                    delete $cookies.session;
                    user.logout();
                    $location.path('/');
                });
        };
    });
