'use strict';

// Serves the session for the application

module.exports = 'controllers/session';
var dependencies = [
    'ngCookies',
    require('../services/user')
];

angular.module(module.exports, dependencies)
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/verify/:session', {
                    controller: 'SessionCtrl',
                    templateUrl: 'views/homepage.html'
                });
        }
    ])
    .controller('SessionCtrl', function ($http, $routeParams, $location, $cookies, user) {
        $http
            .post(config.sso.server + '/verify', { session: $routeParams.session })
            .success(function (data) {
                data.session = $routeParams.session;
                $cookies.session = data.session;
                user.login(data);
                $location.path('/');
            });
    });
