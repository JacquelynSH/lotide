const assertEqual = function(actual, expected) {
  // console assert + compare actual and expect to determin if they are the same
  if (actual === expected) {
    console.log('🐙🐡🐬' + " Assertion Passed!");
  } else {
    console.log('👻👻👻' + " Assertion Failed OH NO");
  }
};

// Implement the function findKeyByValue which takes in an object and a value.
// It should scan the object and return the first key which contains the given
// value. If no key with that given value is found, then it should return undefined.
const findKeyByValue = function(obj, value) {
  // seperate the keys and values from object to accesss seperately
  const newKey = Object.keys(obj);
  const newVal = Object.values(obj);
  //iterate through values
  for (let i in newVal) {
    // compare values with "value"
    if (newVal[i] === value) {
      // and return the corresponding key
      return newKey[i];
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const worldsBestDog =  {
  smallDog: "Pollo",
  medDog: "Ruby",
  fatDog: "Asha",
  meanDog: "fin"
};
assertEqual(findKeyByValue(worldsBestDog, "Pollo"), 'smallDog');
assertEqual(findKeyByValue(worldsBestDog, "Momo"), undefined);