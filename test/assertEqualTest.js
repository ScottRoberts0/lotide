const assertEqual = require('../assertEqual');

const result = ["Hello", "Lighthouse", "Labs"];
assertEqual(result.length, 3); // ensure we get back two elements
assertEqual(result[1], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[2], "Labs"); // ensure second element is "Labs"
