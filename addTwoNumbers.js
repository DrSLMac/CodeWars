
const addTwoNumbers = (l1, l2) => {
    let addedNums = +(l1.join('')) + +(l2.join(''))
    return reverseSum = addedNums.toString().split('').reverse().map(num => parseInt(num))
};

console.log("addTwoNumbers([2,4,3], [5,6,4]): ", addTwoNumbers([2,4,3], [5,6,4]))
console.log("addTwoNumbers([0], [0]): ", addTwoNumbers([0], [0]))
console.log("addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]): ", addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))