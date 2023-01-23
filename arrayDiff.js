const arrayDiff = (a,b) => {
    let result = [];
    a.forEach(num => !b.includes(num) ? result.push(num) : result)
    return result
}

console.log("arrayDiff([1,2], [1]): ", arrayDiff([1,2], [1])) //[2]
console.log("arrayDiff([1,2,2], [1]): ", arrayDiff([1,2,2], [1])) // [2,2]
console.log("arrayDiff([1,2,2], [2]): ", arrayDiff([1,2,2], [2])) // [1]
console.log("arrayDiff([1,2,2], []): ", arrayDiff([1,2,2], [])) // [1,2,2]
console.log("arrayDiff([], [1,2]): ", arrayDiff([], [1,2])) // []
// console.log("arrayDiff([1,2,3], [1,2]): ", arrayDiff([1,2,3], [1,2])) // [3]