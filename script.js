// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  // Return password
  var password = generatePassword();

  // Selects the password text area
  var passwordText = document.querySelector("#password");

  // Applies the input (characters)
  passwordText.value = password;
}


function generatePassword() {

  // Logic for password
  var userChoice = window.prompt("How many characters would you like your password to contain?");

  // Converts string to number
  userChoice = parseInt(userChoice);

  var passwordText = "";

  // Validation for the object
  if (userChoice < 8) {
    window.alert("Your password must be at least 8 characters")
    return generatePassword();
  } else if (userChoice > 128) {
    window.alert("Your password must be less than 129 characters long")
    return generatePassword();
  } else if (!userChoice) {
    return;
  };

  // Defining the objects to be added added and their properties to begin concatenation process
  var strings = {
    lowercaseCharacters: 'abcdefghijklmnopqrstuvwxyz',
    uppercaseCharacters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numericCharacters: '0123456789',
    specialCharacters: '!?@#$%^&*'
  };

  // Pop-up window asking user if they want to use lowercase characters
  var lowercaseCharacters = window.confirm("Do you want the password to contain lowercase characters?")

  if (lowercaseCharacters) {
    passwordText += strings.lowercaseCharacters;
  };

  // Pop-up window asking user if they want use uppercase characters
  var uppercaseCharacters = window.confirm("Do you want the password to contain uppercase character?")

  if (uppercaseCharacters) {
    passwordText += strings.uppercaseCharacters;
  };

  // Pop-up window asking user if they want to use numbers
  var numericCharacters = window.confirm("Do you want the password to contain numbers?")

  if (numericCharacters) {
    passwordText += strings.numericCharacters;
  };

  // Pop-up window asking user if the want to use symbols
  var specialCharacters = window.confirm("Do you want the password to contain symbols?")

  if (specialCharacters) {
    passwordText += strings.specialCharacters;
  };

  // After passwordText has been concatenated, each character is randomly chosen one by one until the specified length (userChoice) is achieved
  var password = "";
  for (let i = 0; i < userChoice; i++) {
    password += passwordText.charAt(Math.floor(Math.random() * passwordText.length))

  };

  // Returns the password within the text area
  return password
};

// Runs the function when button is clicked
generateBtn.addEventListener("click", writePassword);

