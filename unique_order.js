// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    const numStr = () => typeof iterable !== "object" ? iterable.split('') : iterable
    const groupThem = numStr().reduce((finalArr, item, idx) => {
        if (finalArr.length === 0) {
            finalArr.push(item)
        }
        if (finalArr[finalArr.length - 1] !== item) {
            finalArr.push(item)
        } 
        return finalArr
    }, [])
    return groupThem
  }

// console.log("uniqueInOrder(): ", uniqueInOrder('ABBCcAD'))
console.log("uniqueInOrder(): ", uniqueInOrder([1,1,1,1,2,2,2,1,1,1,3,3,3,3,2,2,2]))

var uniqueInOrderOther =function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}