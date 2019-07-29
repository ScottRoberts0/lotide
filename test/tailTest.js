const _ = require('../index');
const assert = require('chai').assert;

describe('#assertEqual', () => {
  it("returns true for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(_.tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns true for a one element array ['Labs']", () => {
    assert.deepEqual(_.tail(["Labs"]), []);
  });
  
});


