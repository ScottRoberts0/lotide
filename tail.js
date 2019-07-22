const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newArray = [];

  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;

};

// TEST CODE

//Check returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

//Check Original Array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

//Empty and One element array test
const oneElement = ["HI"];
const emptyArray = [];
console.log(tail(oneElement));
console.log(tail(emptyArray));