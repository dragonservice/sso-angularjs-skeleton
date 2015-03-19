"use strict";

// Initialize New Relic Node.js agent

if (process.env.NEW_RELIC_APP_NAME && process.env.NEW_RELIC_LICENSE_KEY && process.env.NEW_RELIC_LEVEL) {
    require('newrelic');
}

// Load the libraries and modules

var config = {
    directory: __dirname + '/modules/',
    modules: {
        npm: [
            [require('dragonnodejs-express'), {
                app: {
                    port: process.env.PORT
                },
                auth: {
                    disabled: process.env.AUTH_DISABLED,
                    users: process.env.AUTH_USERS,
                    user: process.env.AUTH_USER,
                    password: process.env.AUTH_PASSWORD,
                    realm: process.env.AUTH_REALM
                },
                header: {
                    'X-UA-Compatible': 'IE=edge,chrome=1',
                    'X-Frame-Options': 'DENY',
                    'X-XSS-Protection': '1; mode=block',
                    'X-Powered-By': null
                },
                static: {
                    directory: __dirname + '/web/'
                }
            }]
        ],
        directory: {
            config: {
                route: '/js/config.js',
                config: function () {
                    var pkg = require(__dirname + '/package.json');
                    return {
                        name: pkg.name,
                        version: pkg.version,
                        homepage: pkg.homepage,
                        server: process.env.SERVER,
                        sso: {
                            client: process.env.SSO_CLIENT,
                            server: process.env.SSO_SERVER
                        }
                    };
                }()
            }
        }
    }
};
require('dragonnodejs')(config);
