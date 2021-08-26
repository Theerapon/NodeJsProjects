const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Tyan Holiday',
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const databuffer = fs.readFileSync('1-json.json')
const userData = JSON.parse(databuffer.toString())
userData.name = "FAKIE"
userData.age = 22
console.log(userData)
fs.writeFileSync('1-json.json', JSON.stringify(userData))

