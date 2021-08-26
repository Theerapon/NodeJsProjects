const fs = require('fs');

// read the file
const databuffer = fs.readFileSync('1-json.json')
const userData = JSON.parse(databuffer.toString())

// set the new user data
userData.name = "FAKIE"
userData.age = 22
console.log(userData)

// overwrite the old user data
fs.writeFileSync('1-json.json', JSON.stringify(userData))

