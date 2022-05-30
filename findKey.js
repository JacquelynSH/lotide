const assertEqual = function(actual, expected) {
  // console assert + compare actual and expect to determin if they are the same
  if (actual === expected) {
    console.log('🐙🐡🐬' + " Assertion Passed!");
  } else {
    console.log('👻👻👻' + " Assertion Failed OH NO");
  }
};
// Implement the function findKey which takes in an object and a callback.
// It should scan the object and return the first key for which the callback
//returns a truthy value.
// If no key is found, then it should return undefined.
const findKey = function(object, callback) {
  // declare variables for the key and values to access individually
  const newKey = Object.keys(object);
  const newVal = Object.values(object);
  // loop through the values
  for (let i in newVal) {
    // conditional using the callback function and comparing it to
    // the values.
    if (callback(newVal[i])) {
      // when the value is true, returning the corresponding key
      return newKey[i];
    }
  }
};

const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

console.log(results1);
assertEqual(results1, "noma");

