'use strict';

// Serves the navigation for the application

module.exports = 'controllers/navigation';
var dependencies = [];

angular.module(module.exports, dependencies)
    .controller('NavigationCtrl', function ($scope, $location) {
        $scope.isActive = function (path) {
            return path === $location.path();
        };
    });
