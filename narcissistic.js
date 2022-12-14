// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

function narcissistic(value) {
  const reduceIt = value.toString().split('').reduce((acc, num) => {
    return acc += Math.pow(num, value.toString().length)
  }, 0)
  return reduceIt === value ? true : false
}



console.log("narcissistic(153): ", narcissistic(153))
console.log("narcissistic(1849): ", narcissistic(1849))
console.log("narcissistic(1652): ", narcissistic(1652))
console.log("narcissistic(371): ", narcissistic(371))




// const narcissistic = (value) => {
  //     let expression = 0
  //     const strNum = value.toString().split('')
  //     strNum.forEach(num => expression += (num**strNum.length))
  //       if (expression === value) {
    //           return true
    //       } else return false
    //     }
    
    
    // const narcissistic = (value) => {
    //   const strArr = value.toString().split('')
    //   let product = 0
    //   for (let i = 0; i < strArr.length; i++ ) {
    //     product += Math.pow(strArr[i], strArr.length)
    //   }
    //   return product === value ? true : false
    // }