function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) {
      return '';
    }
    
    return strarr.reduce((long, item, i) => {
      const currString = strarr.slice(i, i + k).join('');
      return (currString.length > long.length)
        ? currString
        : long;
    }, '');
  }
    
    console.log("longestConsec('array of 6 names'): ", longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))
    // console.log("longestConsec('no array'): ", longestConsec([]))

    function longestConsecStr(strarr, k) {
        if (k <= 0 || k > strarr.length) {
          return "";
        }
        
        return strarr
        .map((value, index) => (
          strarr.slice(index, index+k).join('')
        ))
        .reduce((longest, current) => current.length > longest.length ? current : longest)
        
    }