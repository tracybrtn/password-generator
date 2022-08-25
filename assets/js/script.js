// Assignment code here

// function to generate a random password 
//function to set password length


// PASSWORD PROMPTS STARTS HERE
// Connect HTML button with JS and 
document.querySelector("#generate").addEventListener('click', generatePassword);


// Start generating the password
function generatePassword() {
  var passwordLength = window.prompt("How long would you like your password to be? (min 8 characters, max 128.");
    if (passwordLength === "" || passwordLength === null) {
      window.alert("Your password needs to be between 8 and 128 characters. Try again.")
      return generatePassword()  
    } else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Your password needs to be between 8 and 128 characters. Try again.")
      return generatePassword() 
    } else if (passwordLength >= 8 || passwordLength <= 128) {
        window.alert("Your password will have " + passwordLength + " characters.");
        console.log(passwordLength);
    } else {
        window.alert("Your password needs to be between 8 and 128 characters. Try again.")
        return generatePassword()
      };
  var passwordLowercase = window.prompt("Would you like to include lowercase characters in your password?");
    if (passwordLowercase === "yes" || passwordLowercase === "Yes" || passwordLowercase === "YES") {
      window.alert("Your password WILL contain lowercase characters.");
      console.log(passwordLowercase);
    } else if (passwordLowercase === "no" || passwordLowercase === "No" || passwordLowercase === "NO") {
      window.alert("Your password WILL NOT contain lowercase characters.");
    } else {
      window.alert("You must choose YES or NO. Try again.");
      return generatePassword();
    };
  var passwordUppercase = window.prompt("Would you like to include UPPERCASE characters in your password?");
    if (passwordUppercase === "yes" || passwordUppercase === "Yes" || passwordUppercase === "YES") {
      window.alert("Your password WILL contain UPPERCASE characters.");
      console.log(passwordUppercase);
    } else if (passwordUppercase === "no" || passwordUppercase === "No" || passwordUppercase === "NO") {
      window.alert("Your password WILL NOT contain UPPERCASE characters.");
    } else {
      window.alert("You must choose YES or NO. Try again.");
      return generatePassword();
    };
  var passwordNumeric = window.prompt("Would you like to include numeric characters in your password?");
    if (passwordNumeric === "yes" || passwordNumeric === "Yes" || passwordNumeric === "YES") {
      window.alert("Your password WILL contain numeric characters.");
      console.log(passwordNumeric);
    } else if (passwordNumeric === "no" || passwordNumeric === "No" || passwordNumeric === "NO") {
      window.alert("Your password WILL NOT contain numeric characters.");
    } else {
      window.alert("You must choose YES or NO. Try again.");
      return generatePassword();
    };
  var passwordSpecial = window.prompt("Would you like to include special characters in your password?");
    if (passwordSpecial === "yes" || passwordSpecial === "Yes" || passwordSpecial === "YES") {
      window.alert("Your password WILL contain special characters.");
      console.log(passwordSpecial);
    } else if (passwordSpecial === "no" || passwordSpecial === "No" || passwordSpecial === "NO") {
      window.alert("Your password WILL NOT contain special characters.");
    } else {
      window.alert("You must choose YES or NO. Try again.");
      return generatePassword();
    };
};

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
