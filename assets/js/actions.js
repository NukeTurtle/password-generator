const generateBtn = document.querySelector("#generateBtn");
const passwordDisplay = document.querySelector("#password");
const passwordBlock = document.querySelector("#passwordBlock");

if(passwordDisplay.innerHTML === ""){
    passwordBlock.style.display = "none";
}

generateBtn.addEventListener("click", function() {
  let length = parseInt(
    prompt("Enter the length of the password (number between 8-128 characters):")
  );
  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(
      prompt("Invalid input. Enter the length of the password (number between 8-128 characters):")
    );
  }
  let includesLowercase = confirm("Include lowercase characters?");
  let includesUppercase = confirm("Include uppercase characters?");
  let includesNumeric = confirm("Include numeric characters?");
  let includesSpecial = confirm("Include special characters !\"#$%&'() *+,-./:;<=>?@[\\]^_`{|}~");
  while (!includesLowercase && !includesUppercase && !includesNumeric && !includesSpecial) {
    alert("At least one character type must be selected.");
    includesLowercase = confirm("Include lowercase characters?");
    includesUppercase = confirm("Include uppercase characters?");
    includesNumeric = confirm("Include numeric characters?");
    includesSpecial = confirm("Include special characters (!\"#$%&'() *+,-./:;<=>?@[\\]^_`{|}~)?");
  }

  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numeric = "0123456789";
  let special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let passwordChars = "";
  if (includesLowercase) passwordChars += lowercase;
  if (includesUppercase) passwordChars += uppercase;
  if (includesNumeric) passwordChars += numeric;
  if (includesSpecial) passwordChars += special;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += passwordChars.charAt(
      Math.floor(Math.random() * passwordChars.length)
    );
  }
  
  passwordDisplay.textContent = password;
  passwordBlock.style.display = "block";
});