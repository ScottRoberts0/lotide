const eqArrays = require('./eqArrays');
const assertArraysEqual =  require('./assertArraysEqual');

const map = function(array, callback){
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

// const words2 = [];
// const results2 = map(words2, word => word[0]);
// assertArraysEqual(results2, []);

// const words3 = ["3"];
// const results3 = map(words3, word => word[0]);
// assertArraysEqual(results3, ["3"]);