const highAndLow = (numbers) => {
    let sortedNum
    const splitStri = numbers.split(" ")
    if (splitStri.length < 2) {
        return numbers + " " + numbers
    } else {
        sortedNum = splitStri.map(num => parseInt(num, 10)).sort((a,b) => a-b)
    }
    return  sortedNum.pop().toString() + " " + sortedNum[0].toString()  
}

console.log("highAndLow('1 2 3 4 5'): ", highAndLow('1 2 3 4 5'))
console.log("highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'): ", highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'))
console.log("highAndLow('19'): ", highAndLow('19'))