# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @scottroberts0/lotide`

**Require it:**

`const _ = require('@scottroberts0/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of an array
* `tail(array)`: Returns an array after the first element in an array
* `middle(array)`: Returns a new array with the middle element/s.
* `assertArraysEqual(array1, array2)`: Logs whether or not two Arrays are equal
* `assertEqual(input1, input2)`: Asserts whether two inputs are equal
* `assertObjectsEqual(object1, object2)`: Asserts whether two Objects are equal
* `countLetters(string)`: Counts the letters in a string, returns an object with keys being the letters themselves and their value is a count of that letter in the string
* `countOnly(array, object)`: Takes in an array of strings to be iterated through and an object with keys with booleans. If the key's value is true the function counts the number of times it appears in the array. A new object with the count of each occurence is returned.
* `eqArrays(array1, array2)`: Returns a boolean - based on whether two arrays are equal
* `eqObjects(object1, object2)`: Returns a boolean - based on whether two objects are equal
* `findKey(object, callback)`: Takes in an object and a callback, returns the key of the object where the callback function returns true.
* `findKeyByValue(object, value)`: Returns a key from an object based on a given value
* `flatten(array)`: Takes in a flattened array and returns a flatten version of that array
* `letterPositions(string)`: Returns an object where the keys are the letters in the given string and the value of those keys is the indexes of the letters
* `map(array, callback)`: Returns an new array using a callback function to map new values
* `takeUntil(array, callback)`: Returns a new array, which is the original with elements taken up until the callback function becomes true.
* `without(array1, array2)`: Returns a new array, without the elements in the second array.



