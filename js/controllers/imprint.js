"use strict";

// Serves the imprint for the application

module.exports = 'controllers/imprint';
var dependencies = [];

angular.module(module.exports, dependencies)
    .controller('ImprintCtrl', function ($scope, $http) {
        $scope.config = config;
        if (config.server) {
            $http
                .get(config.server + '/')
                .success(function (data) {
                    $scope.server = data;
                });
        }
    });
