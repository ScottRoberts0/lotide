const assertArraysEqual = require('../assertArraysEqual.js');
const assert = require('mocha').assert;

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = [0];

assertArraysEqual(arr1, arr2);
assertArraysEqual(arr1, arr3);

