function writePassword() {

  //prompt question and store answers
  var totalChar = parseInt(prompt("How many Characters?"));
  while (totalChar < 8 || totalChar > 128) {

    alert('Password must contain atleast 8 characters and have at most 128');
    totalChar = parseInt(prompt("How many Characters?"));
  }
  var wantUpperCase = confirm("Would you like uppercase letters?");
  var wantLowerCase = confirm("Would you like lowercase letters?");
  var wantNumbers = confirm("Would you like numbers?")
  var wantSpecialChar = confirm("Would you like special characters?")


  console.log('totalChar:', totalChar);
  console.log('wantUpperCase:', wantUpperCase);
  console.log('wantLowerCase:', wantLowerCase);
  console.log("wantSpecialChar: ", wantSpecialChar);
  console.log('wantNumbers: ', wantNumbers)
  //create options arrays
  var upperCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  var specialChar = ["!", "#", "$", "%", "&", "*", "+", "-", "<", "=", ">", "?", "@", "^", "~"]
  //initialize variables you need to create and store new password
  var lettersArr = [];
  var newPassword = "";
  //filter through conditional based on user answers

  if (totalChar >= 8 && totalChar <= 128 && wantUpperCase) {
    lettersArr = lettersArr.concat(upperCaseLetter);
  }
  if (totalChar >= 8 && totalChar <= 128 && wantLowerCase) {
    lettersArr = lettersArr.concat(lowerCaseLetter);
  }
  if (totalChar >= 8 && totalChar <= 128 && wantSpecialChar) {
    lettersArr = lettersArr.concat(specialChar);
  }
  if (totalChar >= 8 && totalChar <= 128 && wantNumbers) {
    lettersArr = lettersArr.concat(numbers);
  }
  console.log('New lettersArr:', lettersArr);

  //start of function to generate password
  //  function writePassword(password){
  //loop totalChar x times to randonly get random value from letters array
  for (i = 0; i < totalChar; i++) {
    //get random between 0-total-length of letterArr
    var randomIndexNumber = Math.floor(Math.random() * lettersArr.length);
    console.log('randomIndexNumber: ', randomIndexNumber);
    //concatonate picked letters
    newPassword = newPassword + lettersArr[randomIndexNumber];
    console.log('newPassword: ', newPassword);
  }
  console.log('final answer: ', newPassword);

  //update the text area with new password
  document.querySelector("#password").value = newPassword;
  // 
}



// Add event listener to generate button ****Partially Working****
generate.addEventListener("click", writePassword);
