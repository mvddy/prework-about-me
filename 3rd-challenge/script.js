// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword = document.querySelector("#generate")
var password = document.querySelector(".password");
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 12;
var password = "";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var password = document.querySelector("#password");
  passwordText.value = password;

}
function generatePassword() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", generatePassword);
password.setAttribute("password");

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }

function generatePassword(event) {
  Math.random();
  event.preventDefault();
  console.log("hey");
  var response = " Password Confirmed " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  generatePassword.textContent = total;
}

passwordword.len

generateBtn.addEventListener("click", showResponse);