const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  let bool = eqArrays(array1, array2);
  if (bool) {
    console.log(`✅Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`⛔Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const middle = function(array) {
  let mid = [];
  if (array.length < 1 || array.length % 2 === 0) {
    return mid;
  } else {
    mid.push(array[Math.floor(array.length / 2)]);
    return mid;
  }
};

assertArraysEqual([], []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [4]);