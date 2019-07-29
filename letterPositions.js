const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i)
      } else {
        results[letter] = [];
        results[letter].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;
// console.log(letterPositions("hello"));
// console.log(letterPositions("Yo Yo Yo"));
// assertArraysEqual(letterPositions("Yo Yo Yo").Y, [0, 3, 6]);
// assertArraysEqual(letterPositions("hello").e, [1]);