const findKey = function(obj, callback) {
  const properties = Object.keys(obj);

  for (let key of properties) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;