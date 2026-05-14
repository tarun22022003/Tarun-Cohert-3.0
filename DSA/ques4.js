let prompt = require('prompt-sync')();
let a = prompt("Enter a year:")

if ((a % 400 === 0) || (a % 4 === 0 && a % 100 !== 0))console.log("This year is a leap year");

else console.log("Year is not a leap year");


