let prompt = require('prompt-sync')();

let unit = prompt("Enter the unit")

let bill =0;
if(unit<=100)
{
  bill = 4.2*unit;
}
else if(unit>100 && unit<=200)
{
  bill = 4.2*100 + 6*(unit-100);
}
else if(unit>200 && unit<=400)
{
  bill = 4.2*100 + 6*100 + 8*(unit-200);
}
else if(unit>400)
{
  bill = 4.2*100 + 6*100 + 8*200 + 13*(unit-400);
}


console.log(bill);