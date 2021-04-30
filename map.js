const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  // temporary code:
  //  console.log('array: ', array);
  //  console.log('callback: ', callback);

  const results = [];

  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
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

assertArraysEqual([ 'g', 'c', 't', 'm', 't' ], results1);