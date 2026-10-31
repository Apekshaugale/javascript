// 11. Write a regular function that calculates the factorial of a number using a loop.
// function demo(a)
// {
//  let b=1
//  for (i=1;i<a+1;i++){

//     b=b*i  
//  }
// console.log(b)
// }
// demo(6)


// [ ] 
// 12. Write an arrow function that returns the sum of all numbers from 1 to n.
// let a=0
// let demo = (b)=>
//     {
//     for (i=1;i<b+1;i++){
//         a+=i
//     }
//     return a ;
    
// }
// console.log(demo(25))

// [ ] 
// 13. Create a function expression that checks whether a number is prime.

// [ ] 
// 14. Write a function that accepts a number and returns its reversed digits. Example: 1234 → 4321.



// [ ] 
// 15. Write a function named `calculate` that accepts two numbers and an operator (`+`, `-`, `*`, `/`) and returns the result. Handle division by zero.

// let calculate = (a, b, operator) => {
//     if (operator === "+") {
//         return a + b;
//     } 
//     else if (operator === "-") {
//         return a - b;
//     } 
//     else if (operator === "*") {
//         return a * b;
//     } 
//     else if (operator === "/") {
//         if (b === 0) {
//             return "Cannot divide by zero";
//         }
//         return a / b;
//     } 
   
// };
//  console.log(calculate(4, 8, "+"));
//  console.log(calculate(4, 8, "-"));
// console.log(calculate(4, 8, "*"));
// console.log(calculate(4, 0, "/"));

// [ ] 
// 16. Write an IIFE that calculates the sum of all even numbers from 1 to 50 and prints the result.
// (function(num){
//     let a=0
//     for(i=0;i<num+1;i++){
//         if (i%2==0){
//             a+=i
//         }
//     }
//     console.log(a);
    
// })
// (50)


// [ ] 


// [ ] 
// 18. Write the same addition operation using a function declaration, a function expression, and an arrow function. Call all three.
// function declaration
// function demo(a,b){
//      console.log(a+b);   
// }
// demo(5,5)

// function expression
// let b=(a,n)=>{
//         console.log(a+n);
        
// }
// b(10,90)

// an arrow function.
//let fun =(a)=>{b}


// 19. Create a function `execute` that accepts a callback function and calls it. Pass a regular function as the callback.
// function execute(callback){
//     console.log("hello") ; 
//    //calling callback and passing regular function as a callback
//    callback();

// function demo(){
//     console.log("helooooo");
//    }
//    demo()
  

// }
// execute((message)=>console.log("message"));



function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    callback("Data fetched successfully!");
  }, 2000);
}
fetchData((message) => console.log(message)); 


// [ ] 
// 20. Write a function `calculate(a, b, callback)` that performs addition and passes the result to the callback. Example: `calculate(10, 5, result => console.log(result))`.



// [ ] 
// 21. Write a function `checkNumber(n, callback)` that checks whether n is positive or negative and passes the result to a callback for printing.



// [ ] 
// 22. Create a function `operate(a, b, callback)` that passes two numbers to a callback. Use it to perform multiplication.



// [ ] 
// 23. Write a function `processNumber(n, callback)` that calculates the square of n and passes the result to the callback.



// [ ] 
// 24. Create a function `calculateSI(p, r, t, callback)` that calculates simple interest and passes the result to the callback for display.