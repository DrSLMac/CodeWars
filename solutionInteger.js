const solution = (array) => {
    const posInt = array.filter(num => num >= 1).sort((a,b) => a-b);
    let x = 1;

    for (let i = 0; i < posInt.length; i++) {
        if (x < posInt[i]) {
            return x
        }
        x = posInt[i] + 1;
    }
    return x
}

console.log("solution(): ", solution([1,3,6,4,1,2]))