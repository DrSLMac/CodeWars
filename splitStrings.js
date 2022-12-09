// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    const makeEven = str.length % 2 === 0 ? str : str += "_"
    const splitStr = makeEven.split('')
    let finalArr = []
    for (let i =0 ; i < splitStr.length; i+=2 ){
        if (splitStr[i]+1) {
            finalArr.push(splitStr[i] + splitStr[i+1])
        }
    }
   return finalArr
}

console.log("solution('abcdef'): ", solution("abcdef"))
console.log("solution('abcdefg'): ", solution("abcdefg"))

// const solution = (str) => {
//     const makeEven = (str.length % 2 === 0 ? str : str + "_").split('')
//         const breakApart = makeEven.reduce((arrayPairs, char, index) => {
//             const pairs = Math.floor(index/2)
//             if (!arrayPairs[pairs]) {
//                 arrayPairs[pairs] = []
//             }
//             arrayPairs[pairs].push(char)
//             return arrayPairs
//         }, [])
//     return breakApart.map(arr => arr.join(''))
// }

// console.log("solution(): ", solution("abcdefg"))