const assertArraysEqual = function(actual, expected) {
  // console assert + compare actual and expect to determin if they are the same
  // console.assert(actual !== expected)
  if (actual === expected) {
    console.log('🐙🐡🐬' + " Assertion Passed!");
  } else {
    console.log('👻👻👻' + " Assertion Failed OH NO");
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const letterPositions = function(sentence) {
  let results = {};
  // declare variable and "split" letters apart
  let wordArray = sentence.split('');
  // iterate over letter by letter
  for (let i = 0; i < wordArray.length; i++) {
    // declare letter variable that holds the value of each letter
    const letter = wordArray[i];
    // conditional statement
    if (results[letter]) {
      // push i into results object
      results[letter].push(i);
    } else {
      // add i within an array
      results[letter] = [i];
    }
  }
  return results;
};

const word = "Hello";

const result1 = letterPositions(word);

console.log(result1);
// expected output
// {
//   H: [0],
//   e: [1],
//   l: [2, 3],
//   o: [4]
// }


assertArraysEqual(letterPositions);