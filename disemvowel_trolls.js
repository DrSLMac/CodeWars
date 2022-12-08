// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    //start with str and filter out all the vowels
    const noVowels = str.replace(/[aeiou]/gi, '')
    return noVowels;
  }

  console.log("disemvowel('This website is for losers LOL!'): ", disemvowel('This website is for losers LOL!'))
  //"Ths wbst s fr lsrs LL!"
  console.log("disemvowel('No offense but,\nYour writing is among the worst I've ever read'): ", disemvowel("No offense but,\nYour writing is among the worst I've ever read"))

  
// The i flag is used to make the search case insensitive. These two regular expressions are the same:
// /[aeiou]/gi
// /[aeiouAEIOU]/g