// Assignment code here

//Password Prompt
var userCharAmt = window.prompt("How long does your password need to be?")

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
let allChar = [capitalAlpha, lowerAlpha, specialChar, genNumb];

var passWord = [];

console.log(allChar);

//label of test
console.log("All Characters Length of Capital Alpha");
//length test on allChar at position 0
console.log(allChar[0].length);

//This returns all of the keys within the object. How do I get values? 
console.log(allChar[0][0]);

var i = Math.floor(Math.random() * 4);
//Label
console.log("Return the Array of i");
console.log(allChar[i])
console.log("Return the Length of i");
console.log(allChar[i].length);
var k = allChar[i].length

var j = Math.floor(Math.random() * k)
//Value of j
console.log("Value of j");
console.log(j);

//Label
console.log("All Characters Passed with Second");
console.log(allChar[i][j]);


//Multi-dimensional array
function generatePassword() {
  passWord = [];
  for (var i = 0; i < userCharAmt; i++) {
    var first = Math.floor(Math.random() * 4)
    console.log("First Array Value")
    console.log(first)
    var arrLength = allChar[first].length
    console.log("First Array Value")
    console.log(arrLength)
    var second = Math.floor(Math.random() * arrLength)
    console.log("Third Array Value")
    console.log(second)
    console.log("Password Value")
    console.log(allChar[first][second]);
    console.log(i);
    var j = allChar[first][second];
    passWord.push(j);
  }
  passWord = passWord.join('').trim();
};

//Show Generated Password


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passWord;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
