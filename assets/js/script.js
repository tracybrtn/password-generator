// Assignment code here

// when generate password button is clicked, then series of PROMPTS
//start loop

// prompts on screen - ask for length, lowercase, uppercase, numeric, special characters
// data is always validated
// if no option is selected then restart loop

// When all options are selected, validate data again

// function writePassword

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
