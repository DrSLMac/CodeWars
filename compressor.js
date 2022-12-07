function compressor(str) {
    let result = '';
    let count = 0;

    for (let i=0; i < str.length; i++) {
        count ++
        if (str[i] !== str[i + 1]) {
            result = result + str[i] + count;
            count = 0;
        }
    }
    return result
}

console.log("compressor('abbccdddda'):", compressor('abbbcccccdddda'))
//output => compressor('abbccdddda'): a1b3c5d4a1