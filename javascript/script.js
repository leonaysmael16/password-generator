
// variables for special characters
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
                  
                  // variables for numbers
                  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
                // variables for small letters
                  var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
                  
                  // Variables for upper case letters
                  var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
                  
                  // function to let user choose lenght of the password
                  function getPasswordOptions() {
                    // variable for password length
                    var length = parseInt(
                      prompt('How many characters would you like your password to contain?'),
                      10
                    );
                  
                    // password length must be a number it returns if false
                    if (Number.isNaN(length)) {
                      alert('Password length must be provided as a number');
                      return null;
                    }
                  
                    // if the length is less than 8 characters, the condition ends if false
                    if (length < 8) {
                      alert('Password length must be at least 8 characters');
                      return null;
                    }
                  
                    // Checks if password is less than 128 characters, the conditions ends if false
                    if (length > 128) {
                      alert('Password length must less than 129 characters');
                      return null;
                    }
                  
                    // confirms if password has special characters
                    var hasSpecialCharacters = confirm(
                      'Click OK to confirm including special characters.'
                    );
                  
                    // confirms if password has number characters
                    var hasNumericCharacters = confirm(
                      'Click OK to confirm including numeric characters.'
                    );
                  
                    // confirms to include lowercase numbers
                    var hasLowerCasedCharacters = confirm(
                      'Click OK to confirm including lowercase characters.'
                    );
                  
                    // confirms to include uppercase characters
                    var hasUpperCasedCharacters = confirm(
                      'Click OK to confirm including uppercase characters.'
                    );
                  
                    // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
                    if (
                      hasSpecialCharacters === false &&
                      hasNumericCharacters === false &&
                      hasLowerCasedCharacters === false &&
                      hasUpperCasedCharacters === false
                    ) {
                      alert('Must select at least one character type');
                      return null;
                    }
                  
                    // store user input
                    var passwordOptions = {
                      length: length,
                      hasSpecialCharacters: hasSpecialCharacters,
                      hasNumericCharacters: hasNumericCharacters,
                      hasLowerCasedCharacters: hasLowerCasedCharacters,
                      hasUpperCasedCharacters: hasUpperCasedCharacters,
                    };
                  
                    return passwordOptions;
                  }
                  
                  // get random element from array
                  function getRandom(arr) {
                    var randIndex = Math.floor(Math.random() * arr.length);
                    var randElement = arr[randIndex];
                  
                    return randElement;
                  }
                  
                  // generates password
                  function generatePassword() {
                    var options = getPasswordOptions();
                    
                  
                    // types of chracters to include in password
                    var possibleCharacters = [];
                  
                    // Array to contain one of each type of chosen character to ensure each will be used
                    var guaranteedCharacters = [];
                  
                    // Check if an options object exists, if not exit the function
                    if (!options) return null;
                  
                    
                    if (options.hasSpecialCharacters) {
                      possibleCharacters = possibleCharacters.concat(specialCharacters);
                      guaranteedCharacters.push(getRandom(specialCharacters));
                    }
                  
                    
                    if (options.hasNumericCharacters) {
                      possibleCharacters = possibleCharacters.concat(numericCharacters);
                      guaranteedCharacters.push(getRandom(numericCharacters));
                    }
                  
                    
                    if (options.hasLowerCasedCharacters) {
                      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
                      guaranteedCharacters.push(getRandom(lowerCasedCharacters));
                    }
                  
                    
                    if (options.hasUpperCasedCharacters) {
                      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
                      guaranteedCharacters.push(getRandom(upperCasedCharacters));
                    }
                  
                    
                    for (var i = 0; i < options.length; i++) {
                      var possibleCharacter = getRandom(possibleCharacters);
                  
                      result.push(possibleCharacter);
                    }
                  
                    
                    for (var i = 0; i < guaranteedCharacters.length; i++) {
                      result[i] = guaranteedCharacters[i];
                    }
                  
          
                    return result.join('');
                  }
                  
                  // query for generate
                  var generateBtn = document.querySelector('#generate');
                  
                  // displays password in in textbox
                  function writePassword() {
                    var password = generatePassword();
                    var passwordText = document.querySelector('#password');
                  
                    passwordText.value = password;
                  }
                  
                  // generate button
                  generateBtn.addEventListener('click', writePassword);