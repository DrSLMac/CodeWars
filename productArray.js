// describe("Basic Tests",() =>{
//     Test.assertSimilar(productArray([12,20]), [20,12]);
//     Test.assertSimilar(productArray([3,27,4,2]), [216,24,162,324]);
//     Test.assertSimilar(productArray([13,10,5,2,9]), [900,1170,2340,5850,1300]);
//     Test.assertSimilar(productArray([16,17,4,3,5,2]), [2040,1920,8160,10880,6528,16320]);
//   });

function productArray(numbers){
    const mapIt = numbers.map((num) => {
            const reduceIt = numbers.reduce((acc, curr) => {
                return acc * curr
            })/num
            return reduceIt
    })
    return mapIt
}

//   console.log("productArray([12,20]): ", productArray([12,20]))
//   console.log("productArray([3,27,4,2]): ", productArray([3,27,4,2]) ) //[216,24,162,324]
  console.log("productArray([88, 10, 4, 1, 5, 4, 54, 50, 2, 10]): ", productArray([88, 10, 4, 1, 5, 4, 54, 50, 2, 10]))
//   [43200000, 380160000, 950400000, 3801600000, 760320000, 950400000, 70400000, 76032000, 1900800000, 380160000]
  console.log("productArray([10, 4, 1, 5, 4, 54]): ", productArray([10, 4, 1, 5, 4, 54]))
  // 4320, 10800, 43200, 8640, 10800, 800