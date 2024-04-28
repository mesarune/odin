const palindromes = function (str) {
    let newStr = removeNonLetters(str);
    for (let i = 0; i < (str.length / 2); i++) {
      if (newStr[i] !== newStr.at(-(i + 1))) {
          return false;
      }
    }
    return true;
  };
  
  function removeNonLetters (str) {
    function checkLetter (letter) {
      return !(letter < "a" || letter > "z");
    }
    return str.toLowerCase().split("").filter(checkLetter).join("");
  }
  
  console.log(palindromes("Test, tset"));