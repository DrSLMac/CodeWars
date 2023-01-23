// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

const rowSumOddNumbers = (num) => {
    return num * num * num;
}

console.log("rowSumOddNumbers(1): ", rowSumOddNumbers(1)) //1
console.log("rowSumOddNumbers(2): ", rowSumOddNumbers(2)) //8
console.log("rowSumOddNumbers(3): ", rowSumOddNumbers(3)) //27
console.log("rowSumOddNumbers(4): ", rowSumOddNumbers(4)) //64
console.log("rowSumOddNumbers(5): ", rowSumOddNumbers(5)) //
console.log("rowSumOddNumbers(42): ", rowSumOddNumbers(42)) //74008

const rowSumOfOddNumbers = (num) => {
    let start = num * (num - 1) + 1;
    let sum = 0;

    for (let i = 0; i < num; i++) {
        sum += start + (i * 2);
    }
    return sum
}

console.log("rowSumOfOddNumbers(1): ", rowSumOfOddNumbers(1)) //1
console.log("rowSumOfOddNumbers(2): ", rowSumOfOddNumbers(2)) //8
console.log("rowSumOfOddNumbers(3): ", rowSumOfOddNumbers(3)) //27
console.log("rowSumOfOddNumbers(4): ", rowSumOfOddNumbers(4)) //64
console.log("rowSumOfOddNumbers(5): ", rowSumOfOddNumbers(5)) //
console.log("rowSumOfOddNumbers(42): ", rowSumOfOddNumbers(42)) //74008