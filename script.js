// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var password = generatePassword(); // return password

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  // Logic for password

  var userChoice = window.prompt("How many characters would you like your password to contain?");

  var userChoice = parseInt(userChoice);

  if (userChoice <= 7) {
    window.alert("Your password must be at least 8 characters");
  } else if (userChoice >= 129) {
    window.alert("Your password must be less than 129 characters long");
  } else {
    window.prompt("What is your password?");
  }


  return 'Password'

}