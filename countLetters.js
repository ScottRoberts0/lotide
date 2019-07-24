const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string){
  const newObj = {};

  for(const letter of string){
    
    if(letter !== " "){
      if(newObj[letter]){
        newObj[letter] += 1;
      }else{
        newObj[letter] = 1;
      }
    }
  }
  return newObj;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("Hey hey"));