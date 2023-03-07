// Create a method/function that will intake a set of brackets [ { ( as a string and determine if the brackets are well-formed (match). Brackets can be nested.

//     bracket('{}') // => true
//     bracket('{()}') // => true
//     bracket('({[]}{[]})') // => true
//     bracket('{(')  // => false
//     bracket('{[)][]}')  // => false
//     bracket(']')  // => false

const bracket = (item) => {
    let itemArray = item.split('')
    if (itemArray.length % 2 !== 0) {
        return false;
    }
    let brackets = {
        parenthesis: 0,
        curly: 0,
        square: 0,
    };
    // console.log("itemArray: ", itemArray)
    for (let i = 0; i < itemArray.length; i++) {
        if (itemArray[i] === '(') {
            brackets.parenthesis += 1;
            // console.log("brackets (: ", brackets)
        }  
        if (itemArray[i] === ')') {
            brackets.parenthesis -= 1;
            // console.log("brackets ): ", brackets)
        }
        if (itemArray[i] === '{') {
            brackets.curly += 1;
            // console.log("brackets {: ", brackets)
        }  
        if (itemArray[i] === '}') {
            brackets.curly -= 1;
            // console.log("brackets }: ", brackets)
        }
        if (itemArray[i] === '[') {
            brackets.square += 1;
            // console.log("brackets [: ", brackets)
        } 
        if (itemArray[i] === ']') {
            brackets.square -= 1;
            // console.log("brackets ]: ", brackets)
        }
    }
    // console.log("brackets: ", brackets)
    if (brackets.parenthesis === 0 && brackets.curly === 0 && brackets.square === 0) {
        return true;
    } else {
        return false;
    }
}

console.log("bracket('{}'): ", bracket('{}')) // => true
console.log("bracket('{()}'): ", bracket('{()}')) // => true
console.log("bracket('({[]}{[]})'): ", bracket('({[]}{[]})')) // => true
console.log("bracket('{('): ", bracket('{(')) // => false
console.log("bracket('{[)][]}'): ", bracket('{[)][]}')) // => false
console.log("bracket(']'): ", bracket(']')) // => false