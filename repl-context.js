//#!/usr/local/bin/node

const repl = require('repl');

let context = repl.start({
	prompt: '>> ',
	replMode: repl.REPL_MODE_STRICT,
	ignoreUndefined: true
}).context;

// context.request = require('request');
context.lodash = require('lodash');
// context.q = require('q');
