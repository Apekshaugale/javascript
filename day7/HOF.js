// Task 1. Create an execute function that calls a callback
// What to do:
// 1. Declare a function named execute.
// 2. Give it one parameter named callback.
// 3. Inside execute, call callback() using parentheses.
// 4. Create another regular function named sayHello that prints "Hello!".
// 5. Pass sayHello to execute without parentheses.

// let execute=(callback)=>{
//     callback();

// };
// let sayHello=()=>{
//     console.log('hello!');
    
// }
// execute(sayHello)

// [ ] 
// Task 2. Create greetUser with a callback
// What to do:
// 1. Declare greetUser(callback).
// 2. Inside it, call the callback.
// 3. Create a regular function that prints "Hello, welcome!".
// 4. Pass that function to greetUser.

// let greetUser=(callback)=>{
//     callback();
// }
// let regular=()=>{
//      console.log(`Hello,welcome!`);   
// }
// greetUser(regular)



// Task 3. Calculate a sum and pass it to a callback
// What to do:
// 1. Create calculate(a, b, callback).
// 2. Add a + b and store the result in a variable.
// 3. Pass the result to callback(result).
// 4. Create a callback function with a parameter that receives the result.
// 5. Print the received result.

// let calculate=(a,b,callback) =>{
//         let c=a+b;
//         callback(c);
// }
// let  result=(c)=>{
//     console.log(`The resule is ${c}`);   
// }
// calculate(5,6,result)



// Task 4. Check a number and pass its status to a callback
// What to do:
// 1. Create checkNumber(n, callback).
// 2. Use if, else if, and else to check whether n is positive, negative, or zero.
// 3. Store the appropriate result in a variable.
// 4. Pass that result to the callback.
// 5. Print the result inside the callback function.
// let checkNumber=(n,callback)=>{
//     if (n>0){
//        c ='n is positive'
//     // console.log(c);
//           }
//     else if (n<0){
//          c ='n is negative'
//     // console.log(c); 
        
//     }
//     else if (n==0){
//         // let c='n is zero' -->no answer 
//          c ='n is zero'
//     // console.log(c);
             
//     }
//    callback(c);
// };

// let result=(c)=>{
//   console.log(c);
  
// }
// checkNumber(0,result)


// Task 5. Multiply two numbers and use a callback
//What to do:
//1. Declare multiply(a, b, callback).
//2. Calculate a * b.
//3. Send the product to the callback.
//4. Create a callback that receives and prints the product.
//5. Test with different numbers.

// let multiply=(a, b, callback)=>{
//      product=a*b
//      callback(product)
// };
// let two=(product)=>{
//     console.log(product)
// }
// multiply(4,5,two)
// multiply(8,5,two)
// multiply(4,8,two)



// Task 6. Pass an arrow function as a callback
// What to do:
// 1. Create showResult(callback).
// 2. Call the callback inside the function.
// 3. Call showResult and pass an arrow function as its argument.
// 4. Make the arrow function print "Task completed!".
// let showResult=(callback)=>{
//     callback();
    
// }
// showResult(()=>{
//     console.log("Task completed!");
    
// })

// Task 7. Calculate the square and pass it to a callback
// What to do:
// 1. Create calculateSquare(n, callback).
// 2. Calculate n * n.
// 3. Pass the square to callback.
// 4. Create a callback that receives and prints the result.
// 5. Test with n = 6.
// Expected output:
// 36
// let calculateSquare=(n, callback)=>{
//      a=n*n
//      callback(a)
// }
// let mul=(a)=>{
//     console.log(a); 
// }
// calculateSquare(6,mul)


// Task 8. Check even or odd using a callback
// What to do:
// 1. Create checkEvenOdd(n, callback).
// 2. Use n % 2 === 0 to check whether the number is even.
// 3. Store either "Even" or "Odd" in a variable.
// 4. Pass the result to the callback.
// 5. Print it from the callback.
// Expected output:
// Even
// Odd


