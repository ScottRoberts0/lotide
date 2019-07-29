const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('#middle', () => {
  it('returns true for empty array [] === []', () => {
    expect(middle([])).to.eql([]);
  });

  it('returns true for an array with one element[1] === []', () => {
    expect(middle([1])).to.eql([]);
  });

  it('returns true for an array with two elements[1,2] === []', () => {
    expect(middle([1,2])).to.eql([]);
  });

  it('returns true for an odd length array, [1,2,3] === [2]', () => {
    expect(middle([1,2,3])).to.eql([2]);
  });

  it('returns true for an even length array [1,2,3,4,5,6] === []', () => {
    expect(middle([1, 2, 3, 4, 5, 6])).to.eql([3,4]);
  });
});

