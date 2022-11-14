var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+'];

function getPasswordOptions () {
  var length = parseInt(prompt("Choose a password length between 8 and 32 characters."), 10);
  
  if (Number.isNaN(length)) {
    alert("Please enter length as a number.");
    return null;
  }
  if (length < 8) {
    alert ("Password must be at least 8 character long.");
    return null;
  }
  if (length > 32) {
    alert ("Password must be less than 33 characters long.");
    return null;
  }

  var hasLowerCase = confirm("Click Okay to confirm the use of Lower Case Letters.");
  var hasUpperCase = confirm("Click Okay to confirm the use of Upper Case Letters.");
  var hasNumbers = confirm("Click Okay to confirm the use of Numbers.");
  var hasSpecialChar = confirm("Click Okay to confirm the use of Special Characters.");

  if (hasLowerCase===false && hasUpperCase===false && hasNumbers===false && hasSpecialChar===false) {
    alert("Must slecet at least on type of Character.");
    return null;
  }
  var passwordOptions = {
    length: length, 
    hasLowerCase: hasLowerCase, 
    hasUpperCase: hasUpperCase, 
    hasNumbers: hasNumbers, 
    hasSpecialChar: hasSpecialChar,
  };
  return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var option = getPasswordOptions();
  var result = [];
  var possibleChar = [];
  var guaranteedChar = [];

  if (!option) return null;

  if (option.hasLowerCase) {
    possibleChar = possibleChar.concat(lowerCase);
    guaranteedChar.push(getRandom(lowerCase));
  }
  if (option.hasUpperCase) {
    possibleChar = possibleChar.concat(upperCase);
    guaranteedChar.push(getRandom(upperCase));
  }
  if (option.hasNumbers) {
    possibleChar = possibleChar.concat(number);
    guaranteedChar.push(getRandom(number));
  }
  if (option.hasSpecialChar) {
    possibleChar = possibleChar.concat(specialChar);
    guaranteedChar.push(getRandom(specialChar));
  }

  for (var i = 0; i < option.length; i++) {
    var possibleChars = getRandom(possibleChar);
    result.push(possibleChars);
  }
  for (var i = 0; i < guaranteedChar.length; i++) {
    result[i] = guaranteedChar[i];
  }
  return result.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