// Level 2 — Combining callbacks with logic
// Task 9. Pass a regular addition function as a callback
// What to do:
// 1. Create operate(a, b, callback).
// 2. Inside operate, call callback(a, b).
// 3. Create a separate function add(x, y) that returns x + y.
// 4. Pass add to operate.
// 5. Print the value returned by operate.
// Expected output:
// 30
// let operate=(a, b, callback)=>{
//     callback(a,b)
// };
// // a---->x
// //b---->y
// let add=(x,y)=>{
//      //return x+y ;
//     console.log(x+y);
    
// };
//  operate(10,20,add)
// // console.log(operate(10,20,add))


// Task 10. Calculate simple interest and pass it to a callback
// What to do:
// 1. Create calculateSI(p, r, t, callback).
// 2. Calculate simple interest using the formula:
   
//    \[
//    SI = \frac{P \times R \times T}{100}
//    \]
// 3. Pass the result to the callback.
// 4. Create a callback that prints the interest.
// 5. Test with principal 10000, rate 5, and time 2.
// Expected output:
// 1000

// let calculateSI=(p, r, t, callback)=>{
//     SI = (p*r*t)/100
//     callback(SI)
// }
// let test=(SI)=>{
//     console.log(`The interest is ${SI}`);    
// }
// calculateSI(10000,5,2,test)



// Task 11. Pass a number to a callback that multiplies it by 10
// What to do:
// 1. Create processNumber(n, callback).
// 2. Pass n to the callback.
// 3. Create a callback function that accepts a number and returns that number multiplied by 10.
// 4. Capture the callback's return value and print it.
// Expected output:
// 50
// let processNumber=(n, callback)=>{
//      return callback(n)
// }
// let funcallback=(n)=>{
//     return n*10
// }
// console.log(processNumber(5,funcallback))



// Task 12. Check voting eligibility using a callback
// What to do:
// 1. Create checkAge(age, callback).
// 2. If age >= 18, set the result to "Eligible to vote".
// 3. Otherwise, set it to "Not eligible to vote".
// 4. Pass the result to the callback.
// 5. Print the result inside the callback.
// 6. Test with ages 20 and 16.
// Expected output:
// Eligible to vote
// Not eligible to vote
// let checkAge=(age, callback)=>{
//  if (age>18){
//     c="Eligible to vote"
//  }
//  else{
//     c="Not eligible to vote"
//  }
//  callback(c)
// }
// let result=(c)=>{
//     console.log(c);   
// }
// checkAge(20,result)
// checkAge(16,result)



// Task 13. Build a calculator using a callback
// What to do:
// 1. Create calculator(a, b, operator, callback).
// 2. Use switch to identify the operator.
// 3. Calculate addition, subtraction, multiplication, or division.
// 4. Check whether the operator is valid.
// 5. Prevent division by zero.
// 6. Pass the result to the callback.
// 7. Print the result inside the callback.
// Expected output for addition:
// 15
// let calculator=(a, b, operator, callback)=>{
//     if (operator==="+"){
//         c=a+b
//     }
//     if (operator==="-"){
//         c=a-b
//     }
//     if (operator==="*"){
//         c=a*b
//     }
//     if (operator==="/"){
//         c=a/b
//     }
//  callback(c)
// }
// let res=(c)=>{
//     console.log(c);
// }
// calculator(9,6,"*",res)



// Task 14. Execute a callback three times
// What to do:
// 1. Create repeatMessage(callback).
// 2. Inside it, use a for loop that runs three times.
// 3. Call callback() during each iteration.
// 4. Pass a function that prints "Hello".
// Expected output:
// Hello
// Hello
// Hello
// let repeatMessage=(callback)=>{
//     for(i=1;i<=3;i++){
//         callback()
//     }
// }
// let cllres=()=>{
//     console.log("Hello");  
// }
// repeatMessage(cllres)



