// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

const generateHashtag = (str) => {
 if (str.length === 0 || str.length > 140 ) {
    return false 
 } else {
     const capCase = str.split(' ').reduce((newArray, word) => {
         newArray.push(word.charAt(0).toUpperCase() + word.slice(1))
         return newArray
     }, [])
     return "#" + capCase.join('')
 }
}

console.log("generateHashtag(''): ", generateHashtag(""))//false
console.log("generateHashtag('Do We have A Hashtag'): ", generateHashtag('Do We have A Hashtag'))
console.log("generateHashtag('Codewars'): ", generateHashtag('Codewars'))
console.log("generateHashtag('Codewars Is Nice'): ", generateHashtag('Codewars Is Nice'))
console.log("generateHashtag('Codewars is nice'): ", generateHashtag('Codewars is nice'))
// console.log("generateHashtag(): ", generateHashtag())