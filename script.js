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

  userChoice = parseInt(userChoice);

  var passwordText = "";


  if (userChoice < 8) {
    window.alert("Your password must be at least 8 characters")
    return generatePassword();
  } else if (userChoice > 128) {
    window.alert("Your password must be less than 129 characters long")
    return generatePassword();
  } else if (!userChoice) {
    return;
  };


  var strings = {
    lowercaseCharacters: 'abcdefghijklmnopqrstuvwxyz',
    uppercaseCharacters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numericCharacters: '0123456789',
    specialCharacters: '!?@#$%^&*'
  };

  var lowercaseCharacters = window.confirm("Do you want the password to contain lowercase characters?")

  if (lowercaseCharacters) {
    passwordText += strings.lowercaseCharacters;
  };

  var uppercaseCharacters = window.confirm("Do you want the password to contain uppercase character?")

  if (uppercaseCharacters) {
    passwordText += strings.uppercaseCharacters;
  };

  var numericCharacters = window.confirm("Do you want the password to contain numbers?")

  if (numericCharacters) {
    passwordText += strings.numericCharacters;
  };

  var specialCharacters = window.confirm("Do you want the password to contain symbols?")

  if (specialCharacters) {
    passwordText += strings.specialCharacters;
  };

  var password = "";
  for (let i = 0; i < userChoice; i++) {
    password += passwordText.charAt(Math.floor(Math.random() * passwordText.length))



  };

  console.log(password);

  return password
};


generateBtn.addEventListener("click", writePassword);

