// Assignment code here

// Static values for the password
// .split method will break the string value into substrings without having to split the letters manually
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var lowercaseArr = lowercase.split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseArr = uppercase.split("");
var numeric = "0123456789";
var numericArr = numeric.split("");
var special = "~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/";
var specialArr = special.split("");

// Generate button
var generateBtn = document.querySelector("#generate");

// Connect HTML button with JS 
document.querySelector("#generate").addEventListener('click', generatePassword);

// Main function
var generatePassword = function() {	
  // Define password length	
  var getPasswordLength = window.prompt("How long would you like your password to be? (min 8 characters, max 128.");	
    if (getPasswordLength === "" || getPasswordLength === null) {	
      window.alert("Your password needs to be between 8 and 128 characters. Try again.")	
      return generatePassword()  	
    } else if (getPasswordLength < 8 || getPasswordLength > 128) {	
      window.alert("Your password needs to be between 8 and 128 characters. Try again.")	
      return generatePassword() 	
    } else if (getPasswordLength >= 8 || getPasswordLength <= 128) {	
      window.alert("Your password will have " + getPasswordLength + " characters.");	
      console.log("passwordLength is " + getPasswordLength);	
    } else {	
      window.alert("Your password needs to be between 8 and 128 characters. Try again.")	
      return generatePassword()	
    };	
    // length is defined and stored in var passwordLength
    var passwordLength = parseInt(getPasswordLength);
    console.log(passwordLength);
    
  // Variables for storing data according to user preference
  // charContainer is an empty array
  charContainer = [];
  console.log(charContainer);
  
  // Ask user if they want to include lowercase, uppercase, numeric, and special characters.	
  var confirmLowercase = window.confirm("Would you like to include lowercase characters in your password?");
    if (confirmLowercase) {
      window.alert("Your password WILL contain lowercase characters.");
      //Construct the Array. Prototype allows to add new properties to an existing object constructor (array). Push allows to append this new property. Apply makes it a function.
      Array.prototype.push.apply(charContainer, lowercaseArr);
    } else {
      window.alert("Your password WILL NOT contain lowercase characters.");
    };
  var confirmUppercase = window.confirm("Would you like to include UPPERCASE characters in your password?");
    if (confirmUppercase) {
      window.alert("Your password WILL contain UPPERCASE characters.");
      Array.prototype.push.apply(charContainer, uppercaseArr);
    } else {
      window.alert("Your password WILL NOT contain UPPERCASE characters.");
    };
  var confirmNumeric = window.confirm("Would you like to include numeric characters in your password?");
    if (confirmNumeric) {
      window.alert("Your password WILL contain numeric characters.");
      Array.prototype.push.apply(charContainer, numericArr);
    } else {
      window.alert("Your password WILL NOT contain numeric characters.");
    };
  var confirmSpecial = window.confirm("Would you like to include special characters in your password?");
    if (confirmSpecial) {
      window.alert("Your password WILL contain special characters.");
      Array.prototype.push.apply(charContainer, specialArr);
    } else {
      window.alert("Your password WILL NOT contain special characters.");
    };
    console.log(charContainer);

  // restart process if all for character options have been denied
  if (!confirmLowercase && !confirmUppercase && !confirmNumeric && !confirmSpecial) {
    window.alert("You must include at least one (1) type of character in your password. Try again.")
    return promptGenerator();
  // There might be a way to make this a loop in the future
  } else {
  // .join reverses the effects of the method split - it will give the user one singular string value.
    window.alert("Your password will be " + passwordLength + " and will contain some of the next characters: " + charContainer.join("") + ".");
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      // Math random generates a random number in the range of 0 to less than 1. 
      // That number is multiplied by the length of the array
      // Math floor rounds up that number to a whole number which becomes variable random
      var random = Math.floor(Math.random()*charContainer.length);
      password += charContainer[random];
      console.log(random)
      console.log(password);
    };
    return password;
  };
  // Calculate password with a for loop that is repeated as many times as characters are needed for the password.
  // password should be a string
};


// Display password on screen
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

