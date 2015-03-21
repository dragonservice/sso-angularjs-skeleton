'use strict';

// Serves the homepage for the application

module.exports = 'controllers/homepage';
var dependencies = [];

angular.module(module.exports, dependencies)
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/homepage.html'
                });
        }
    ]);
