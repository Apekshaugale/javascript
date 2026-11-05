// Task 1 — Basic let TDZ
// Predict what happens:
// console.log(a);
// let a = 10;

// Does it print a value or produce an error?
// TDZ.js:3 Uncaught ReferenceError: Cannot access 'a' before initialization
    

// Task 2 — let After Declaration
// Create a variable using let.
// 1. Declare it.
// 2. Assign a value.
// 3. Print it.
// // Compare this with Task 1.
// let a
// a = 20;         
// console.log(a);


// Task 3 — const TDZ
// Predict what happens:
// console.log(a);
// const a = 20;

// Identify the error.
// TDZ.js:27 Uncaught ReferenceError: Cannot access 'a' before initialization

// Task 4 — var vs let
// Compare these two:
console.log(a);
var a = 10;

// and
console.log(b);
let b = 10;

// Write down the difference in behavior.
