'use strict';

// Service for the user after verify

module.exports = 'services/user';
var dependencies = [];

angular.module(module.exports, dependencies)
    .factory('user', function () {
        var user = {};
        return {
            login: function (data) {
                user.session = data.session;
                user._id = data._id;
                user.email = data.email;
            },
            get: function () {
                return user;
            },
            logout: function () {
                delete user.session;
                delete user._id;
                delete user.email;
            }
        };
    });
