// Assignment Code
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const lowerCaseCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const upperCaseCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

let generateBtnEl = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  if (password === undefined) {
    return
  }

  passwordText.value = password;

  setTimeout(function () {
    passwordText.value = "...Removing generated password for your security...";
    setTimeout(function () {
      passwordText.value = "...Your welcome...";
      setTimeout(function () {
        passwordText.value = "";
      }, 1500)
    }, 3000)
  }, 10000)
}

function generatePassword() {
  let selectedOptions = getUserSelection()

  if (selectedOptions === undefined) {
    return
  }

  let { length, lowercase, uppercase, specialChars, numbers } = selectedOptions
  let possibleCharacters = [];
  let generatedPassword = "";

  if (lowercase) {
    possibleCharacters = [...possibleCharacters, ...lowerCaseCharacters]
  }
  if (uppercase) {
    possibleCharacters = [...possibleCharacters, ...upperCaseCharacters]
  }
  if (specialChars) {
    possibleCharacters = [...possibleCharacters, ...specialCharacters]
  }
  if (numbers) {
    possibleCharacters = [...possibleCharacters, ...numericCharacters]
  }

  for (i = 0; i < length + 1; i++) {
    let randomCharIndex = Math.floor(Math.random() * possibleCharacters.length)
    generatedPassword += possibleCharacters[randomCharIndex]
  }
  return generatedPassword
}

function getUserSelection() {
  let numberOfChars = parseInt(prompt(`How many characters would you like your password to be?
  Please select a number between 8 and 128.`))

  if (Number.isNaN(numberOfChars)) {
    alert("You must enter a number.")
    return
  }
  if (numberOfChars < 8) {
    alert("You must include at least 8 characters.")
    return
  } else if (numberOfChars > 128) {
    alert("You may not select more than 128 characters.")
    return
  }

  let useLowerCase = confirm("Would you like your password to include lowercase letters?")
  let useUpperCase = confirm("Would you like your password to include uppercase letters?")
  let useSpecialChars = confirm("Would you like your password to include special characters?")
  let useNumbers = confirm("Would you like your password to include numeric characters?")

  if (!useLowerCase && !useUpperCase && !useSpecialChars && !useNumbers) {
    alert("You need to select a minimum of one character type.")
    return
  }

  let optionObj = {
    length: numberOfChars,
    lowercase: useLowerCase,
    uppercase: useUpperCase,
    specialChars: useSpecialChars,
    numbers: useNumbers
  }
  return optionObj
}
// Add event listener to generate button
generateBtnEl.addEventListener("click", writePassword);
