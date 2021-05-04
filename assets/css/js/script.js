// Assignment code here



//when user clicks the button, they are presented with a series of prompts
var generatePassword = function() {
  // password length prompt
  var length = parseInt (window.prompt('Choose a password length between 8 to 128 characters.'));

  // ensure that user selects integer between 8 and 128 
  if (length < 8 || length > 128 || isNaN(length)) {
      window.alert("Choose a length between 8 and 128 characters.");
      return generatePassword();

    } else {
    Lowercase = confirm("Should your password include lowercase letters?");
    Uppercase = confirm("Should your password include uppercase letters?");
    Number = confirm("Should your password include numeric values?");
    SpecialCharacter = confirm("Should your password include special characters?");
  }

  // functions to generate random options utilizing Charcode
  function randomLowercase(){
    return String.fromCharCode(Math.floor(Math.random() *26) + 41);
  }

  function randomUppercase(){
    return String.fromCharCode(Math.floor(Math.random() *26) + 61);
  }

  function randomNumber(){
    return String.fromCharCode(Math.floor(Math.random() *10) + 30);
  }

  function randomSpecialcharacter(){
    return String.fromCharCode(Math.floor(Math.random() *15) + 21);
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
