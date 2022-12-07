// const openOrSenior = (values) => {
//     const getValue = values.map((member) => {
//         if(member[0] >= 55 && member[1] > 7) {
//             return "Senior"
//         } else {
//             return "Open"
//         }
//         })
//     return getValue
// }

const openOrSenior = (values) => {
    return values.map(([age, handicap]) => (age >= 55 && handicap > 7) ? "Senior" : "Open")
}


console.log("openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]): ", openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
//['Open', 'Senior', 'Open', 'Senior']
console.log("openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]): ", openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]))