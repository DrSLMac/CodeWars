// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    //...
  }

function isPangram(string){
    const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x','y', 'z']
    const onlyLetters = string.toLowerCase().match(/[a-z]/g).sort()
    console.log("onlyLetters: ", onlyLetters)
    let uniqueLetters = onlyLetters.filter((letter, idx) => {
        return onlyLetters.indexOf(letter) === idx;
    })
    console.log("uniqueLetters: ", uniqueLetters)
    console.log("alphabet: ", alphabet)
    const stringit = JSON.stringify(uniqueLetters)
    const more = JSON.stringify(alphabet)
    console.log("WHAT!?!?: ", stringit)
    console.log("MORE: ", more)
    
    return JSON.stringify(uniqueLetters) === JSON.stringify(alphabet)
}

// console.log("isPangram('This is not a pangram.'): ", isPangram('This is not a pangram.'))
// console.log("isPangram('Just keep trying at crazy skills'): ", isPangram('Just keep trying at crazy skills'))
// console.log("isPangram('The quick brown fox jumps over the lazy dog.'): ", isPangram('The quick brown fox jumps over the lazy dog.'))

// function isPangram(string){
//     console.log("string.match(/([a-z])(?!.*\1)/ig): ", string.match(/([a-z])(?!.*\1)/ig))
//     return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
// }



const checkPangram = (string) => string.match(/([a-z])(?!.*\1)/ig).length === 26
// {
//match letters a-z, include global and case-insensitive flag
//lazy group that would exclude duplicates, allowing only one instance of each letter. 
//if pangram is true, then length should equal 26
// return string.match(/([a-z])(?!.*\1)/ig).length === 26
// }

console.log("checkPangram('This is not a pangram.'): ", checkPangram('This is not a pangram.'))
console.log("checkPangram('The quick brown fox jumps over the lazy dog.'): ", checkPangram('The quick brown fox jumps over the lazy dog.'))