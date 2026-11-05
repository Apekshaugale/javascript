// let f1=()=>{
//     let a=10;
//     let f2=()=>{
//         console.log

// };
// return f2;
// }
// let retf2=f1()
// retf2()


// Task 1 — Function Declaration Hoisting
// Create a function declaration called greet() that prints "Hello".
// Call the function before its declaration.
// greet()
// function greet(){
//     console.log("hello")
// }



// Task 2 — var Hoisting
// Create a variable using var and print it before declaring it.
// Observe what JavaScript prints.
// console.log(a)
// var a


// Task 3 — var Assignment and Hoisting
// Predict the output before running the code:
// console.log(a);
// var a = 10;
// console.log(a);


// Task 4 — Function vs Variable
// Predict the output:
// console.log(test());

// function test() {
//     return "Hello";
// }
// Explain why it works even though the function is declared later.


// Task 5 — Function Declaration and var
// Predict the output:
// console.log(a);

// var a = 20;

// function a() {
//     console.log("Function");
// }

// Run it and explain what happens.


// Task 6 — var Inside a Function
// Create a function called demo().

// Inside it:
// 1. Print a variable before declaring it.
// 2. Declare the variable using var.
// 3. Assign it a value.
// 4. Print it again.
// Observe the difference between the two outputs.

// function demo() {
//     console.log(a);  // Before declaration

//     var a;           // Declaration

//     a = 50;          // Initialization

//     console.log(a);  // After initialization
// }

// demo();



// Task 7 — Hoisting with Function Call
// Create a function called calculate() that returns 100.

// Call it before the function declaration.

// Then explain why JavaScript allows this.


//  console.log(calculate());

// function calculate() {
//     return 100;
// }



// Task 8 — Predict Before Running
// Predict the output:
// console.log(x);

// var x = 50;

// console.log(x);

// Don't run it until you have written your prediction.


// Task 9 — Hoisting Inside a Function
// Create:
// outer()

// Inside outer():
// 1. Print a variable.
// 2. Declare it using var.
// 3. Assign it a value.
// 4. Print it again.
// Call outer() and observe the result.

// function outer() {
//     console.log(a);  // Before declaration

//     var a;           // Declaration

//      a = 100;         // Initialization

//     console.log(a);  // After initialization
// }

// outer();



// Task 10 — Hoisting Concept Challenge ⭐
// Without running the code first, predict the output:
 console.log(a);

var a = 10;

function demo() {
    console.log(a);
    var a = 20;  //global variable a is hoisted but not initialized, so it is undefined at this point
}

demo();

// console.log(a);

// Then explain why the value inside demo() is different from the value outside.