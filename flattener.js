const flattener = (element) => {
    let flatArray = []
    element.forEach(el => {
        // console.log("el: ", el)
        if (typeof el == 'number' || typeof el == 'string') {
            flatArray.push(el)
            console.log("flatArray after 1st condition: ", flatArray)
        }

        if (Array.isArray(el)) {
            console.log("el: ", el)
            el.forEach(arr => {
                if (typeof arr == 'number' || typeof arr == 'string') {
                    flatArray.push(arr)
                    console.log("flatArray: ", flatArray)
                }
                console.log("arr: ", arr)
                if (Array.isArray(arr)) {
                    console.log("arr is still arr: ", arr)
                }
            })
        }
    })
    console.log("flatArray: ", flatArray)
    return flatArray
}

console.log("flattener([1, 2, 3, [[4], 5], [[[6]]]]): ", flattener([1, 2, 3, [[4], 5], [[[6]]]]))
// console.log("flattener(['hi', 'this is', [[['string'], 'that is very'], [[[['nested']]]]]]): ", flattener(["hi", "this is", [[["string"], "that is very"], [[[["nested"]]]]]]))