// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. 

function narcissistic(value) {
    //turn integer into string, then split
    //iterate over array of values, raising each one to value.length
    //reduce to one number, and compare new number to original value
    //if values match, return true, else return false
    let numVal = value.toString().split('')
    let oneNum = numVal.reduce((acc, num) => {
        acc += Math.pow(num, numVal.length)
        return acc
    }, 0)
    return oneNum === value
  }

console.log("narcissistic(153): ", narcissistic(153))
console.log("narcissistic(1938): ", narcissistic(1938))
console.log("narcissistic(371): ", narcissistic(371))
console.log("narcissistic(432): ", narcissistic(432))