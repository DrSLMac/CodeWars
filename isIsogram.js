// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// describe("Tests", () => {
//     it("test", () => {
//       assert.strictEqual( isIsogram("Dermatoglyphics"), true );
//       assert.strictEqual( isIsogram("isogram"), true );
//       assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
//       assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
//       assert.strictEqual( isIsogram("isIsogram"), false );
//       assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
//     });
//   });

function isIsogram(str){
    // const strArr = str.toLowerCase().split('')

    const compareLetters = str.toLowerCase().split('').reduce((acc, curr) => {
        (!acc.includes(curr)) ? acc.push(curr) : acc
        return acc
    }, [])
    // return compareLetters

    // let holdingArr = [];
    // strArr.forEach((letter) => {
    //     if (!holdingArr.includes(letter)) {
    //         holdingArr.push(letter)
    //     }
    // })
    return strArr.length === compareLetters.length
  }

  console.log("isIsogram('Dermatoglyphics'): ", isIsogram('Dermatoglyphics')) //true
  console.log("isIsogram('isogram'): ", isIsogram('isogram')) // true
  console.log("isIsogram('aba'): ", isIsogram('aba')) //false
  console.log("isIsogram('moOse): ", isIsogram('moOse')) //false
  console.log("isIsogram('isIsogram'): ", isIsogram('isIsogram')) //false
  console.log("isIsogram(''): ", isIsogram('')) //true