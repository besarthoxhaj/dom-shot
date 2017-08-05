'use strict';

/**
 * Setup tests
 * - create folder where `snap` will save output
 */

const test = require('tape');
const fs = require('fs-extra');

module.exports = {
  setUp: () => {
    test('BOOTSTRAP - SETUP', t => {
      try {
        fs.removeSync(`${__dirname}/dirTests/imgs`);
        t.end();
      } catch(err) {
        t.end(err);
      }
    });
  },
  tearDown: () => {
    test('BOOTSTRAP - TEAR DOWN', t => {
      try {
        // fs.removeSync(`${__dirname}/dirTests/imgs`);
        t.end();
      } catch(err) {
        t.end(err);
      }
    });
  },
};
