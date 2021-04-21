'use strict';

(function() {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();

module.exports = require('./lib');
module.exports.Node = require('./lib/node');
module.exports.Service = require('./lib/service');
module.exports.errors = require('./lib/errors');

module.exports.services = {};
module.exports.services.Bitcoin = require('./lib/services/bitcoind');
module.exports.services.Web = require('./lib/services/web');

module.exports.scaffold = {};
module.exports.scaffold.create = require('./lib/scaffold/create');
module.exports.scaffold.add = require('./lib/scaffold/add');
module.exports.scaffold.remove = require('./lib/scaffold/remove');
module.exports.scaffold.start = require('./lib/scaffold/start');
module.exports.scaffold.callMethod = require('./lib/scaffold/call-method');
module.exports.scaffold.findConfig = require('./lib/scaffold/find-config');
module.exports.scaffold.defaultConfig = require('./lib/scaffold/default-config');

module.exports.cli = {};
module.exports.cli.main = require('./lib/cli/main');
module.exports.cli.daemon = require('./lib/cli/daemon');
module.exports.cli.bitcore = require('./lib/cli/bitcore');
module.exports.cli.bitcored = require('./lib/cli/bitcored');

module.exports.lib = require('bitcore-lib-dyn');
