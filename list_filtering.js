// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(list) {
    return list.filter(item => Number.isInteger(item))
  }


  const filterIt = (list) => list.filter(item => Number.isInteger(item))
  //   return list.filte(item => Number.isInteger(item))
  // }

  console.log("filter_list([1,2,'a','b']): ", filter_list([1,2,'a','b']))
  console.log("filter_list([1,'a','b',0,15]): ", filter_list([1,'a','b',0,15]))
  console.log("filter_list([1,2,'aasf','1','123',123]): ", filter_list([1,2,'aasf','1','123',123]))

  console.log("filterIt([1,2,'a','b']): ", filterIt([1,2,'a','b']))

//   function filter_lists(l) {
//     return l.filter(v => typeof v == "number")
//    }