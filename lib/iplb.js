var config = require('../config');
var ovh = require('ovh')({
          endpoint: 'ovh-eu',
          appKey: config.appKey,
          appSecret: config.appSecret,
          consumerKey: config.consumerKey
});
var join = require('path').join

module.exports = function (options) {
    if (options.iplblist) ipLbList();
    if (options.iplbinfo) ipLbInfo(options.iplb);
    if (options.iplblistallowedbe) ipLbListAllowedBe(options.iplb);
    if (options.iplblistbe) ipLbListBe(options.iplb);
    if (options.iplbsetbe) ipLbSetBe(options.iplb, options.ipbe);
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

