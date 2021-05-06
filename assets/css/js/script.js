// Assignment code here

//array to hold prompt answers
var picked =[];
//array to hold password
var result = [];

//when user clicks the button, they are presented with a series of prompts
 var generatePassword = function() {
  // password length prompt
  var length = parseInt (window.prompt('Choose a password length between 8 to 128 characters.'));

  // ensure that user selects integer between 8 and 128 
  if (length < 8 || length > 128 || isNaN(length)) {
      window.alert("Choose a length between 8 and 128 characters.");
      return generatePassword();

    } else {
    pickLowercase = confirm("Should your password include lowercase letters?");
    pickUppercase = confirm("Should your password include uppercase letters?");
    pickNumber = confirm("Should your password include numeric values?");
    pickSpecialCharacter = confirm("Should your password include special characters?");
  }

  // add all prompt responses in else to an array
    picked.push(pickLowercase);
    picked.push(pickUppercase);
    picked.push(pickNumber);
    picked.push(pickSpecialCharacter);

    console.log(picked);
  
  // create for loop with all 4 functions for array 

  // only run functions that array has stored 

  

  for (i=0; i<length; i++ ) {
    lowerCase = String.fromCharCode(Math.floor(Math.random() *26) + 97);

    result.push(lowerCase);
  }
  return result.join('');


};

 // functions to generate random options utilizing Charcode (https://net-comber.com/charset.html)
 function randomLowercase(){
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
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
