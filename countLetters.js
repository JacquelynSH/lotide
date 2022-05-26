const assertEqual = function(actual, expected) {
  // console assert + compare actual and expect to determin if they are the same
  if (actual !== expected) {
    console.log('🐙🐡🐬' + " Assertion Passed!");
  } else {
    console.log('👻👻👻' + " Assertion Failed OH NO");
  }
};

//declare function countLetters
// function should count the letters in a sentence and count how many of each letter is in the sentence
const countLetters = function(sentence) {
// declare empty object.
  let result = {};
  // use split('') to seperate the letters in the sentence.
  let word = sentence.split('');
  // use a for of loop to iterate through seperated letters.
  for (let letters of word) {
    // condition to remove any spaces so they will not be counted.
    if (letters !== ' ') {
      // condition saying if letters is not within the result variable proceed
      if (!result[letters]) {
        // assigining 1 to each letter
        result[letters] = 1;
      } else {
        // adding a number to any multiple letters
        result[letters] += 1;
      }
    }
  }
  return result;
};

console.log(countLetters("OH BOY"));
assertEqual(countLetters("OH BOY"), {O: 2, H: 1, B: 1, Y: 1});
//  output should be -
//  {O: 2, H: 1, B: 1, Y: 1}

