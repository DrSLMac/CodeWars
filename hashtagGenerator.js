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

// const generateHashtag = (str) => {
//  if (str.length === 0 || str.length > 140 ) {
//     return false 
//  } else {
//      const capCase = str.split(' ').reduce((newArray, word) => {
//          newArray.push(word.charAt(0).toUpperCase() + word.slice(1))
//          return newArray
//      }, [])
//      return "#" + capCase.join('')
//  }
// }


const generateHashtags = (str) => {
 if (str.length === 0 || str.length > 140 ) {
    return false 
 } else {
     const capCase = str.split(' ').reduce((newArray, word) => {
         newArray.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
         return newArray
     }, []).join('')
     console.log ("capCase: ", capCase)
    //  return "#" + capCase.join('')
 }
}

console.log("generateHashtags('CodeWars is nice'): ", generateHashtags('CodeWars is nice'))

const generateHashtag = (str) => {
    let makeIt = str.split(' ').map(item => {
        return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
    }).join('')
    let madeIt = makeIt.length <1 || !makeIt ?  false : `#${makeIt}`
    console.log("madeIt: ", madeIt)
    return makeIt > 140 ? false : makeIt
}

// console.log("generateHashtag(''): ", generateHashtag(""))//false
// console.log("generateHashtag('Do We have A Hashtag'): ", generateHashtag('Do We have A Hashtag'))
// console.log("generateHashtag('Codewars'): ", generateHashtag('Codewars'))
// console.log("generateHashtag('Codewars Is Nice'): ", generateHashtag('Codewars Is Nice'))

// console.log("generateHashtag('Codewars is nice'): ", generateHashtag('Codewars is nice'))
// console.log("generateHashtag(): ", generateHashtag())

// console.log(0.1 + 0.2)
// console.log(0.1 + 0.2 == 0.3)

for (let i = 0; i <= 1; i++) {
    let x = 1;  //variables declared with let are only block scoped
    console.log(x);
  }
//   console.log(x);

let x = 0.1 + .2
console.log(x.toFixed(1) == 0.3)

console.log("generateHashtag('CodeWars is nice'): ", generateHashtag('CodeWars is nice'))
// console.log("generateHashtag(): ", generateHashtag())