// Task 15. Calculate a grade and pass it to a callback
// What to do:
// 1. Create getGrade(marks, callback).
// 2. Use conditional statements to assign a grade.
// 3. Follow these rules:
//    - 90 or above: A
//    - 75–89: B
//    - 60–74: C
//    - 35–59: D
//    - Below 35: Fail
// 4. Pass the grade to the callback.
// 5. Print it inside the callback.
// 6. Test with marks 95, 80, 65, 40, and 20.
// let getGrade=(marks, callback)=>{
//     if (marks>=90){         
//         grade="A"
        
//     }
//     else if (marks>=75){         
//         grade="B"
        
//     }
//     else if (marks>=60){         
//         grade="C"
        
//     }
//     else if ( marks>=35){         
//         grade="D"
        
//     }
//     else {
//         grade="Fail"
//     }
//     callback(grade)
// }
// let printGrade = (grade) => {
//     console.log(grade);
// };
// getGrade(95,printGrade)
// getGrade(80,printGrade)
// getGrade(65,printGrade)
// getGrade(40,printGrade)
// getGrade(20,printGrade)
// getGrade(72,printGrade)




// Task 16. Use separate callbacks to double and triple a number
// What to do:
// 1. Create transformNumber(n, callback).
// 2. Pass n to the callback.
// 3. Return the result returned by the callback.
// 4. Create a callback that doubles a number.
// 5. Create another callback that triples a number.
// 6. Call transformNumber with each callback.
// Expected output:
// 10
// 15
// let transformNumber=(n, callback)=>{
//       return callback(n)
// }
// let double=(n)=>{
//     return n*2
// }
// let triple=(n)=>{
//     return n*3
// }
// console.log(transformNumber(5, double))
// console.log(transformNumber(5, triple))




// Level 3 — Higher-order functions
// Task 17. Return an operation function
// What to do:
// 1. Create getOperation(operator).
// 2. If the operator is "+", return a function that adds two numbers.
// 3. If the operator is "-", return a function that subtracts two numbers.
// 4. Store the returned function in a variable.
// 5. Call that returned function with two numbers.
// Expected output for addition:
// 15
// let getOperation=(a,b,operator)=>{
//     operator(a,b)
// }
// let add=(a,b)=>{
//     console.log(a+b);
    
// }
// let sub=(a,b)=>{
//     console.log(a-b);
    
// }
// getOperation(5,6,add)
//way2
// let getOperation=(a,b,operator)=>{
//     if (operator==="+"){
//         return (a,b)=>{a+b}
//     }
//     else if (operator==="-"){
//         return (a,b)=>{a-b}
//     }
       
// }
// let add=getOperation("+");
// console.log(add(10,5));

// let subtract=getOperation("-");
// console.log(add(10,5));

let getOperation = (operator) => {
    if (operator === "+") {
        return (a, b) => a + b;
    }
    else if (operator === "-") {
        return (a, b) => a - b;
    }
};

let add = getOperation("+");

console.log(add(10, 5));
// Task 18. Create a multiplier function
// What to do:
// 1. Create createMultiplier(n).
// 2. Inside it, return another function.
// 3. The inner function should accept a number.
// 4. Multiply that number by n.
// 5. Store the returned function and call it.
// Expected output for createMultiplier(4)(5):
// 20


// Task 19. Create a power function
// What to do:
// 1. Create createPower(power).
// 2. Return an inner function that accepts a number.
// 3. Calculate the number raised to power.
// 4. You may use the ** operator or a loop.
// 5. Test with a square function and a cube function.
// Expected output:
// 16
// 8


// Task 20. Repeat an action a specified number of times
// What to do:
// 1. Create repeatAction(n, action).
// 2. Use a loop that runs n times.
// 3. Call action() during each iteration.
// 4. Pass a function that prints "JavaScript".
// 5. Test by repeating the action four times.
// Expected output:
// JavaScript
// JavaScript
// JavaScript
// JavaScript


