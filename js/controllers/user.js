"use strict";

// Serves the user for the application

module.exports = 'controllers/user';
var dependencies = [
    require('../services/user')
];

angular.module(module.exports, dependencies)
    .controller('UserCtrl', function ($scope, user) {
        $scope.user = user.get();
        $scope.login = function () {
            location.href = config.sso.client;
        };
    });
