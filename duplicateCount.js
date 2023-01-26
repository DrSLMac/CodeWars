// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(duplicateCount(""), 0);
//     assert.strictEqual(duplicateCount("abcde"), 0);
//     assert.strictEqual(duplicateCount("aabbcde"), 2);
//     assert.strictEqual(duplicateCount("aabBcde"), 2,"should ignore case");
//     assert.strictEqual(duplicateCount("Indivisibility"), 1)
//     assert.strictEqual(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
//   });
// });

//01/26/23
const duplicateCount = (text) => {
  let letterObj = text.toLowerCase().split('').reduce((obj, alphaNum) => {
    obj[alphaNum] ? obj[alphaNum] += 1 : obj[alphaNum] = 1;
    return obj
  }, {})
  return Object.keys(letterObj).filter(key => letterObj[key] > 1).length
}

console.log("duplicateCount(''): ", duplicateCount('')) //0
console.log("duplicateCount('abcde'): ", duplicateCount('abcde')) //0
console.log("duplicateCount('aabbcde'): ", duplicateCount('aabbcde')) //2
console.log("duplicateCount('aabBcde'): ", duplicateCount('aabBcde')) //2
console.log("duplicateCount('Indivisibility'): ", duplicateCount('Indivisibility')) //1
console.log("duplicateCount('Indivisibilities'): ", duplicateCount('Indivisibilities')) //2














// const duplicateCount = (text) => {
//   //start with string of alphanumeric characters
//   //case-insensitive - may need to make all toUpperCase() or toLowerCase()
//   //break the string into an array of characters

//   const charArray = text.toLowerCase().split('')
//   let obj = {}
//   let count = 0
//   charArray.forEach((char) => {
//     if (!obj[char]) {
//       obj[char] = 1
//     } else {
//       obj[char]++
//     }
//   })
//   const keys = Object.keys(obj)
//   keys.filter((key)=> {
//     if(obj[key] > 1) {
//       count++
//     }
//    })
//    return count
// }

// // console.log("1. duplicateCount('abcde'): ", duplicateCount("abcde"))
// // console.log("2. duplicateCount('aabbcde'): ", duplicateCount("aabbcde"))
// // console.log("3. duplicateCount('aabBcde'): ", duplicateCount("aabBcde"))
// // console.log("4. duplicateCount('indivisibility'): ", duplicateCount("indivisibility"))
// // console.log("5. duplicateCount('Indivisibilities'): ", duplicateCount("Indivisibilities"))
// // console.log("6. duplicateCount('aA11'): ", duplicateCount("aA11"))
// // console.log("7. duplicateCount('ABBA'): ", duplicateCount("ABBA"))
// // console.log((" --- "))
// // 1. duplicateCount('abcde'):  0
// // 2. duplicateCount('aabbcde'):  2
// // 3. duplicateCount('aabBcde'):  2
// // 4. duplicateCount('indivisibility'):  1
// // 5. duplicateCount('Indivisibilities'):  2
// // 6. duplicateCount('aA11'):  2
// // 7. duplicateCount('ABBA'):  2


// function duplicateThirdCount(text){
//  //start with a string of alphanumberic characters
//  //make all toLowerCase() to avoid case sensitivity issues
//  //split the string into an array of characters, then sort
//  //compare index values...
//  //indexOf() will tell me the first index where the value appears
//  //lastIndexOf() will tell me the last index position where the value appears
//  //if a number is repeated, the actual index position in the array many not equal either the indexOf() or the lastIndexOf()
//  //find duplicate if index position !== indexOf() but DOES === lastIndexOf()
//  //[ a, b, a, c, a]
//  //index positions of a are 0, 2, and 4
//  //indexOf(a) === 0
//  //lastIndexOf(a) === 4
 
//  //conversely:
//   //index position of b is 1
//   //indexOf(b) === 1
//   //lastIndexOf(b) === 1

// //looking for value whose index DOES NOT equal indexOf(), but DOES equal lastIndexOf()  
//  const charArray = text.toLowerCase().split('').sort()
//                         .filter((char, index, arr) => {
//                           return index !== arr.indexOf(char) && index === arr.lastIndexOf(char)
//                         })
//                         //final output is the number of repeat characters
//  return charArray.length
//   }
// console.log("duplicateThirdCount('AteIoUit'): ", duplicateThirdCount("AioIoUit"))