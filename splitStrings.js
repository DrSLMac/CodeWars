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