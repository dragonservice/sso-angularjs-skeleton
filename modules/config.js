'use strict';

/**
 * Serves the config for the application
 * @example
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
 */

module.exports = function (config, libraries, services) {
    var app = services.app;

    var js = 'var config = ' + JSON.stringify(config.config) + ';';
    app.get(config.route, function (req, res) {
        res.send(js);
    });
};
