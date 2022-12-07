const pigIt = (str) => {
    const splitStr = str.split(' ').map((word) => {
        if (word !== "." && word !== "!" && word !== "," && word !== "?") {
            let chars = word.split('')
            return (word + chars[0] + "ay").slice(1)
        } else {
            return word
        }
    })
return splitStr.join(' ')
}

console.log("1. pigIt('Pig latin is cool'): ", pigIt('Pig latin is cool'))
console.log("2. pigIt('Hello world !'): ", pigIt('Hello world !'))




// const firstpigIt = (str) => {
    //starting with a string of words
    //for each word, remove the first letter, add it to the end of the word
    //then add ay to the end of that.

    //break string of words into array of strings
    //break array of strings into arrays of elements
    //for each array of elements, remove first letter(index[0]), and add that same letter to the end of the array
    //then push "ay" to the array
    //.join() each array to create a string of words again

    // const breakStr = str.split('')
    // console.log("breakStr: ", breakStr)
    // .map((element) => {
    //     let elementArray = element.split('')
    //     // console.log("elementArray: ", elementArray)
    //     return elementArray
    // })
//     const arrArrays = breakStr.reduce((finalArray, array) => {
//       array.push(array.shift(), 'ay')
//       finalArray.push(array)
//       return finalArray
//     }, [])
//     console.log("arrArrays: ", arrArrays)
//       let finalStr = ''
//       arrArrays.forEach((array) => {
//       let word = array.join('')
//       finalStr += ' ' + `${word}`
//     })
//   return finalStr
//   }

//   console.log("firstpigIt(): ", firstpigIt('Pig latin is cool'))
//   console.log("firstpigIt(): ", firstpigIt('Hello world !'))

// const pigIt = (str) => {
//     let newArr = []
//     strArr = str.split(' ')
//     console.log("strArr: ", strArr)

//     strArr.forEach(char => {
//         // console.log('char: ', char)
//         let wordArr = char.split('')
//         console.log("wordArr: ", wordArr)
//         wordArr.push(wordArr[0], 'ay'), wordArr.shift()
//         if (char === "!" || char === "?" || char === ".") {
//             newArr.push(char)
//         } else {
//             newArr.push(wordArr.join(''))
//         }
//         console.log("wordArr: ", wordArr)
//     })
//     return newArr.join(' ')
// }

// console.log("pigIt('Pig latin is cool'): ", pigIt('Pig latin is cool'))
// console.log("pigIt('Hello world !'): ", pigIt('Hello world !'))