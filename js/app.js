'use strict';

// AngularJS and translation provider initialization

var dependencies = [
    'ngRoute',
    'pascalprecht.translate',
    'ui.bootstrap.showErrors',

    require('./controllers/homepage.js'),

    require('./controllers/cookie.js'),
    require('./controllers/imprint.js'),
    require('./controllers/login.js'),
    require('./controllers/logout.js'),
    require('./controllers/navigation.js'),
    require('./controllers/session.js'),
    require('./controllers/user.js')
];

angular.module('app', dependencies)
    .config(function ($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: '/languages/',
            suffix: '.json'
        });
        $translateProvider.registerAvailableLanguageKeys(['de', 'en']);
        $translateProvider.determinePreferredLanguage();
    });
