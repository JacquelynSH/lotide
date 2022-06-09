const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('🐙🐡🐬' + " Assertion Passed!");
  } else {
    console.log('👻👻👻' + " Assertion Failed OH NO");
  }
};

module.exports = assertArraysEqual;
