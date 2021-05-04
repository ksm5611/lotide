# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ksm5611/lotide`

**Require it:**

`const _ = require('@ksm5611/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array))`: to find first array
* `tail(array)`: to find last two array
* `middle(array)`: to find middle elements of array (if the array length is odd just one element in the middle, if the length is even then, you can find two elements from the middle of it.)
* `assertArraysEqual(array1, array2)`: Asserting that two arrays are equal.
* `assertEqual(actual, expected)`: This function is to help us test our code.
* `assertObjectsEqual(object1, object2)`: This function will help us easily test functions that return objects.
* `countLetters(actual, expected)`: The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(allItems, itemsToCount)`: This function should take in a collection of items and return counts for a specific subset of those items
* `eqArrays(array1, array2)`: This function implementation will require us to further practice problem solving through two arrays.
* `eqObjects(object1, object2)`: This function implementation will require us to further practice problem solving through object key iteration again.
* `findKey(obj, callback)`: It returns an array whose elements are strings corresponding to the enumerable properties found directly upon object
* `findKeyByValue(obj, val)`: It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `letterPositions(sentence)`: This function will return all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: Function that is called for every element of arr. Each time callback executes, the returned value is added to newArray.
* `takeUntil(array, callback)`: Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
* `without(sourceArray, removeItem)`: Creates an array excluding all given values using SameValueZero for equality comparisons.





