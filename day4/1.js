// let func1 = ()=>{} // arrow function

// function func2() {} // regular function / function declaration

// let func3 = ()=>{} // function as a expression

// let func4 = function(){} // function as a expression

// ()=>{} // annonymous function

// function () {} // annonymous function

// 1. Write a regular function named `greet` that prints `Welcome to JavaScript!`.
// Regular function

// function greet() {
//   console.log("Welcome to Javascript !");
// }
// greet()

// [ ] 
// 2. Write a function that accepts your name as a parameter and prints a greeting.
// Function parameters

// function accept(name){
    
//    console.log(`hello ${name} `)
// }
// accept("Apeksha")

// [ ] 
// 3. Write a function that accepts two numbers and returns their sum.
// Return statement



// function sum(a,b){
//     console.log(a+b)
// }
// sum(10,20)
// // [ ] 
// 5. Write an arrow function that accepts a number and returns its square.
// Arrow function

// let funct = (a) => {
//     let b = a * a;
//     return b;
// };
// console.log(funct(5));
// [ ] 
// 6. Write an arrow function that checks whether a number is even or odd.
// Arrow function

// let arrow=(num)=>{
//     if (num%2==0){
//         console.log("Even number")
//     }
//     else{
//         console.log("ODD number")
//     }
// }
// arrow(21)
// // [ ] 
// 7. Store a function expression in a variable named `subtract` that subtracts two numbers.
// Function expression
// let subtract = function(a,b){
    
//     return a-b;
// }
// console.log(subtract(500,35))


// [ ] 
// 8. Create an anonymous function and assign it to a variable named `cube`. Return the cube of a given number.

// Anonymous function

// cube=(a)=>{
//     return a**3
    
// }
// console.log(cube(2))


// [ ] 
// 10. Write a function declaration named `checkNumber` that prints whether a number is positive, negative, or zero.
// Function declaration
// function checkNumber(a) {
//     if (a>0){
//         console.log("Positive");
        
//     }
//     else if (a<0){
//        console.log("Negative");
//     }
//     else{
//         console.log("Zero");
//     }
// }
// checkNumber(12)


// [ ] 
// 11. Write a function that accepts three numbers and returns the greatest number.
// Regular function
// function three(a,b,c) {
//     if (a>b && a>c)
//         {
//         return `${a} is greater than ${b} and ${c} `;
//     }
//     else if (b>c && b>c)
//         {
//         return `${b} is greater than ${a} and ${c} `;
//     }
//     else (c>a && c>b)
//     {
//         return `${c} is greater than ${b} and ${a} `;
//     }
// }
// console.log(three(10,5,2));



// [ ] 
// 12. Write an arrow function that accepts two numbers and returns the smaller number.

// Arrow function 
// let two = (a,b)=>{
//     if (a<b){
//         return `${a} is smallest than ${b}  `;
//   }
//     else{
//         return `${b} is smallest than ${a}  `;

//     }
    
// } 
// console.log(two(19,10))



// [ ] 
// 13. Create a function expression named through a variable `isEligible` that returns whether a given age is at least 18.
// Function expression 

// let isEligible = (age)=>{
//     if (age>18){
//         return `Person is eligible having age ${age}`
//     }
//     else{
//         return `Person is  not eligible having age ${age}`

//     }
// } 
// console.log(isEligible(12))



// [ ] 
// 14. Write a regular function that accepts a name and a country. Give the country a default value of `India`.
// Default parameters

// function info(name,country) {
//     console.log(name,country);
    
// } 
// info("Apeksha","INDIA")

// [ ] 
// 15. Write a function that accepts marks and returns `Pass` if marks are at least 35; otherwise, return `Fail`.

// Return statement 
// let Result = (marks)=>{
//     if (marks>=35){
//         return `Pass`;
        
//     }
//     else{
//         return `Fail`;
//     }
// } 
// console.log(Result(35))




// [ ] 
// 16. Write a function that accepts a number and returns its factorial using a loop.

// Regular function + loop 
// function func(n) {
//     let fact = 1;

//     for (let i = 1; i <= n; i++) {
//         fact = fact * i;
//     }

//     return fact;
// }

// console.log(func(5));


// [ ] 
// 17. Write an arrow function that accepts a number `n` and returns the sum of numbers from 1 to `n`.

// Arrow function + loop 
// let func1 = (n)=>{
//     let a=0
//     for (i=1;i<n+1;i++){
//         a=a+i
        

//     }
// console.log(a)
// } 
// func1(10)



// [ ] 
// 18. Create a function expression that prints the multiplication table of a given number from 1 to 10.

// Function expression + loop  

// let table = (num)=>{
//     for (i=1;i<11;i++){
//         console.log( `${num} * ${i} = ${num*i}`)
//     }
// } 
// table(3)


// [ ] 
// 20. Write an arrow function that accepts marks and returns a grade: A for 90+, B for 75–89, C for 60–74, D for 35–59, otherwise Fail.
// Arrow function + conditionals 
// let result = (marks)=>{
//     if (marks>=90){
//         return `Grade A+`;
//     }
//     else if( marks>=75) {
//         return `Grade B+`;

//     }
//     else if( marks>=60) {
//         return `Grade C+`;

//     }
//     else ( marks>=35) 
//     {
//         return `Grade D`;

//     }
// } 
// console.log(result(95))




// [ ] 
// 21. Assign an anonymous function to a variable `calculateSI` that calculates simple interest using principal, rate, and time.

// Anonymous function

// let calculateSI =(p,r,t) =>
//     {

//       let  si=(p*r*t)/100;
//     console.log(si)
// }
// calculateSI(10,20,30)




// [ ] 
// 24. Write an arrow function that accepts a year and checks whether it is a leap year.

// Arrow function 
let leap= (year)=>{
    if (year%4==0){
        return `year ${year} is leap`;
    }
    else{
        return `year ${year} is not  leap`;
    }
} 
console.log(leap(2004))




// [ ] 
// 25. Create a function expression that accepts two numbers and an operator (`+`, `-`, `*`, or `/`) and returns the result. Handle division by zero.

// Function expression  let func3 = ()=>{} // function as a expression




// [ ] 
// 26. Write a function that accepts a positive integer and returns the sum of its digits. For example, 123 should return 6.

// Function declaration




// [ ] 
// 27. Write an IIFE that accepts two numbers as arguments and prints the greater number.

// IIFE




// [ ] 
// 28. Write the same addition operation in three ways: a function declaration, a function expression, and an arrow function. Call each and print the result.

// Function types   let func1 = ()=>{} // arrow function





// [ ] 
// 29. Declare a variable inside a function and try to access it outside. Observe the result, then explain why it happens.

// Function scope




// [ ] 
// 30. Create one function declaration and one function expression. Try calling each before its definition or assignment. Observe and explain the difference.

// Hoisting