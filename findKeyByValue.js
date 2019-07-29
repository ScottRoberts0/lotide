const assertEqual = require('./assertEqual');


const findKeyByValue = function(obj, value){
  let returnKey = undefined;

  for(const key in obj){
    if (obj.hasOwnProperty(key)) {
      if(obj[key] === value){
        returnKey = key;
      }  
    }
  }
  return returnKey;
};

module.exports = findKeyByValue;



// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };




// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);