const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

const without = function(sourceArray, removeItem) {
  let copied = [];
  for (let i = 0; i < sourceArray.length; i++) {
    copied.push(sourceArray[i]);
  }
  for (let i = 0; i < copied.length; i++) {
    for (let j = 0; j < removeItem.length; j++) {
      if (copied[i] === removeItem[j]) {
        copied.splice(i, 1);
      }
    }
  }
  return copied;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
