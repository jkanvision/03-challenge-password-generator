// Assignment Code
var generateBtn = document.querySelector("#generate");
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userSelection = [];

// prompts user to select the length of the generated password and alerts of an invalid selection
function generatePassword() {
  var gendPass = "";
  var numOfCharacters = Number(window.prompt ("How many characters would you like your password to be? \(Please choose a number between 8 and 128.\)"));
  if (numOfCharacters < 8 || numOfCharacters > 128 || !numOfCharacters) {
    window.alert ("Your selection not valid. Please try again.");
    return;
  }
  
  //  confirms inclusion of lowercase letters and adds them to array named userSelection
  var includeLow = window.confirm ("Do you want to include lowercase letters?");
    if (includeLow == true) {
      userSelection = userSelection.concat(lowercase);
    }
  

  // confirms inclusion of uppercase letters and adds them to array named userSelection
  var includeUpper = window.confirm ("Do you want to include uppercase letters?");
    if (includeUpper == true) {
      userSelection = userSelection.concat(uppercase);
    }

  // confirms inclusion of numbers and adds them to array named userSelection
  var includeNum = window.confirm ("Do you want to include numbers?");
    if (includeNum == true) {
      userSelection = userSelection.concat(numberChars);
    }

  // confirms inclusion of symbols and adds them to array named userSelection
  var includeSym = window.confirm ("Do you want to include any special characters?");
    if (includeSym == true) {
    userSelection = userSelection.concat(specialChars);
    }

  // iterates through array containing all possible values available for password generator 
  console.log(userSelection);

  // generates random password with length that = user selection
  for (var i = 0; i < numOfCharacters; i++) {
    
    gendPass += userSelection[Math.floor(Math.random() * (userSelection.length - 1))];
    }
    return gendPass;
  }



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
