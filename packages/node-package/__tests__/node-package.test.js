'use strict';

const nodePackage = require('..');
const assert = require('assert').strict;

assert.strictEqual(nodePackage(), 'Hello from nodePackage');
console.info('nodePackage tests passed');
