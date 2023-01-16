function problem1(A) {
    var ans = 1;
    for (i = 1; i < A.length; i++) {
        if (ans > A[i]) {
            ans = A[i];
        }
    }
    return ans;
}

// console.log("solution(): ", solution([-1, 1, -2, 2]))
// console.log("solution(): ", solution([ 1, 1, 2, 3, 4, 6 ]))
// console.log("solution(): ", solution([9,-7,6,2,8,-6,4]))

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// function solution(N) {
//     // Implement your solution here

// }

// console.log("solution(): ", solution(15958))//1958
// console.log("solution(): ", solution(-5859))//-589


function problem2(s) {
    // Implement your solution here
    console.log('s: ', s)
    if (s.length == 1)
    return 0;
    let count = 0

    let splitS = s.split('')
    for (let i = s.length -1; i > 0;) {
        if (splitS[i] == '0') {
            count ++;
            i--;
        } else {
            count ++
            while (splitS[i] == '1' && i > 0) {
                count ++;
                i--;
            }
            if (i == 0)
            count ++
            splitS[i] = '1'
        }
    }
    return count
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function remove5(N) {
    const numN = N.toString().split('')
    let index = -1
    for (let i = 0; i < numN.length; i++) {
        if (numN[i] == 5 && numN[i] - 0 < numN[i + 1] - 0) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        for (let i = numN.length - 1; i >= 0; i--) {
            if (numN[i] == 5) {
                index = i;
                break;
            }
        }
    }
    let ans = '';
    for (let i=0; i < numN.length; i++) {
        if (i != index)
        ans = ans + numN[i]
    }
}

console.log("remove5: ", remove5(15958))