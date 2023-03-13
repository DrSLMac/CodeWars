// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// describe( "maxSequence", function(){
//     it("should work on an empty array",function(){
//       assert.strictEqual(maxSequence([]), 0);
//     });
//     it("should work on the example",function(){
//       assert.strictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
//     });
//   });


var maxSequence = function(arr){
    let maxSum = 0;
    //iterate from 0 to the end of array - i
    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 1) {
            return maxSum = arr[i]
        }
    
        //iterate from current index to end of array - j
        for (let j = i; j < arr.length; j++) {
            
            //place to store sum of current subarray
            let currentSum = 0;
            
            // let subArray = [];
            //iterative from i to j
            for (let k = i; k <= j; k++) {
                // sum all numbers
                currentSum += arr[k]
                // subArray.push(arr[k])
            }
            // console.log("subArray: ", subArray, "currentSum: ", currentSum)
            //if currentSum is greater than maxSum, set MaxSum
            if (currentSum > maxSum) {
                maxSum = currentSum
            }
        }
    }
    return maxSum
  }

//   console.log("maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]): ", maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) //6
  console.log("maxSequence([7,4,11,-11,39,36,10,-6,37,-10,-32,44,-26,-34,43,43]): ", maxSequence([7,4,11,-11,39,36,10,-6,37,-10,-32,44,-26,-34,43,43])) //155


  // Alternative answer
//   var maxSequence = function(arr){
//     var min = 0, ans = 0, i, sum = 0;
//     for (i = 0; i < arr.length; ++i) {
//       sum += arr[i];
//       min = Math.min(sum, min);
//       ans = Math.max(ans, sum - min);
//     }
//     return ans;
//   }