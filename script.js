// Assignment code here


//Restrict Password to Numbers Only.
//How to I set a value to exit if this is true? Do I wrap it all in an if statement?
// if (Number.isInteger(userCharAmt) === false) {
//   userCharAmt = window.prompt("Please use numbers to assign the password length")
// };

//List of Arrays
var capitalAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'z', 'y', 'z'];
var specialChar = ['!', '@', '#', '$', '&'];
var genNumb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let allChar = [];

var passWord = [];
var userCharAmt;

console.log(allChar);

//Prompt
var userCharAmt;

userCharAmt = window.prompt("Select a password length between 8 and 128 characters");

function questions() {
  if (Number.isInteger(userCharAmt) && (userCharAmt >= 8 && userCharAmt <= 128)) {
    return true;
  } else {
    window.prompt("Please select password length between 8 and 128 characters")
    return false;
  }
};

function includeChars() {
  var capitalLets = window.confirm("Should capital letters be included in your password?")
  if(capitalLets){
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
}

//Multi-dimensional array
function generatePassword() {
  console.log("in generate password");
  console.log("User Character Amount : " + userCharAmt);
  questions();
  includeChars();
  passWord = [];
  for (var i = 0; i<userCharAmt; i++) {
    var first = Math.floor(Math.random() * 4)
    console.log("First Array Value")
    console.log(first)
    var arrLength = (allChar[first].length)
    console.log("Array Length")
    console.log(arrLength)
    var second = Math.floor(Math.random() * arrLength)
    console.log("Second Value")
    console.log(second)
    console.log("Password Value")
    console.log(allChar[first][second]);
    console.log(i);
    var j = allChar[first][second];
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
  var password = passWord;
  password = document.querySelector("#password");
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
