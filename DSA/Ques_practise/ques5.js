let prompt = require('prompt-sync')();
let amount = prompt("Enter the total amount:")

let discount = 0;
if(amount>0 && amount<=5000) discount = 0;
else if(amount>5000 && amount<=7000)discount= (5/100)*amount;
else if(amount>7000 && amount<=9000) discount= (10/100)*amount;
else if(amount>9000)discount= (20/100)*amount;
else("wrong input");
console.log(Math.trunc(discount));