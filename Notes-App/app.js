const validator = require('validator');
const getNotes = require('./notes');

console.log(getNotes());

console.log(validator.isEmail('theerapon.nanoi.185@gmail.com'));
console.log(validator.isURL('theerapon.com'));

// const add = require('./utils')
// const sum = add(4, -2)
// console.log(sum)