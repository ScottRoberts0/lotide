const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');
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