

const dirReduc = (arr) => {
    let result = [];
    console.log("arr: ", arr)
    for (let i= 0; i < arr.length; i++) {
        if (arr[i] === "NORTH" && arr[i+1] === "SOUTH" ||
            arr[i] === "SOUTH" && arr[i+1] === "NORTH" ||
            arr[i] === "EAST" && arr[i+1] === "WEST" ||
            arr[i] === "WEST" && arr[i+1] === "EAST" 
        ) {
            console.log("i: ", i)
            console.log(`${arr[i]} @ index ${i} cancels out ${arr[i+1]} @ index ${i+1}.`)
            i++
            console.log("Move to index ", i+1)
        } else {
            console.log(`${arr[i]} @ index ${i} did not cancel out ${arr[i+1]} @ index ${i+1}`)
            console.log("result.length: ", result.length)
            console.log("result[result.length-1]: ", result[result.length-1])
            console.log("arr[i]: ", arr[i])
        if(result[result.length -1] === "NORTH" && arr[i] === "SOUTH" ||
            result[result.length -1] === "SOUTH" && arr[i] === "NORTH" ||
            result[result.length -1] === "EAST" && arr[i] === "WEST" ||
            result[result.length -1] === "WEST" && arr[i] === "EAST"
        ) {
            result.pop()
            console.log("result after pop: ", result)
            } else {
                result.push(arr[i])
                console.log("result after push: ", result)   
            }
        }
    }
    return result
}
console.log("dirReduc([ 'NORTH', 'EAST' ]): ", dirReduc(["NORTH","EAST","NORTH","EAST","WEST","WEST","EAST","EAST","WEST","SOUTH"])) //[ 'NORTH', 'EAST' ]
// console.log("dirReduc([ 'NORTH', 'EAST' ]): ", dirReduc(["NORTH","SOUTH","WEST","EAST","NORTH","SOUTH","NORTH","EAST","WEST","EAST","NORTH","SOUTH","EAST","WEST"])) //[ 'NORTH', 'EAST' ]

// console.log("dirReduc([ 'WEST' ]): ", dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])) //["WEST"]
// console.log("dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']): ", dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])) //["NORTH", "WEST", "SOUTH", "EAST"]
// console.log("dirReduc([ 'EAST', 'NORTH' ]): ", dirReduc(["EAST","EAST","WEST","NORTH","WEST","EAST","EAST","SOUTH","NORTH","WEST"])) //[ 'EAST', 'NORTH' ]
// console.log("dirReduc([ 'NORTH', 'EAST' ]): ", dirReduc(["NORTH","EAST","NORTH","EAST","WEST","WEST","EAST","EAST","WEST","SOUTH"])) //[ 'NORTH', 'EAST' ]

function directionReduction(arr) {
    var opposite = {
      'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return arr.reduce(function(dirArr, dir){
        if (dirArr[dirArr.length - 1] === opposite[dir])
        dirArr.pop();
        else
          dirArr.push(dir);
        return dirArr;
      }, []);
  }
  console.log("directionReduction([ 'NORTH', 'EAST' ]): ", directionReduction(["NORTH","EAST","NORTH","EAST","WEST","WEST","EAST","EAST","WEST","SOUTH"])) //[ 'NORTH', 'EAST' ]