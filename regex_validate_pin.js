function validatePIN (pin) {
    if (!pin || pin.length < 1 || pin.replace(/[0-9]/g, '')) {
        return false
    }
    return pin.match(/\d/g).join('').length === 4 || pin.match(/\d/g).join('').length === 6 ? true: false
  }

  console.log("validatePIN(-1234): ", validatePIN("-1234"))
  console.log("validatePIN(12345): ", validatePIN("12345"))
  console.log("validatePIN(a234): ", validatePIN("a234"))

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false