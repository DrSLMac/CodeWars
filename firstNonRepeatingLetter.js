const firstNonRepeatingLetter = (str) => {
const splitStr = str.toLowerCase().split('')

const findLetter = splitStr.reduce((letArr, letter) => {
    if (!letArr[letter]) {
        letArr[letter] = 1
    } else {
        letArr[letter] += 1
    }
    return letArr
}, {})

const letterKeys = Object.keys(findLetter)

const firstNonrepeat = letterKeys.find(key => {

    if (findLetter[key] === 1) {
        return key
    }
})

    if (str.includes(firstNonrepeat)) {
        return firstNonrepeat
    } else {
        return firstNonrepeat.toUpperCase()
    }
}

console.log("firstNonRepeatingLetter('stress'): ", firstNonRepeatingLetter('STress'))
console.log("firstNonRepeatingLetter('moonmen'): ", firstNonRepeatingLetter('moonmen'))
console.log("firstNonRepeatingLetter('random string'): ", firstNonRepeatingLetter('3asdlghiawet843q6aapgoaiwtadsglh2paoiwtahsdkjbvnawpie48756q235'))