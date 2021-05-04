// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};



// assertObjectsEqual(eqObjects(ex, ex2), true)
// Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }
// Example label: { a: 1, b: [ 1, 2 ] }


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false