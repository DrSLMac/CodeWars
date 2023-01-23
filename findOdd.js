// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// const findOdd = (elements) => {
// console.log("argument elements: ", elements)
//     const elementCount = elements.reduce((countObject, element) => {
//         console.log("element: ", element)
//           if (countObject[element]) {
//             countObject[element] += 1;
//           } else {
//             countObject[element] = 1
//           }
//           return countObject
//         }, {})
// console.log("elementCount: ", elementCount)

//     const elementKeys = Object.keys(elementCount)
//     console.log("elementKeys: ", elementKeys)

//     const remainder = elementKeys.reduce((finalArray, key) => {
//         console.log("key: ", key)

//           if (elementCount[key]%2 > 0) {
//             return key
//           }
//           return finalArray
//         })
//         return remainder
//     }

    // console.log("findOdd([7]): ", findOdd([7])) //7
    // console.log("findOdd([0]): ", findOdd([0])) //0
    // console.log("findOdd([1,1,2]): ", findOdd([1,1,2])) //2
    // console.log("findOdd([0,1,0,1,0]): ", findOdd([0,1,0,1,0])) //0
    // console.log("findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]): ", findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])) //4


const findOdd = (element) => {
    const elementCount = element.reduce((object, num) => {
        object[num] ? object[num] += 1 : object[num] = 1
        return object
    }, {})
    const objKeys = Object.keys(elementCount)
    const findRemainder = objKeys.filter((key) => {
       return elementCount[key] % 2 !== 0 ? key : null
    })
return Number(findRemainder[0])
}


    console.log("findOdd([7]): ", findOdd([7])) //7
    console.log("findOdd([0]): ", findOdd([0])) //0
    console.log("findOdd([1,1,2]): ", findOdd([1,1,2])) //2
    console.log("findOdd([0,1,0,1,0]): ", findOdd([0,1,0,1,0])) //0
    console.log("findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]): ", findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])) //4