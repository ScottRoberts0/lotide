const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) {
    return false;
  } else {
  
    for (let key of objKeys1) {
      if(!object2[key]){
        return false;
      }
      
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      } else {
        if (typeof object1[key] === "object" && typeof object2[key] === "object"){
          return eqObjects(object1[key], object2[key]);
        }
      
        if (object1[key] !== object2[key]) {

          return false;
        }
      }
    }
  }
  return true;

};

module.exports = eqObjects;
