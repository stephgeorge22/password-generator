// Assignment code here

//array to hold prompt answers
var picked =[];

//array to hold index value of true prompt answers
var index = [];

//array to hold password
var result = [];

//when user clicks the button, they are presented with a series of prompts
 var generatePassword = function() {
   picked.length = 0; 
   index.length = 0; 
   result.length = 0;

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

  //ENSURE THAT ONE OF EACH CHOSEN CHARACTER TYPE IS INCLUDED
  // add one character of each true prompt to result array 
  if (pickLowercase === true) {
    lowerCase = String.fromCharCode(Math.floor(Math.random() *26) + 97);
    result.push(lowerCase);
  };

  if (pickUppercase === true) {
    upperCase = String.fromCharCode(Math.floor(Math.random() *26) + 65);
    result.push(upperCase);
  };

  if (pickNumber === true) {
    number = String.fromCharCode(Math.floor(Math.random() *10) + 48);
    result.push(number);
  };

  if (pickSpecialCharacter === true) {
    special = String.fromCharCode(Math.floor(Math.random() *15) + 33);
    result.push(special);
  };

  // calculate number of true values in picked array
  var count = picked.filter(Boolean).length;

  //subtract number of true values from form loop length 
 
  // ONLY SELECTED CHARACTERS ARE CHOSEN
  // identify positions of true values in picked array and put into index array
  for (i = 0; i < picked.length ; i++) {
    if(picked[i] === true) {
      indexTrue = i ;
      index.push(indexTrue);
    };
  };
 
  // ensure user chooses at least one character type
  if (picked[0] === false && picked[1] === false && picked[2] === false && picked[3] === false) {
    window.alert("You must select at least one character type")
    return generatePassword();
  }
    
  // create for loop with all 4 functions for array 
  // functions to generate random options utilizing Charcode (https://net-comber.com/charset.html)
  // only run functions that array has stored as true
  for (i=0; i < (length - count); i++ ) {
    //random select number from index array  

    var random ="";
    random = index[Math.floor(Math.random()* index.length)];
   
    switch (random) {
      case 0:
        lowerCase = String.fromCharCode(Math.floor(Math.random() *26) + 97);
        result.push(lowerCase);
        break;
      
      case 1:
        upperCase = String.fromCharCode(Math.floor(Math.random() *26) + 65);
        result.push(upperCase);
        break;

      case 2:
          number = String.fromCharCode(Math.floor(Math.random() *10) + 48);
          result.push(number);
          break;
    
      case 3:
        special = String.fromCharCode(Math.floor(Math.random() *15) + 33);
        result.push(special);
        break;
    }
  };
  return result.join('');
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
