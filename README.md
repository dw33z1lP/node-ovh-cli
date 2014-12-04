[![Build Status](https://travis-ci.org/dw33z1lP/node-ovh-cli.png)] (https://travis-ci.org/dw33z1lP/node-ovh-cli)

# node-ovh-cli

A NodeJS command-line tool to manage your OVH services. It builds on top of [node-ovh](https://github.com/ovh/node-ovh).

## Install

```
git clone https://github.com/dw33z1lP/node-ovh-cli.git && cd node-ovh-cli && npm install
```

or

```
npm install node-ovh-cli
```

Then you have to set `config.js` with your own values, set on [OVH API documentation] (https://eu.api.ovh.com/g934.first_step_with_api) how to generate credentials.

```
./node-ovh-cli.js  -h

  Usage: iplb [options]

  Options:

    -h, --help                  output usage information
    --iplblist                  List available load-balancing ip services
    --iplbinfo [iplb]           Get the iplb informations [iplb]
    --iplblistallowedbe [iplb]  Get the iplb allowed backend [iplb]
    --iplblistbe [iplb]         Get the backends attached to this [iplb]
    --iplbsetbe [iplb] [ipbe]   Set the [ipbe] backend for this [iplb]
    --iplb                      [iplb]
    --ipbe                      [ipbe]
```
