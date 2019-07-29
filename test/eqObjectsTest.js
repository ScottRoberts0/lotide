const _ = require('../index');
const assert = require('chai').assert;

describe("#eqObjectss", () => {
  it("returns true for two equal objects. { a: '1', b: '2' } === { a: '1', b: '2' }", () => {
    assert.isTrue(_.eqObjects({ a: '1', b: '2' }, { a: '1', b: '2' }));
  });

  it("returns false for two not equal objects. { a: '1', b: '2' } !== { a: '1', b: '2', c: '3' }", () => {
    assert.isFalse(_.eqObjects({ a: '1', b: '2' }, { a: '1', b: '2', c: '3' }));
  });

  it("returns true for two equal nested objects. { a: { z: 1 }, b: 2 } === { a: { z: 1 }, b: 2 }", () => {
    assert.isTrue(_.eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });

  it("returns false for two not equal nested objects. { a: { y: 0, z: 1 }, b: 2 } !== { a: { z: 1 }, b: 2 }", () => {
    assert.isFalse(_.eqObjects({ a: '1', b: '2' }, { a: '1', b: '2', c: '3' }));
  });

});

