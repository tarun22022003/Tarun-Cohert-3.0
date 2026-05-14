let prompt = require('prompt-sync')();
let a = prompt("Enter a number:")
let b = prompt("enter a number:")
let c= prompt("enter a number:")

if(a>b && a>c) console.log("a is greater");
else if(b>a && b>c) console.log("b is greater");
else console.log("c is greater");


