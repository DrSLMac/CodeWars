const order = (words) => {
    const getNumber = (str) => {
        return str.match(/\d/)[0]
    }
    const wordArray = words.split(' ').sort((a, b) => {
        return getNumber(a) - getNumber(b)
    }).join(' ')
    return wordArray
  }

console.log("order('is2 Thi1s T4est 3a'): ", order('is2 Thi1s T4est 3a'))
console.log("order('4of Fo1r pe6ople g3ood th5e the2'): ", order('4of Fo1r pe6ople g3ood th5e the2'))
console.log("order(''): ", order(''))

console.log(" ----- ")

const moreOrder = (words) => {
    const wordArray = words.split(' ').sort((a, b) => {
        return a.match(/\d/) - b.match(/\d/)
    }).join(' ')
    return wordArray
  }

console.log("moreOrder('is2 Thi1s T4est 3a'): ", moreOrder('is2 Thi1s T4est 3a'))
console.log("moreOrder('4of Fo1r pe6ople g3ood th5e the2'): ", moreOrder('4of Fo1r pe6ople g3ood th5e the2'))
console.log("moreOrder(''): ", moreOrder('')) 