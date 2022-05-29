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




let x = {};
x.key = "key";
let key2 = "hello";
x[key2] = key2;
console.log(x);