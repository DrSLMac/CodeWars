// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"

const decodeMorse = (morseCode) => {
    // Your code here
    // You can use MORSE_CODE[morse]

    var MORSE_CODE = {".-": "a", "-...":"b", "-.-.": "c", "-..": "d", ".":"e", "..-.":"f", "--.":"g", "....":"h", "..":"i", ".---":"j", "-.-":"k", ".-..":"l", "--":"m", "-.":"n", "---":"o", ".--.":"p", "--.-":"q", ".-.":"r", "...":"s", "-":"t", "..-":"u", "...-":"v", ".--":"w", "-..-":"x", "-.--":"y", "--..":"z", ".----":"1", "..---":"2", "...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7", "---..":"8", "----.":"9", "-----":"0", "|":" "};
    const mCodeKeys = Object.keys(MORSE_CODE)

    console.log("mCodeKeys: ", MORSE_CODE["-..."])
    
    //split the string of characters into an array, then map over the array to create arrays of all the characters of each letter.
    const allLetters = morseCode.split('  ').map(char => char.split(' '))
    // console.log("allLetters: ", allLetters)
    
    
    var decoded = [];
    const letMap = allLetters.map((letArr) => {
        console.log("letArr: ", letArr)
        // const theSwap = letArr.map((codeLetter) => {
        //     console.log("codeLetter: ", codeLetter)
            mCodeKeys.find(key => {
                if (key === codeLetter) {
                    console.log("MORSE_CODE[key]: ", MORSE_CODE[key])
                    return codeLetter = MORSE_CODE[key]
                }
            })
        })
        // console.log("theSwap: ", theSwap)
        // return theSwap
    // }) 
   console.log("letMap: ", letMap) 
//    console.log("decoded array: ", decoded.join(''))
    //   for(var i = 0; i < allLetters.length; i++){
    //     decoded[i] = [];
    //     console.log("decoded: ", decoded)
    //     console.log("allLetters.length: ", allLetters.length)
    //     for(var x = 0; x < allLetters[i].length; x++){
    //         if(MORSE_CODE[allLetters[i][x]]){
    //             decoded[i].push( MORSE_CODE[allLetters[i][x]] );
    //         }
    //     }
    //   }
    
    //   return decoded.map(arr => arr.join('')).join(' ');

  }

  console.log("decodeMorse(): ", decodeMorse('.... . -.--   .--- ..- -.. .'))