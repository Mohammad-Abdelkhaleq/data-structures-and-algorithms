
// myy solution

function validateBrackets(str) {
    let openBrackets = ['(', '[', '{'];
    let closeBrackets = [')', ']', '}'];
  
    let openBracketsStack = [];
    let closeBracketsStack = [];
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      
      if (openBrackets.includes(char)) {
        openBracketsStack.push(char);
      } else if (closeBrackets.includes(char)) {
        closeBracketsStack.push(char);
      }
    }
  
    if (openBracketsStack.length !== closeBracketsStack.length) {
      return false;
    }
  
    for (let i = 0; i < openBracketsStack.length; i++) {
      let bracketType = null;
  
      for (let m = 0; m < openBrackets.length; m++) {
        if (openBrackets[m] === openBracketsStack[i]) {
          bracketType = m;
          break;
        }
      }
  
      let isThereAClosingBracket = false;
  
      for (let j = 0; j < closeBrackets.length; j++) {
        if (closeBrackets[j] === closeBracketsStack[i]) {
          closeBracketsStack.splice(j, 1);
          isThereAClosingBracket = true;
          break;
        }
      }
  
      if (!isThereAClosingBracket) {
        return false;
      }
    }
  
    return true;
  }