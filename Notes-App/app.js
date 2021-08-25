const chalk = require('chalk')
const validator = require('validator');
const getNotes = require('./notes');

console.log(getNotes());

console.log(validator.isEmail('theerapon.nanoi.185@gmail.com'));
console.log(validator.isURL('theerapon.com'));
console.log(chalk.green('Success!'))
console.log(chalk.bold.green('Success!'))
console.log(chalk.bold.green.inverse('Success!'));

// const add = require('./utils')
// const sum = add(4, -2)
// console.log(sum)