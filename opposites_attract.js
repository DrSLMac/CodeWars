// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flo1, flo2){
    // if one flower is even and one flower is odd, return true, else return false
    return flo1 % 2 === 0 && flo2 % 2 !== 0 || flo2 % 2 === 0 && flo1 % 2 !== 0 ? true : false
  }

console.log("lovefunc(2,2): ", lovefunc(2,2))