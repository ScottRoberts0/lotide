const _ = require('../index');
const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it("should return an object { Jason:1, Karima: undefined, Fang: undefined} === { Jason:1, Karima: undefined, Fang: undefined}", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": false }), { Jason:1 });
  });
});



