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

module.exports = countLetters;