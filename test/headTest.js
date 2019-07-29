const head = require('../head.js')
const assertEqual = require('../assertEqual.js')

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

//Tests a null array
let nullArr = [];
console.log(head(nullArr));

//Tests an array with one element
let oneElementArray = [33];
console.log(head(oneElementArray));