// Task 21. Apply different operations to two numbers
// What to do:
// 1. Create applyOperation(a, b, operation).
// 2. Call operation(a, b) inside it.
// 3. Return the result.
// 4. Create separate functions for addition, multiplication, and subtraction.
// 5. Pass each function to applyOperation.
// Expected outputs for inputs 10 and 5:
// 15
// 50
// 5


// Task 22. Apply a function twice
// What to do:
// 1. Create applyTwice(n, fn).
// 2. Apply fn to n once.
// 3. Pass the first result to fn again.
// 4. Return the final result.
// 5. Create addThree(n), which returns n + 3.
// 6. Test applyTwice(2, addThree).
// Expected output:
// 8


// Task 23. Return an even or odd checker
// What to do:
// 1. Create getChecker(type).
// 2. If type is "even", return a function that checks even numbers.
// 3. If type is "odd", return a function that checks odd numbers.
// 4. Store each returned function in a separate variable.
// 5. Test both checkers with different numbers.
// Expected output:
// true
// true


// Task 24. Create a counter using a returned function
// What to do:
// 1. Create createCounter(start).
// 2. Declare a local variable count and initialize it to start.
// 3. Return an inner function.
// 4. Each time the inner function is called, increment count.
// 5. Return the updated count.
// 6. Call the returned function three times, starting from zero.
// Expected output:
// 1
// 2
// 3


// Level 4 — Advanced HOF and callback combinations
// Task 25. Calculate and transform a result
// What to do:
// 1. Create calculateAndTransform(a, b, callback).
// 2. Calculate a + b.
// 3. Pass the sum to the callback.
// 4. Return the callback's result.
// 5. Pass an arrow function that multiplies the sum by 2.
// Expected output for inputs 10 and 5:
// 30


// Task 26. Execute one of two callbacks based on a condition
// What to do:
// 1. Create runConditionally(n, success, failure).
// 2. If n > 0, call success().
// 3. Otherwise, call failure().
// 4. Pass two separate functions when calling runConditionally.
// 5. Test with a positive number, a negative number, and zero.
// Expected output for a negative number:
// Number is not positive


// Task 27. Compose two functions
// What to do:
// 1. Create composeTwo(first, second).
// 2. It should return a new function that accepts a number.
// 3. The returned function should first pass the number to first.
// 4. Pass the first result to second.
// 5. Return the final result.
// 6. Test with a function that doubles a number and another that adds 5.
// Expected output for input 10:
// 25


// Task 28. Validate before calculating
// What to do:
// 1. Create validateAndCalculate(a, b, validate, calculate).
// 2. Pass a and b to the validation callback.
// 3. The validation callback should return true only when both numbers are positive.
// 4. If validation succeeds, call the calculation callback with both numbers.
// 5. If validation fails, return an error message.
// 6. Test valid and invalid inputs.
// Expected results:
// validateAndCalculate(10, 5, validate, add);  // 15
// validateAndCalculate(-10, 5, validate, add); // Error message


// Task 29. Return a calculator that accepts a callback
// What to do:
// 1. Create createCalculator().
// 2. Make it return an inner function that accepts a, b, and callback.
// 3. Inside the returned function, calculate a + b.
// 4. Pass the sum to the callback.
// 5. Return the callback's result.
// 6. Call the outer function first, then the returned function.
// 7. Pass a callback that multiplies the sum by 2.
// Expected output:
// 30


// Task 30. Create a three-step function pipeline
// What to do:
// 1. Create pipeline(n, first, second, third).
// 2. Pass n to the first function.
// 3. Pass the first result to the second function.
// 4. Pass the second result to the third function.
// 5. Return the final result.
// 6. Test with functions that add 2, multiply by 3, and subtract 4.
// Expected output for input 5: