// Assignment code here

//when user clicks the button, they are presented with a series of prompts
var generatePassword = function() {
  // password length prompt
  var generate = parseInt (window.prompt('Choose a password length between 8 to 128 characters.'));

  // ensure that user selects integer between 8 and 128 
  if (generate < 8 || generate > 128 || isNaN(generate)) {
      window.alert("Choose a length between 8 and 128 characters.");
      return generatePassword();

    } else {
    confirmLowercase = confirm("Should your password include lowercase letters?");
    confirmUppercase = confirm("Should your password include uppercase letters?");
    confirmNumber = confirm("Should your password include numeric values?");
    confirmSpecialCharacter = confirm("Should your password include special characters?");
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
