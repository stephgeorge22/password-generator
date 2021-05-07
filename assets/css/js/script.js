// Assignment code here

//array to hold prompt answers
var picked =[];

//array to hold password
var result = [];

// assigning value to each array element to call in for loop
var lowerResult = picked[0];
var upperResult = picked[1];
var numberResult = picked[2];
var specialCharacterResult = picked[3];

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

  //ENSURE THAT ONE OF EACH CHOSEN CHARACTER TYPE IS INCLUDED
  // add one character of each true prompt to result array 
  if (pickLowercase === true) {
    lowerCase = String.fromCharCode(Math.floor(Math.random() *26) + 97);
    result.push(lowerCase);
  };

  if (pickLowercase === true) {
    upperCase = String.fromCharCode(Math.floor(Math.random() *26) + 65);
    result.push(upperCase);
  };

  if (pickNumber === true) {
    number = String.fromCharCode(Math.floor(Math.random() *26) + 48);
    result.push(number);
  };

  if (pickSpecialCharacter === true) {
    special = String.fromCharCode(Math.floor(Math.random() *26) + 33);
    result.push(special);
  };

  console.log(result);

  // calculate number of true values in picked array
  var count = picked.filter(Boolean).length;

  console.log(count);

  //subtract number of true values from for loop length 
 
  // ONLY SELECTED CHARACTERS ARE CHOSEN
  // identify positions of true values in picked array
  // take true value position number and add into new array
  // change random generating function to pick number from that array 


  // ensure user chooses at least one character type
  if (picked[0] === false && picked[1] === false && picked[2] === false && picked[3] === false) {
    window.alert("You must select at least one character type")
    return generatePassword();
  }

  
  // create for loop with all 4 functions for array 
  // functions to generate random options utilizing Charcode (https://net-comber.com/charset.html)
  // only run functions that array has stored as true
  for (i=0; i < (length - count); i++ ) {
    //random select number between 0 to 3 

    var random = (Math.floor(Math.random() * 4) + 0) ;
    console.log(random);
  
      // if x is selected and picked[x] = false then rerun random selection
      // if (picked[random] === false) {
      //   return random();
      // } 
      // else {
        switch (random) {
          case 0:
            lowerCase = String.fromCharCode(Math.floor(Math.random() *26) + 97);
            result.push(lowerCase);
            console.log(lowerCase);
            break;
          
          case 1:
            upperCase = String.fromCharCode(Math.floor(Math.random() *26) + 65);
            result.push(upperCase);
            console.log(upperCase);
            break;

          case 2:
              number = String.fromCharCode(Math.floor(Math.random() *26) + 48);
              result.push(number);
              console.log(number);
              break;
        
          case 3:
            special = String.fromCharCode(Math.floor(Math.random() *26) + 33);
            result.push(special);
            console.log(special);
            break;
        }
      // }
    };
  // };
  return result.join('');
}
  
  
    // if x is selected and picked[x] = true


    // then run funtion associated ...... 0 = lowerCase , 1 = upperCase , 2 = numbers, 3 = specialCharacters
  
    // place inside for loop 
  
 

//   for (i=0; i<length; i++ ) {

//     if (picked[0] === true) {
//       // function for lowercase
//       lowerCase = String.fromCharCode(Math.floor(Math.random() *26) + 97);
//       result.push(lowerCase);
//     }

    

//     if (picked[1] === true) {
//       //function for uppercase
//       upperCase = String.fromCharCode(Math.floor(Math.random() *26) + 65);
//       result.push(upperCase);
//     }
    
    

//     if (picked[2] === true) {
//       //function for numbers
//       number = String.fromCharCode(Math.floor(Math.random() *10) + 48);
//       result.push(number);
//     }
    

//     if (picked[3] === true) {
//       //function for special characters
//       specialCharacters = String.fromCharCode(Math.floor(Math.random() *15) + 33);
//       result.push(specialCharacters);
//     }

//   }
//   return result.join('');
  


// };

 

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
