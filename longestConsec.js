// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

const longestConsec = (strArray, numWord) => {
    const arrLength = strArray.length
    if (arrLength === 0 || numWord > arrLength || arrLength <= 0) {
            return ""
        }
    const result = [];
    let lastConsecStr = numWord > 1 ? arrLength - numWord : arrLength
    for (let i = 0; i <= lastConsecStr; i++) {
        let consecWords = ''
        for (let s = i; s < i + numWord; s++) {
            consecWords += strArray[s]
        }
    result.push(consecWords)
    }
    const longestConsecString = result.reduce((finalStr, item) => {
        item.length > finalStr.length ? finalStr = item : finalStr
        return finalStr
    })
    return longestConsecString
}

// console.log("longestConsec('array of 6 names'): ", longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
// console.log("longestConsec('no array'): ", longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))
console.log("another try: ", longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2))