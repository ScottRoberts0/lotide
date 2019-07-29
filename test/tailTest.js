const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');
const assert = require('chai').assert;

describe('#assertEqual', () => {
  it("returns true for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns true for a one element array ['Labs']", () => {
    assert.deepEqual(tail(["Labs"]), []);
  });
  
});


