// question 1

// let arr =[100,200,500,300,800,250]
// let products = arr.filter((price)=>price>300)
// console.log(products);


//Question 2
// let marks =[80,90,70,85,95];
// let sum =0;
// let avg = marks.forEach((elem)=>{
//    sum = (sum+elem);
// })
// let average_marks = sum/(marks.length);
// console.log(average_marks);
// or using reduce

// let total = marks.reduce((acc, currentvalue)=>{
//     return acc + currentvalue
// },0)
// let avg = total/marks.length;
// console.log(avg);

// question 3 find the number with highest count with it's count

// let numbers =[1,2,3,2,4,2,5,1,1,1];
// let count = {};
// let check = numbers.forEach((elem)=>{
//     let num = elem;
//     if(count[num]){
//         count[num]= count[num]+1;
//     }
//     else{
//         count[num] = 1
//     }
// })
// console.log(count);
// let most_freq = 0;
// let numberwithmaxfreq;
// for(let key in count){
//     if(count[key]>most_freq){
//         most_freq=count[key];
//         numberwithmaxfreq = key;
//     } 
// }
// console.log(numberwithmaxfreq);


//  Objects questions
// let user = {
//     name:"Ritik",
//     age:20
    
// };

// user.age = 21;
// user.city ="Bhopal";
// console.log(user);
// for(let key in user){
//     console.log(key + ":" + user[key]);
// }

// Ques: find the highest paid employee

// let employees ={
//     aman:25000,
//     ritik:50000,
//     priya: 45000
// };

// let highest_pay =0;
// let highestpayemployee;
// for(let key in employees){
// if(employees[key]>highest_pay){
//     highest_pay=employees[key];
//     highestpayemployee = key;
// }
// }
// console.log(highestpayemployee);

//  questions for functions

// let greet = (name)=>{
//     console.log("Good Morning" + " " + name)
// }
// greet("tarun");

// let calcDiscount =(price)=>{
//     let finalPrice = (price - (10/100)*price);
//     console.log(finalPrice);

// }

// calcDiscount(500);


    // let total =0;
    // let sum =(...num) =>{
    // for(let i of num){
    //     total += i;
    // }
    // console.log(total);
    // }

    // sum(1,2,3,4,5,5,6,6,6,7,5);

    let users = [
        {name:"Ritik", age:20},
        {name:"Aman", age:16},
        {name:"Priya", age:25},
    ]

    let result =[]

    let getadults = (input)=>{
        for(let i=0; i<input.length; i++){
            if(input[i].age>=18){
                result.push(input[i])
            }
        }
        console.log(result);
    }

    getadults(users);