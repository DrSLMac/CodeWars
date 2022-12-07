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
//     let makeIt = str.split(' ').map(item => {
//         return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
//     }).join('')
//     console.log("makeIt: ", makeIt.length)
//     if(makeIt.length < 1 || !makeIt) {
//             return false
//         } else {
//           `#${makeIt}`
//         }
//     return makeIt > 140 ? false : makeIt
// }

// const generateHashtag = (str) => {
//     //method should convert a string to a hashtag phrase
//     //string should start with a hashtag
//     //first letter of all words is capitalized
//     //empty string returns FALSE
//     //if str.length > 140, return FALSE

//     let finalStr = ''
//     let cappy = str.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
//     console.log("cappy: ", cappy)
//     let filtStr = cappy.match(/\w/g)
//     const filterIt = () => {
//         if (filtStr == null || filtStr.length >= 140) {
//             return false
//         } else {
//             filtStr.unshift("#")
//             return finalStr += filtStr.join('')
//         }
//     }
//     return filterIt()
// }

// function generateHashtag (str) {
//     if(!str || str.length < 1) return false;
    
//     var r = '#' + str.split(' ').map(function(el) {
//       return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
//     }).join('');
//     return r.length > 140?false:r;
//  }




// console.log("generateHashtag(' Hello  World '): ", generateHashtag(" hello  world "))
// console.log("generateHashtag(' '): ", generateHashtag(" "))
// console.log("generateHashtag(''): ", generateHashtag(""))
// console.log("generateHashtag(' '.repeat(200)): ", generateHashtag(" ".repeat(200)))
// console.log("generateHashtag('Do We have A Hashtag'): ", generateHashtag("Do We have A Hashtag"))
console.log("generateHashtag('Codewars'): ", generateHashtag("Codewars"))
// console.log("generateHashtag('Codewars Is Nice'): ", generateHashtag("Codewars Is Nice"))
// console.log("generateHashtag('Codewars is nice'): ", generateHashtag("Codewars is nice"))
// console.log("generateHashtag('code' + ' '.repeat(140) + 'wars''): ", generateHashtag("code" + " ".repeat(140) + "wars"))
// console.log("generateHashtag('Looooooooooooooo Cat'): ", generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))
// console.log("generateHashtag('a'.repeat(139)): ", generateHashtag("a".repeat(139)))
// console.log("generateHashtag('a'.repeat(140)): ", generateHashtag("a".repeat(140)))

// function generatingHashtag (str) {
//     if(!str || str.length < 1) return false;
    
//     var r = '#' + str.split(' ').map(function(el) {
//       return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
//     }).join('');
//     return r.length > 140?false:r;
//  }

//  console.log("generatingHashtag('Looooooooooooooo Cat'): ", generatingHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))

//  const generateHashtag = (str) => {
//     //method should convert a string to a hashtag phrase
//     //string should start with a hashtag
//     //first letter of all words is capitalized
//     //empty string returns FALSE
//     //if str.length > 140, return FALSE

//     let finalStr = ''
//     let cappy = str.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
//     let filtStr = cappy.match(/\w/g)
//     const filterIt = () => {
//         if (filtStr == null || filtStr.length >= 140) {
//             return false
//         } else {
//             filtStr.unshift("#")
//             return finalStr += filtStr.join('')
//         }
//     }
//     return filterIt()
// }