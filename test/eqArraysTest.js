const eqArrays = require('../eqArrays.js');
const assertEqual = require('../assertEqual.js');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays(["h", "j"], ["h", "j"]), true);
assertEqual(eqArrays(["0"], [0]), false);


assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false