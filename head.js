const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function (array) {
  if (array[0] === null) {
    return undefined;
  } else {
    return array[0];
  }
};

var nullArr = [];
// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log(head(nullArr));