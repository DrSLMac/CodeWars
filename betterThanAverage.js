// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// const betterThanAverage = (classPoints, yourPoints) => {
//     const arrTotal = classPoints.reduce((avg, num) => (avg += num), 0)
//     const average = (arrTotal + yourPoints)/(classPoints.length + 1)
//     return yourPoints > average
//   }

// ⬇️ ⬇️ ⬇️

const betterThanAverage = (classPoints, yourPoints) => ((classPoints.reduce((avg, num) => (avg += num), 0))+ yourPoints)/(classPoints.length + 1) < yourPoints

  console.log("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75): ", betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)) //true
  console.log("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9): ", betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)) //false
  console.log("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50): ", betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)) //false
  console.log("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21): ", betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)) //false