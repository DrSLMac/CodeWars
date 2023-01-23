const makeNegative = (num) => {
return  num < 0 ? num : -num
}

console.log("makeNegative(42): ", makeNegative(42))
console.log("makeNegative(-5): ", makeNegative(-5))
console.log("makeNegative(0): ", makeNegative(0))
console.log("makeNegative(-0.12): ", makeNegative(-0.12))
console.log("makeNegative(0.54): ", makeNegative(0.54))