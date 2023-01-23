// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

const longestConsec = (strArr, num) =>{
const arrLen = strArr.length

if (arrLen === 0 || num > arrLen || num <= 0) {
    return ""
}

const numConsecStr = arrLen - num
console.log("arrLen: ", arrLen)
console.log("numConsecStr: ", numConsecStr)
const resultArr = []
let consecStr
    for (let i = 0; i <= numConsecStr; i++) {
        consecStr = ''
        for (let s = i; s < i + num; s++) {
            consecStr += strArr[s]
        }
        resultArr.push(consecStr)
    }
    // return resultArr
// }
// console.log("getConsecStr: ", getConsecStr())
console.log("resultArr: ", resultArr )
const longestStr = resultArr.reduce((final, item) => {
    // console.log("item: ", item.length)
    // console.log("final: ", final.length)
    if (final.length >= item.length) {
        return final
    } else {
        final = item
    }
    return final
})
return longestStr
}
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

// const longestConsec = (strArray, numWord) => {
//     const arrLength = strArray.length
//     if (arrLength === 0 || numWord > arrLength || arrLength <= 0) {
//             return ""
//         }
//     const result = [];
//     let lastConsecStr = numWord > 1 ? arrLength - numWord : arrLength
//     for (let i = 0; i <= lastConsecStr; i++) {
//         let consecWords = ''
//         for (let s = i; s < i + numWord; s++) {
//             consecWords += strArray[s]
//         }
//     result.push(consecWords)
//     }
//     const longestConsecString = result.reduce((finalStr, item) => {
//         item.length > finalStr.length ? finalStr = item : finalStr
//         return finalStr
//     })
//     return longestConsecString
// }



const mySet = new Set()
mySet.add(1)
mySet.add(1)
mySet.add('a')
mySet.add('a')
mySet.add(undefined)
mySet.add(undefined)
mySet.add({prop: true})
mySet.add({prop: true})
console.log('Size: ', mySet.size)

const myArray = new Array(2)
myArray[1] = 1
myArray[3] = 3
console.log('Length: ', myArray.length)
console.log('Elements: ')
for (const element of myArray) {
    console.log('\t', element)
}

function* gen1() {
    console.log(yield 1)
    console.log(yield 2)
    console.log(yield 3)
}
const iterator = gen1()
console.log(iterator.next('a').value)
console.log(iterator.next('b').value)
console.log(iterator.next('c').value)