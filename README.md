# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @jackiesh/lotide`

**Require it:**

`const _ = require('@jackiesh/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: Returns the element of an array at index 1.
* `function2(tail)`: Returns all elements in an array, except the 1st index of an array.
* `function3(middle)`: Returns the middle element of an array if an odd number. Returns the two middle most elements if array is an equal number.