const reverseWords = (string) => {
const breakIt = string.split(' ')

const arrArr = breakIt.map((item) => {
    return item.split('').reverse().join('')
}).join(' ')

return arrArr
}

console.log("reverseWords(): ", reverseWords("This is an example!"))