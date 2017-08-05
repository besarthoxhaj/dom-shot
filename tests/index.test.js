'use strict';

const test = require('tape');
const fs = require('fs');
const path = require('path');
const domShot = require('../src');

test('001', t => {

  t.test('001.01 - should throw without params', st => {

    domShot()
    .then(() => {
      st.fail('should never arrive here');
    })
    .catch(err => {
      st.equal(err.message,[
        'DomShot needs an inputFile and outputDir',
        'one of them is missing. Please check your',
        'init config.'
      ].join(' '));
      st.end();
    });
  });

  t.test('001.02 - should create an imgs folder', st => {

    const imgsPath = path.join(__dirname + '/dirTests/imgs');
    const htmlPath = path.join(__dirname + '/dirTests/html');
    const jsonPath = path.join(__dirname + '/dirTests/snap.json');

    domShot({
      outputDir: imgsPath,
      inputDir: htmlPath,
      inputFile: jsonPath,
    })
    .then(() => {

      const hasHtml = fs.existsSync(htmlPath);
      const hasImgs = fs.existsSync(imgsPath);

      st.ok(hasHtml);
      st.ok(hasImgs);
      st.end();
    })
    .catch(err => {
      st.end(err);
    });
  });
});
