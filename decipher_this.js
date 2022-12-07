const decipherThis = (str) => {
    const splitStr = str.split(' ')
    const makeWords = splitStr.map((word) => {
        word = word.replace(/^\d+/g, (match) => {
            return String.fromCharCode(parseInt(match))
        })
        console.log("word: ", word)
        const chars = word.split('')
        let temp = chars[1]
        chars[1] = chars[chars.length - 1];
        chars[chars.length - 1] = temp
        return chars.join('')
    });
    return makeWords.join(" ")
}

console.log("decipherThis('72olle 103doo 100ys'): ", decipherThis("72olle 103doo 100ya"))