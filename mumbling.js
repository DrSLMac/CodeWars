const accum = (s) => {
    const splitStr = s.toLowerCase().split('')
 
    //map over the array of elements, splitStr.map(element)
    //capitalize all element, element,toUpperCase()
    //concatenate with element.repeat(index)
    //use .join('-') to add the dash between elements

    const finalStr = splitStr.map((element, idx) => {
        return element.toUpperCase() + element.repeat(idx)
    }).join('-')
    return finalStr
}

console.log("accum('ZpglnRxqenU'): ", accum('ZpglnRxqenU'))









// const accum = (s) => {
// 	// your code
//     let result = ''
//     const splitStr = s.toLowerCase().split('');
    
//     for (let i = 0; i < splitStr.length; i++) {
//         result += splitStr[i].toUpperCase()
//         for (let j = i; j > 0; j--) {
//             result += splitStr[i]
//         }
//         if (i < splitStr.length - 1) {
//             result += "-"
//         }
//     }
//     return result
// }

// console.log("accum('ZpglnRxqenU'): ", accum('ZpglnRxqenU'))

// const accums = s => s.toLowerCase().split('').map((element, index) => 
//         element.toUpperCase() + element.repeat(index)).join('-')
    

// console.log("accums('ZpglnRxqenU'): ", accums('ZpglnRxqenU'))