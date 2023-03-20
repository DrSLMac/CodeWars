const busStops = (stops) => stops.reduce((acc, curr) => acc += curr[0] - curr[1], 0)





console.log("busStops([[10,0],[3,5],[5,8]])): ", busStops([[10,0],[3,5],[5,8]])) //5
console.log("busStops([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]): ", busStops([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
console.log("busStops([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]): ", busStops([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))
console.log("busStops([[0,0]]): ", busStops([[0,0]]))












// const number = (busStops) => getNumbers = busStops.reduce((acc, eachStop) => acc += eachStop[0] - eachStop[1], 0)


// console.log("number([[10,0],[3,5],[5,8]])): ", number([[10,0],[3,5],[5,8]])) //5
// console.log("number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]): ", number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
// console.log("number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]): ", number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))
// console.log("number([[0,0]]): ", number([[0,0]]))

// const numPeople = (busStops) => busStops.reduce((acc, [on, off]) => acc += on-off, 0)

// console.log("numPeople([[10,0],[3,5],[5,8]])): ", numPeople([[10,0],[3,5],[5,8]])) //5
// console.log("numPeople([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]): ", numPeople([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])) //17
// console.log("numPeople([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]): ", numPeople([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])) //21
// console.log("numPeople([[0,0]]): ", numPeople([[0,0]])) //0