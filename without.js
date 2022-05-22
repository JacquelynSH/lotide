const assertArraysEqual = function(actual, expected) {
  // compare actual and expect to determin if they are the same
  // if arrays are both empty and equal to eachother
  // if they have the same length and not equal to 0
  if (actual.length === 0 && expected.length === 0) {
    console.log('🐙🐡🐬' + " Assertion Passed!");
    return true;
  } if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log('👻👻👻' + " Assertion Failed OH NO");
        return false;
      }
    }
    console.log('🐙🐡🐬' + " Assertion Passed!");
    return true;
  } else {
    console.log('👻👻👻' + " Assertion Failed OH NO");
    return false;
  }
};


const without = function(source, itemsToRemove) {
  // compare source, itemsToRemove.
  // if itemstToRemove matches an element in source, it should be removed
  // return what is left in source.
  // make copy of array [...source] same as source.slice()
  let newArray = [...source];
  for (let i = 0; i < itemsToRemove.length; i++) {
    // condition - for every element removing from items to remove
    newArray = newArray.filter((element) => itemsToRemove[i] !== element);
  }
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1, 2, 3]), true);
