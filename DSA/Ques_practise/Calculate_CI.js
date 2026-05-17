let prompt = require("prompt-sync")();

let p = prompt("Enter principle")
let r = prompt("Enter rate")
let t = prompt("Enter Time")

console.log(p*Math.pow(1+(r/100),t)-p);
