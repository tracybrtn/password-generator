// Assignment code here

// Values for the password
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "0123456789"
var special = "~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/"

var promptGenerator = function() {	
  // Define password length	
  var getPasswordLength = window.prompt("How long would you like your password to be? (min 8 characters, max 128.");	
    if (getPasswordLength === "" || getPasswordLength === null) {	
      window.alert("Your password needs to be between 8 and 128 characters. Try again.")	
      return promptGenerator()  	
    } else if (getPasswordLength < 8 || getPasswordLength > 128) {	
      window.alert("Your password needs to be between 8 and 128 characters. Try again.")	
      return promptGenerator() 	
    } else if (getPasswordLength >= 8 || getPasswordLength <= 128) {	
        window.alert("Your password will have " + getPasswordLength + " characters.");	
        console.log("passwordLength is " + getPasswordLength);	
    } else {	
        window.alert("Your password needs to be between 8 and 128 characters. Try again.")	
        return promptGenerator()	
    };	
    var passwordLength = parseInt(getPasswordLength);
    console.log(passwordLength);
    // Ask user if they want to include lowercase, uppercase, numeric, and special characters.	
    var confirmLowercase = window.confirm("Would you like to include lowercase characters in your password?");
    var confirmUppercase = window.confirm("Would you like to include UPPERCASE characters in your password?");
    var confirmNumeric = window.confirm("Would you like to include numeric characters in your password?");
    var confirmSpecial = window.confirm("Would you like to include special characters in your password?");
      // restart process if all for character options have been denied
      if (!confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecial) {
        window.alert("You must include at least one (1) type of character in your password. Try again.")
        return promptGenerator();
      // There might be a way to make this a loop in the future
      // 4 options are confirmed
      } else if (confirmLowercase && confirmUppercase && confirmNumeric && confirmSpecial) {
        window.alert("Your password will be " + passwordLength + " characters long. It will include lowercase, UPPERCASE, numeric, and special characters.");
      // 3 options are confirmed
      } else if (confirmLowercase && confirmUppercase && confirmNumeric && !confirmSpecial) {
        window.alert("Your password will be " + passwordLength + " characters long. It will include lowercase, UPPERCASE, and numeric characters.");
      } else if (confirmLowercase && confirmUppercase && !confirmNumeric && confirmSpecial) {
        window.alert("Your password will be " + passwordLength + " characters long. It will include lowercase, UPPERCASE, and special characters.");
      } else if (confirmLowercase && !confirmUppercase && confirmNumeric && confirmSpecial) {
        window.alert("Your password will be " + passwordLength + " characters long. It will include lowercase, numeric, and special characters.");
      } else if (!confirmLowercase && confirmUppercase && confirmNumeric && confirmSpecial) {
        window.alert("Your password will be " + passwordLength + " characters long. It will include UPPERCASE, numeric, and special characters."); 
      // 2 options are confirmed     
      } else if (confirmLowercase && confirmUppercase && !confirmNumeric && !confirmSpecial) {
        window.alert("Your password will be " + passwordLength + " characters long. It will include lowercase and UPPERCASE characters.");
      } else if (confirmLowercase && !confirmUppercase && confirmNumeric && !confirmSpecial) {
        window.alert("Your password will be " + passwordLength + " characters long. It will include lowercase and numeric characters.");
      } else if (confirmLowercase && !confirmUppercase && !confirmNumeric && confirmSpecial) {
        window.alert("Your password will be " + passwordLength + " characters long. It will include lowercase and special characters.");
      } else if (!confirmLowercase && confirmUppercase && confirmNumeric && !confirmSpecial) {
        window.alert("Your password will be " + passwordLength + " characters long. It will include UPPERCASE and numeric characters.");
      } else if (!confirmLowercase && confirmUppercase && !confirmNumeric && confirmSpecial) {
        window.alert("Your password will be " + passwordLength + " characters long. It will include UPPERCASE and special characters.");
      } else if (!confirmLowercase && !confirmUppercase && confirmNumeric && confirmSpecial) {
        window.alert("Your password will be " + passwordLength + " characters long. It will include numeric and special characters.");
      // 1 option is selected
      } else if (confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecial) {
        window.alert("Your password will be " + passwordLength + " characters long. It will include lowercase characters.");
      } else if (!confirmLowercase && confirmUppercase && !confirmNumeric && !confirmSpecial) {
        window.alert("Your password will be " + passwordLength + " characters long. It will include UPPERCASE characters.");
      } else if (!confirmLowercase && !confirmUppercase && confirmNumeric && !confirmSpecial) {
        window.alert("Your password will be " + passwordLength + " characters long. It will include numeric characters.");
      } else if (confirmLowercase && !confirmUppercase && !confirmNumeric && confirmSpecial) {
        window.alert("Your password will be " + passwordLength + " characters long. It will include special characters.");
      };
};
 



// Connect HTML button with JS and 
document.querySelector("#generate").addEventListener('click', promptGenerator);

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
