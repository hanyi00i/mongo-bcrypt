const bcrypt = require("bcryptjs")

const passwordEnteredByUser = "mypass123"
const hash = "$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K"
//$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
//$2a$10$WZ2/UDNWHnWJuQk5A4H7HeN.GOeFsI8ItA6HAG3zxXjrpgfY5bbsa

bcrypt.compare(passwordEnteredByUser, hash, function(error, isMatch) {
  if (error) {
    throw error
  } else if (!isMatch) {
    console.log("Password doesn't match!")
  } else {
    console.log("Password matches!")
  }
})