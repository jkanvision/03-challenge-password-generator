// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Assignment Code

var generateBtn = document.querySelector("#generate");
var numerical = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbol = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var userSelection = "";

// prompts user to select the length of the generated password 
function generatePassword() {
  var numOfCharacters = Number(window.prompt ("How many characters would you like your password to be? \(Please choose a number between 8 and 128.\)"));
  if (numOfCharacters < 8 || numOfCharacters > 128 || !numOfCharacters) {
    window.alert ("Your selection not valid. Please try again.");
    return;
  }
  else {
    // var length = userSelection.length;
    generatePassword;
  }
  



  // confirm whether or not to include lowercase
  var includeLow = window.confirm ("Do you want to include lowercase letters?");
    if (includeLow == true) {
      userSelection.concat(includeLow);
    }
  

  // confirm whether or not to include uppercase
  var includeUpper = window.confirm ("Do you want to include uppercase letters?");
    if (includeUpper == true) {
      userSelection.concat(includeUpper);
    }

  // confirm whether or not to include numbers
  var includeNum = window.confirm ("Do you want to include numbers?");
    if (includeNum == true) {
      userSelection.concat(includeNum);
    }

  // confirm whether or not to include symbols
  var includeSym = window.confirm ("Do you want to include symbols?");
  if (includeSym == true) {
    userSelection.concat(includeSym);
  }

  
  // userSelection(Math.floor(Math.random() * userSelection.length));
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
