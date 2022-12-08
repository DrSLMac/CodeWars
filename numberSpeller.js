// Create a function that accepts an array of single digit integers.
// The function should return a string containing the integers in word format.
// Even indexed numbers should be all capitalized and odd indexed numbers should be all lower-cased. 
// The string should terminate with a period.

// For instance:
// number_speller( [4,7,3] ) should return “FOUR seven THREE.”
// number_speller( [6,5,5,7,2,0,7] ) should return “SIX five FIVE seven TWO zero SEVEN.”
// number_speller( [0] ) should return “ZERO.”
// number_speller( [] ) should return an empty string.

const arrayOfNums = [6,5,5,7,2,0,7]

const numberSpeller = (numArray) => {
//start with an array of integers, 0-9
//replace each integer with is word value
//final output is a string of word
//create an array of the strings for each number
const numWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
let finalStr = ''
let toggle = true
//iterate over the number array, and replace the integer with the string
numArray.forEach((num) => {
    if(toggle) {
        finalStr += ' ' + numWords[num].toUpperCase()
    } else {
        finalStr += ' ' + numWords[num]
    }
    toggle = !toggle
})
return finalStr
}

console.log("1. numberSpeller(arrayOfNums): ", numberSpeller(arrayOfNums))
console.log("2. numberSpeller([]): ", numberSpeller([]))



const othernumberSpeller = (numArr) => {
    const numWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let finalString = ''
    let toggle = true;

    numArr.forEach((item) => {

        if (toggle) {
            // console.log("does it toggle?: ", toggle)
            finalString += ' ' + numWords[item].toUpperCase()
        } else {
            // console.log("does it toggle?: ", toggle)
            finalString += ' ' + numWords[item]
        }
        toggle = !toggle
   })
   if (finalString.length > 0) {
       return `${finalString}.`
   } else {
    return finalString
   }
}

console.log("1. numberSpeller([4,7,3]): ", numberSpeller([4,7,3]))
// console.log("2. numberSpeller([6,5,5,7,2,0,7]): ", numberSpeller([6,5,5,7,2,0,7]))
// console.log("3. numberSpeller([4,7,3]): ", numberSpeller([0]))
// console.log("4. numberSpeller([4,7,3]): ", numberSpeller([]))

// 1. numberSpeller([4,7,3]):   FOUR seven THREE.
// 2. numberSpeller([6,5,5,7,2,0,7]):   SIX five FIVE seven TWO zero SEVEN.
// 3. numberSpeller([4,7,3]):   ZERO.
// 4. numberSpeller([4,7,3]):  