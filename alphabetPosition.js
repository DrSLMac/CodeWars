// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

const alphabetPosition = (text) => {
    const alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const alphaArr = text.toLowerCase().split('')
    let numArr = [];
    alphaArr.forEach((letter) => {
        const getNum = alpha.filter((char, idx) => {
                if (letter === char) {
                    numArr.push(idx + 1)
                }
        })

    })
    return numArr.join(' ')
}

// console.log("alphabetPosition('The sunset sets at twelve o' clock.'): ", alphabetPosition("The sunset sets at twelve o' clock."))
console.log("alphabetPosition('The narwhal bacons at midnight.'): ", alphabetPosition('The narwhal bacons at midnight.'))
console.log("alphabetPosition('cat'): ", alphabetPosition('cat'))
// console.log("alphabetPosition(): ", alphabetPosition())
// console.log("alphabetPosition(): ", alphabetPosition())
// console.log("alphabetPosition(): ", alphabetPosition())