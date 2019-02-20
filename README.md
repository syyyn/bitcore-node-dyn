Bitcore Node Dynamic
============

A BitCore full node for building applications and services with Node.js. A node is extensible and can be configured to run additional services. At the minimum a node has an interface to ~~[Bitcoin Core with additional indexing](https://github.com/bitpay/bitcoin/tree/0.12.1-bitcore)~~ for more advanced address queries. Additional services can be enabled to make a node more useful such as exposing new APIs, running a block explorer and wallet service.

## Install

```bash
git clone https://github.com/DYNinsight/bitcore-node-DYN.git
cd bitcore-node-DYN
npm install
bitcore-node start
```

## Prerequisites

- GNU/Linux x86_32/x86_64, or OSX 64bit *(for bitcored distributed binaries)*
- Node.js v0.10, v0.12 or v4
- ZeroMQ *(libzmq3-dev for Ubuntu/Debian or zeromq on OSX)*
- ~30GB of disk storage
- ~2GB of RAM

## Configuration

Bitcore includes a Command Line Interface (CLI) for managing, configuring and interfacing with your Bitcore Node.

```bash
bitcore-node create -d <bitcoin-data-dir> mynode
cd mynode
bitcore-node install <service>
bitcore-node install https://github.com/yourname/helloworld
```

This will create a directory with configuration files for your node and install the necessary dependencies. For more information about (and developing) services, please see the [Service Documentation](docs/services.md).

## Add-on Services

There are several add-on services available to extend the functionality of Bitcore:

- [Insight API](https://github.com/DYNinsight/insight-api-DYN)
- [Insight UI](https://github.com/DYNinsight/insight-ui-DYN)

## Documentation

- [Upgrade Notes](docs/upgrade.md)
- [Services](docs/services.md)
  - [Bitcoind](docs/services/bitcoind.md) - Interface to Bitcoin Core
  - [Web](docs/services/web.md) - Creates an express application over which services can expose their web/API content
- [Development Environment](docs/development.md) - Guide for setting up a development environment
- [Node](docs/node.md) - Details on the node constructor
- [Bus](docs/bus.md) - Overview of the event bus constructor
- [Release Process](docs/release.md) - Information about verifying a release and the release process.


## License

Code released under [the MIT license](https://github.com/bitpay/bitcore-node/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc.

- bitcoin: Copyright (c) 2009-2015 Bitcoin Core Developers (MIT License)
