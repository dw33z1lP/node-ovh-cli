#!/usr/bin/env nodejs

var program = require('commander');
var join = require('path').join;
var path = function(file) { return join('..', 'lib', file) };

program
  .command('iplb')
  .description('Manage load balancing')
  .option('--iplblist', 'List available load-balancing ip services')
  .option('--iplbinfo [iplb]', 'Get the iplb informations [iplb]')
  .option('--iplblistallowedbe [iplb]', 'Get the iplb allowed backend [iplb]')
  .option('--iplblistbe [iplb]', 'Get the backends attached to this [iplb]')
  .option('--iplbsetbe [iplb] [ipbe]', 'Set the [ipbe] backend for this [iplb]')
  .option('--iplb', '[iplb]')
  .option('--ipbe', '[ipbe]')
  .action(require(path('iplb')))

program.parse(process.argv)

  if (program.rawArgs.length == 2) {
        program.help()
  }
