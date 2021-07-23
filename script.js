// Assignment code here
//List of Arrays
var capitalAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'z', 'y', 'z'];
var specialChar = ['!', '@', '#', '$', '&'];
var genNumb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//Declare variables called in functions
let allChar = [];
let passWord = [];

//UserPrompt: Verify the content, convert the prompt to a number
// function questions() {
//   var userPrompt = window.prompt("Select a password length between 8 and 128 characters");
//   var userChars = parseInt(userPrompt);
//   if (Number.isInteger(userChars) && (userChars >= 8 && userChars <= 128)) {
//     return userChars;
//   } else {
//     window.prompt("Please select password length between 8 and 128 characters")
//     return false;
//   }
// };

function questions() {
  console.log("in Questions");
  var userPrompt = window.prompt("Select a password length between 8 and 128 characters");
  var userChars = parseInt(userPrompt);
  console.log("USER CHARACTER AMOUNT");
  console.log(userChars);
  if (Number.isInteger(userChars) && (userChars >= 8 && userChars <= 128)) {
    console.log("USER CHARACTER AMOUNT");
    console.log(userChars);
    return userChars;
  } else {
    console.log("PAST PROMPT 1");
    userPrompt = undefined;
    userChars = undefined;
    delete (userChars);
    delete (userPrompt);
    questions();
  };
};


//Characters to include | Selected through prompts
function includeChars() {
  var capitalLets = window.confirm("Should capital letters be included in your password?")
  if (capitalLets) {
    allChar.push(capitalAlpha)
  };
  var lowerLets = window.confirm("Should lowercase letters be included in your password?")
  if (lowerLets) {
    allChar.push(lowerAlpha)
  };
  var specials = window.confirm("Should special characters be included in your password?")
  if (specials) {
    allChar.push(specialChar)
  };
  var numbnumbs = window.confirm("Should numbers be included in your password?")
  if (numbnumbs) {
    allChar.push(genNumb)
  };
};

//Multi-dimensional array to assign the characters to the password array
function generatePassword() {
  console.log("in generate password");
  var userCharAmt = questions();
  console.log("User Character Amount : " + userCharAmt);
  includeChars();
  console.log(allChar);
  for (var i = 0; i < userCharAmt; i++) {
    var first = Math.floor(Math.random() * 4);
    var arrLength = (allChar[first].length);
    var second = Math.floor(Math.random() * arrLength);
    var j = (allChar[first][second]);
    passWord.push(j);
  };
  passWord = passWord.join('').trim();
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("in writePassword");
  generatePassword();
  passwordText = document.querySelector("#password");
  passwordText.value = passWord;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);