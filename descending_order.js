// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(nums){
    const sorter = (a,b) => {
        return b - a
    }
    const sortNums = nums.toString().split('').sort(sorter).join('')
    const makeNum = parseInt(sortNums)
    return makeNum
  }

  console.log("descendingOrder(): ", descendingOrder(42145) )

  function descendingOrderOther(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }