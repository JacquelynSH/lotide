const assertEqual = function(actual, expected) {
  // console assert + compare actual and expect to determin if they are the same
  // console.assert(actual !== expected)
  if (actual === expected) {
    console.log('🐙🐡🐬' + " Assertion Passed!");
  } else {
    console.log('👻👻👻' + " Assertion Failed OH NO");
  }
};
// function should report back how many instances of of each string were found in the allItems array of strings
// countOnly will be given an array and an object.
// countOnly should return an object containing counts of everything that the input object listed
// ex. {"Jason": 1, "Fang": 2}
// only values which contain a truthy value should be counted

const countOnly = function(allItems, itemsToCount) {
  //declare empty object
  let result = {};
  // looping through allItems array
  for (let items of allItems) {
  //conditional statement, if itemsToCount[items] is true execute next line
    if (itemsToCount[items]) {
    // adds 1 to fang
      if (result[items]) {
        result[items] += 1;
      } else {
      // adds 1 to each item that is true and present in both firstNames and itemsToCount
        result[items] = 1;
      }
    }
  }
  // returning results within an object
  return result;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

