function validParentheses(parens) {
    let openNum = 0;
for (let i = 0; i < parens.length; i++){
    if(parens.charAt(i) == "(") {
        openNum += 1;
    } else {
        openNum -= 1;
    }
    if ( openNum < 0 ) {
        return false
    }
}
if ( openNum === 0) {
    return true
} else {
    return false
}
}

console.log("validParentheses(')(())))'): ", validParentheses(')(())))'))
console.log("validParentheses('()'): ", validParentheses('()'))
console.log("validParentheses('('): ", validParentheses('('))
console.log("validParentheses('(())((()())())'): ", validParentheses('(())((()())())'))


// const moreValidParentheses = (parens) => {
// let openNum = 0;
// for (let i = 0; i < parens.length; i++){
//     if(parens[1] == "(") openNum++;
//     if(parens[i] == ')') openNum--;
//     if (openNum < 0) return false   
// }
// return openNum == 0;
// }

// console.log("moreValidParentheses(')(())))'): ", moreValidParentheses(')(())))'))
// console.log("moreValidParentheses('()'): ", moreValidParentheses('()'))
// console.log("moreValidParentheses('('): ", moreValidParentheses('('))
// console.log("moreValidParentheses('(())((()())())'): ", moreValidParentheses('(())((()())())'))