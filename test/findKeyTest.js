const _ = require('../index');
const assert = require('chai').assert;

describe("#findKey", () => {
  it("returns true for two equal objects. findkey(obj) === 'noma'", () => {
    const obj = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    };
    
    assert.equal(_.findKey(obj, x => x.stars === 2), "noma");
  });

  it("returns true for two equal objects. findkey(obj) === undefined", () => {
    const obj = {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    };
    
    assert.equal(_.findKey(obj, x => x.stars === 4), undefined);
  });
});

