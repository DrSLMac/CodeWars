// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

function comp(arr1, arr2){
    if(arr1 === null || arr2 === null) {
        return false
    }
    if (arr1.length === 0 && arr2.length === 0) {
        return true
    } 
    if (arr1 && arr2) {
        let sortedSecond = arr2.sort((a,b) => a-b).toString().split(',').map(num => Math.sqrt(parseInt(num)))
        return JSON.stringify(arr1.sort((a,b) => a-b)) === JSON.stringify(sortedSecond)
    }
    else return false
    }

console.log("comp(a1, a2): ", comp(a1, a2))
console.log("comp([], []): ", comp([], []))
console.log("comp([], null): ", comp([], null))