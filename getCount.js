const getCount = (str) => {
    const vowelCount = str.toLowerCase().split('').reduce((acc, item) => {
        return item == 'a' ? acc += 1 :
                item == "e" ? acc += 1 : 
                item == "i" ? acc += 1 :
                item == "o" ? acc += 1 :
                item == "u" ? acc += 1 : acc
    }, 0)
    return vowelCount
}

// console.log("getCount('abracadabra'): ", getCount("abracadabra"))
// console.log("getCount('Hannah ran too fast'): ", getCount("Hannah ran too fast"))
// console.log("asdfghjklpoiuytreuijhujiuhui: ", getCount("asdfghjklpoiuytreuijhujiuhui"))

const vowelCount = (str) => str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0

// console.log("vowelCount('abracadabra'): ", vowelCount("abracadabra"))
// console.log("vowelCount('Hannah ran too fast'): ", vowelCount("Hannah ran too fast"))
// console.log("vowelCount: ", vowelCount("asdfghjklpoiuytreuijhujiuhui"))
// console.log("vowelCount('my pyx'): ", vowelCount("my pyx"))

const shorterCount = (str) => (str.match(/[aeiou]/gi)||[]).length

console.log("shorterCount('abracadabra'): ", shorterCount("abracadabra"))
console.log("shorterCount('Hannah ran too fast'): ", shorterCount("Hannah ran too fast"))
console.log("shorterCount: ", shorterCount("asdfghjklpoiuytreuijhujiuhui"))
console.log("shorterCount('my pyx'): ", shorterCount("my pyx"))