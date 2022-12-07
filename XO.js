// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("") => false

const XO = (str) => {
    const strArray = str.toLowerCase().split('')
                    .filter(char => {
                        return char === "x" || char === "o"
                    })
    let xArr = []
    let oArr = []
    strArray.forEach(item => {
        if (item === "o") {
            oArr.push(item)
        } else {
            xArr.push(item)
        }
    })
    if (xArr.length === oArr.length) {
        return true;
    } else return false
}

console.log("XO('ooxxqrs'): ", XO('ooxxqrs'))//true
console.log("XO('xooxx'): ", XO('xooxx'))//false
console.log("XO('ooxXm'): ", XO('ooxXm'))//true
console.log("XO('zpzpzpp'): ", XO('zpzpzpp'))//true - when no 'x' and 'o' is present should return true
console.log("XO('zzoo'): ", XO('zzoo'))//true


const XOX = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }