// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
// isSquare (-1) // => false
// isSquare   3  // => false
// isSquare   4  // => true
// isSquare  25  // => true
// isSquare  26  // => false

// var isSquare = function(n){
//     return Number.isInteger(Math.sqrt(n)) ? true : false
//   }

// console.log("isSquare(): ", isSquare(3))
// console.log("isSquare(): ", isSquare(25))


// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

// console.log("getRandomInt(): ", getRandomInt(5))

// const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
const greaterThan = (arr) => arr.every(item => item < 40)
console.log("greaterThan(): ", greaterThan(array1))
// console.log(array1.every(isBelowThreshold));
// expected output: true