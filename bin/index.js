#!/usr/bin/env nodejs

var config = require('../config');
var ovh = require('ovh')({
              endpoint: 'ovh-eu',
              appKey: config.appKey,
              appSecret: config.appSecret,
              consumerKey: config.consumerKey
});
var program = require('commander');
var join = require('path').join;
var path = function(file) { return join('..', 'lib', file) };

program
  .option('--iplblist', 'List available load-balancing ip services')
  .option('--iplbinfo', 'Get the iplb informations [lb]')
  .option('--iplblistallowedbe', 'Get the iplb allowed backend [lb]')
  .option('--iplblistbe', 'Get the backends attached to this [lb]')
  .option('--iplbsetbe', 'Set the [be] backend for this [lb]')
  .option('--iplbunsetbe', 'Unset the [be] backend for this [lb]')
  .option('--lb [lb]', '[lb]')
  .option('--be [be]', '[be]')
  .parse(process.argv);

if (program.iplblist) ipLbList();
if (program.iplbinfo) ipLbInfo(program.lb);
if (program.iplblistallowedbe) ipLbListAllowedBe(program.lb);
if (program.iplblistbe) ipLbListBe(program.lb);
if (program.iplbsetbe) ipLbSetBe(program.lb, program.be);
if (program.iplbunsetbe) ipLbUnsetBe(program.lb, program.be);

if (program.rawArgs.length == 2) {
    program.help()
}

function ipLbList() {
    ovh.request('GET', '/ip/loadBalancing', function (err, me) {
          console.log(err || me);
    });
}

function ipLbInfo(str) {
    ovh.request('GET', '/ip/loadBalancing/' + str, function (err, me) {
          console.log(err || me);
    });
}

function ipLbListAllowedBe(str) {
    ovh.request('GET', '/ip/loadBalancing/' + str + '/allowedBackends', function (err, me) {
          console.log(err || me);
    });
}

function ipLbListBe(str) {
    ovh.request('GET', '/ip/loadBalancing/' + str + '/backend', function (err, me) {
          console.log(err || me);
    });
}

function ipLbSetBe(str1, str2) {
    ovh.request('POST', '/ip/loadBalancing/' + str1 + '/backend', {
        ipBackend: str2,
        probe: 'icmp',
        weight: '10',
        }, function (err, result) {
            console.log(err || result);
        });
}

function ipLbUnsetBe(str1, str2) {
    ovh.request('DELETE', '/ip/loadBalancing/' + str1 + '/backend/' + str2, {
        }, function (err, result) {
            console.log(err || result);
        });
}

