// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)


const persistence = (num) => {
    const strNum = num.toString().split('')
    const multStr = strNum.reduce((count, num) => {
        //create a helper function to perform multiplication of all elements in array
        const multNums = () => {
            let sumMults = 1;
            for (var i = 0; i < strNum.length; i++) {
                sumMults = sumMults * strNum[i]
            }
            return sumMults.toString().split('')
        }
        if (multNums().length === 1) {
            return 0;
        } else {
        if (multNums().length > 1) 
            count ++
            multNums()
        }
        return count
    }, 1)
    return multStr
}

console.log("persistence(39): ", persistence(39)) // 3
console.log("persistence(4): ", persistence(4)) // 0
console.log("persistence(25): ", persistence(25)) // 2
console.log("persistence(999): ", persistence(999)) // 4