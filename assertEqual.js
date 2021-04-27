// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // if (actual === expected) {
  //   console.log('Assertion Passed: ' + [actual] + ' === ' + [expected]);
  // } else if (actual !== expected) {
  //   console.log('Assertion Failed: ' + [actual] + ' !== ' + [expected]);
  // }
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else if (actual !== expected) {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual("apple", "apple");
assertEqual("banana", "apple");
assertEqual(9000, 9000);
assertEqual(0, 123);
