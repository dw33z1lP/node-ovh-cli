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
./bin/index.js -h

  Usage: index [options]

  Options:

    -h, --help           output usage information
    --iplblist           List available load-balancing ip services
    --iplbinfo           Get the iplb informations [lb]
    --iplblistallowedbe  Get the iplb allowed backend [lb]
    --iplblistbe         Get the backends attached to this [lb]
    --iplbsetbe          Set the [be] backend for this [lb]
    --iplbunsetbe        Unset the [be] backend for this [lb]
    --lb [lb]            [lb]
    --be [be]            [be]
```
