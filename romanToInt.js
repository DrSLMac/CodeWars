const romanToInt = (s) => {
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    const romNum = s.split('').reduce((acc, num, idx) => {
        let current = roman[s[idx]]
        let next = roman[s[idx+1]]
        current < next ? acc -= current : acc += current
        return acc
    }, 0)
return romNum
}

console.log("romanToInt('IV'): ", romanToInt("IV"))
// console.log("romanToInt('MCMXCIV'): ", romanToInt("MCMXCIV"))