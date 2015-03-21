'use strict';

// Serves the login for the application

module.exports = 'controllers/login';
var dependencies = [];

angular.module(module.exports, dependencies)
    .controller('LoginCtrl', function ($scope) {
        $scope.login = function () {
            location.href = config.sso.client;
        };
    });
