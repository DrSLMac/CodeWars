const missingInteger = (numArr) => {

    //1. sort array
    //2. counter variable will track what positive number we should encounter next
    //3. if counter does not equal the current number, return counter

    //Edge cases:
    //1. no positive numbers, return 1
    //2. no missing numbers in sequence, return next positive number in sequence

    numArr.sort((a,b) => { return a - b })
    console.log({numArr})
// console.log({sortedArr})
let counter = 0
for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > 0) {
        if(numArr[i] != counter) counter++
        if(numArr[i] == counter) continue;
        return counter;
    }
}
counter++;
return counter
}

console.log("missingInteger([1,3,6,4,1,2]): ", missingInteger([1,3,6,4,1,2])) // 5
// console.log("missingInteger([1,2,3]): ", missingInteger([1,2,3]))// 4
// console.log("missingInteger([-1,-3]): ", missingInteger([-1,-3]))