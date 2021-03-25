// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create function to enable the character codes to be stored as an array rather than writing out all the available characters to keep the code more concise. 
function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

// Add the character codes to be used in the password generator.
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97,122);
var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65,90);
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57);
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64))
.concat(arrayFromLowToHigh(91, 96))
.concat(arrayFromLowToHigh(123, 126));

var charCodes = [];

// Create the generate password function.
// Create a funtion that allows the user to choose specific criteria to be used in the generated password.
function generatePassword() {

    // Get the criteria from the user.
    var passwordLength = prompt('How many characters would you like your password to contain?')
    var useLowercase = confirm("Include Lowercase: ok=yes cancel=no");
    var useUppercase = confirm("Include Uppercase: ok=yes cancel=no");
    var useNumbers = confirm("Include Numbers: ok=yes cancel=no");
    var useSymbols = confirm("Include Symbols: ok=yes cancel=no");

    // Concatenate the arrays from which password will be generated.
    if (useLowercase) {
      charCodes = charCodes.concat(LOWERCASE_CHAR_CODES);  
    }

    if (useUppercase) {
      charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);  
    }

    if (useNumbers){
      charCodes = charCodes.concat(NUMBER_CHAR_CODES);  
    }

    if (useSymbols) {
        charCodes = charCodes.concat(SYMBOL_CHAR_CODES);  
    }

    var passwordCharacters = []
    for (let i=0; i < passwordLength; i++) {
        var character = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(character));
    }

    return passwordCharacters.join('')
}

// Write password to the #password input.
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");  
    passwordText.value = password; 
}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword)