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

const eqObjects = function(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) {
    return false;
  } else {


    for (let key of objKeys1) {
      if (!object2[key]) {
        return false;
      }

      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else {

        if (objKeys1[key] !== objKeys2[key]) {

          return false;
        }
      }
    }
  }
  return true;

};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  let bool = eqObjects(actual, expected);
  if (bool) {
    console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`⛔Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const obj1 = {
  a: "1",
  b: "2"
};

const obj2 = {
  b: "2",
  a: "1"
};

assertObjectsEqual(obj1, obj2);
