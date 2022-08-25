// Assignment code here

// function to generate a random password 
// var passwordLength = answer from prompt


// PASSWORD PROMPTS STARTS HERE
// Connect HTML button with JS and 
document.querySelector('#generate').addEventListener('click', generatePassword);

// Add event listener to generate prompt
function generatePassword() {
  window.prompt("test!");
};


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
