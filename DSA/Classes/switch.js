// Program to check the number of vowel and consonent in a word:

let prompt = require('prompt-sync')();
let str_1 = prompt("Enter a string");
let cons =0, vowel= 0,space=0;


for(let i=0; i<str_1.length;i++){
     let char = str_1.charAt(i);  
     switch(char){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U': vowel++;
        break;
        case ' ': space++;
        break;
        default:  cons++;
     } 
}
console.log("Consonent: "+ cons);
console.log("vowel: "+ vowel);
console.log("spaces: "+ space);