const _ = require('../index.js');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for two equal arrys of numbers. [1,2,3] === [1,2,3]", () => {
    assert.isTrue(_.eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("returns true for two empty arrays. [] === []", () => {
    assert.isTrue(_.eqArrays([],[]));
  });

  it("returns true for two string arrays. ['h', 'j'] === ['h', 'j']", () => {
    assert.isTrue(_.eqArrays(["h", "j"], ["h", "j"]));
  });
  
  it("returns false for ['0'] === [0]", () => {
    assert.isFalse(_.eqArrays(["0"], [0]));
  });

  it("returns true for equal nested arrays [[2, 3], [4]] === [[2, 3], [4]]", () => {
    assert.isTrue(_.eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

  it("returns false for inequal nested arrays [[2, 3], [4]] === [[2, 3], [4, 5]]", () => {
    assert.isFalse(_.eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  })
});

