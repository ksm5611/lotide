// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const head = function(array) {
  if (array) {
    return array[0];
  } else {
    return undefined;
  }
};

console.log(head([5,6,7]), 5);
console.log(head(["Hello", "Lighthouse", "Labs"]), "Hello");


module.exports = head;