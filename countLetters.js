// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(texts) {
  let result = {};
  for (const text of texts) {
    if (result[text] === undefined) {
      result[text] = 1;
    } else {
      result[text] += 1;
    }
    
  }
  return result;
};


console.log(countLetters('LHL'));
