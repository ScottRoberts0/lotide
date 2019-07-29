const _ = require('../index');
const assert = require('chai').assert;

describe('#countLetters', () => {
  it("should return an object countLetter('hi') === { h:1, i: 1}", () => {
    assert.deepEqual(_.countLetters("hi"), { h:1, i: 1});
  });
});

