// Ques 1: Write a function to add two numbers.

// let sum = function(a,b){
//     return(a+b);
// }
// console.log(sum(4,5));

// ques 2: Write a function to check whether a number is even or odd.

// let check = (n)=>{
//    if(n%2==0){
//     console.log("The number is even:")
//    }
//    else{
//     console.log("Number is odd")
//    }
// }
// let a = Number (prompt("Enter a number"));
// check(a);

// ques 3: Write a function that returns the larger of the numbers in array.

// let compare = (n) =>{
//    let arr2 = n.sort((a,b)=>a-b);
//    let largest = arr2[arr2.length-1];
//    console.log(arr2);
//    return largest;
// }
// let arr = [];
// for(i=1;i<=5;i++){
//     let number = Number(prompt("Enter numbers to be compared"))
//     arr.push(number);
// }
// let result = compare(arr);
// console.log(result);

// ques 4: Write a function to count vowels in a string.

// let count=0;

// let find = (str)=>{
//    let vowel = ['a', 'i', 'e','o','u', 'A','E', 'I', 'O', 'U']
//    for(i=0;i<str.length;i++)
//     {
//    if(vowel.includes(str[i]))
//     count +=1
//    }
//    return count;
// }
// let count_1 = find('Tarun Joshi is a good boy');
// console.log(count_1);

// ques 5: Write a function to count words in a string.

// let count=0;

// let find = (str)=>{
//     for(i=0;i<str.length;i++)
//     {
//         if(str[i]==' ')
//             count+=1
//    }
//    return count+1;
// }
// let count_1 = find('Tarun Joshi is a good boy');
// console.log(count_1);


// ques 6: Write a function to reverse a string.

// let reverse = (str)=>{
//    let reversed = str.split("").reverse().join("");
//    return reversed
// }
// let a = reverse('tarun');
// console.log(a);

// ques 7: Write a function to check if a string is a palindrome.
 
// let palindrome = (str)=>{
//    let reversed = str.split("").reverse().join("");
//     if(str==reversed){
//         console.log("String is palindrome")
//     }
//     else {
//         console.log("String is not palindrome")
//     }
// }

// let check = palindrome("tarun")
// console.log(check)

// ques 8: Write a function that accepts another function as an argument.

// let fn_1 = function(){
//     return('joshi')
// }
// let fn_2 = function(a){
//     return("Tarun" +" "+ a())
    
 
// }
// let name = fn_2(fn_1);
// console.log(name)

const bulb = document.querySelector(".bulb");
const btn = document.querySelector(".btn");
    let flag=0;

btn.addEventListener("click",()=>{

    if(flag===0){
    bulb.style.backgroundColor="yellow";
    btn.textContent="OFF";
    flag=1;
    }
    else{
    bulb.style.backgroundColor="white";
    btn.textContent="ON";
    flag=0;
    }



})



