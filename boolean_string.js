// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

const boolToWord = ( bool ) => {
    if (bool) {
        return "Yes"
    } 
    return "No"
  }

  console.log("boolToWord(true): ",boolToWord(true))
  console.log("boolToWord(false): ",boolToWord(false))


const boolToWord2 = (bool) => {
    return bool ? "Yes" : "No"
  }

  console.log("boolToWord2(true): ",boolToWord2(true))
  console.log("boolToWord2(false): ",boolToWord2(false))