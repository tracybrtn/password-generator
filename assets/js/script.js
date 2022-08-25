// Assignment code here

// function to generate a random password 
//function to set password length

// VARIABLES FOR THE GENERATOR. Placed in an array
var promptInfo = ["lowercase", "uppercase", "numeric", "special"];


function generatePassword() {
  // Define password length
  var passwordLength = window.prompt("How long would you like your password to be? (min 8 characters, max 128.");
    if (passwordLength === "" || passwordLength === null) {
      window.alert("Your password needs to be between 8 and 128 characters. Try again.")
      return generatePassword()  
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Your password needs to be between 8 and 128 characters. Try again.")
      return generatePassword() 
    } else if (passwordLength >= 8 || passwordLength <= 128) {
        window.alert("Your password will have " + passwordLength + " characters.");
        console.log("passwordLength is " + passwordLength);
    } else {
        window.alert("Your password needs to be between 8 and 128 characters. Try again.")
        return generatePassword();
    };

    // Loop through lowercase, uppercase, numeric, and special characters.
      for (var i = 0; i < promptInfo.length; i++) {
        window.prompt("Would you like to include " + promptInfo[i] + " characters in your password?");
          if (passwordCharacters === "yes" || passwordCharacters === "Yes" || passwordCharacters === "YES") {
            window.alert("Your password WILL contain " + promptInfo[i] + " characters.");
            console.log("Password WILL contain " + promptInfo[i] + " characters.");
          } else if (passwordCharacters === "no" || passwordCharacters === "No" || passwordCharacters === "NO") {
            window.alert("Your password WILL NOT contain " + promptInfo[i] + " characters.");
            console.log("Password WILL NOT contain " + promptInfo[i] + " characters.");
          } else {
            window.alert("You must choose YES or NO. Try again.");
            return generatePassword();
          };
      };
     };
 


// Connect HTML button with JS and 
document.querySelector("#generate").addEventListener('click', generatePassword);

// Calculate password


// function writePassword

// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
