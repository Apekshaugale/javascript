//[...etc]//rest operator holds al the non destructured elements 
//{....reaining}it holds all the non destructure element 

// Level 1 – Basic array destructuring
// Task 1. Extract all elements
// - Array: [10, 20, 30, 40, 50]
// - What to do:
//   1. Create an array.
//   2. Extract all five elements into separate variables using destructuring.
//   3. Print all variables.
// - Expected output: 10 20 30 40 50
// let arr=[10,20,30,40,50]
// let [a,b,c,d,e]=arr
// console.log(a);
// console.log(b);
// console.log(e);
// console.log(c);




// Task 2. Extract the first two elements
// - Array: ["Java", "Python", "JavaScript", "C++"]
// - What to do:
//   1. Extract the first two elements into separate variables.
//   2. Print both variables.
// - Expected output: Java Python
// let arr= ["Java", "Python", "JavaScript", "C++"]
// let [a,b]=arr
// console.log(b);
// console.log(a);


// Task 3. Skip elements
// - Array: [10, 20, 30, 40, 50]
// - What to do:
//   1. Extract the first and third elements.
//   2. Skip the second element using destructuring.
//   3. Print the extracted values.
// - Expected output: 10 30
// let arr=[10, 20, 30, 40, 50]
// let [a,b,c]=arr
// console.log(c);
// console.log(a);


// Task 4. Extract the first and last elements
// - Array: [100, 200, 300, 400, 500]
// - What to do:
//   1. Extract the first element.
//   2. Extract the last element using destructuring.
//   3. Print both.
// - Expected output: 100 500
// let reat=[100, 200, 300, 400, 500]
// let [a,b,c,d,...res]=reat
// console.log(res);



// Task 5. Use default values
// - Array: [10, 20]
// - What to do:
//   1. Extract three variables.
//   2. Assign a default value of 100 to the third variable.
//   3. Print all three variables.
// - Expected output: 10 20 100
// let a=[10,20]
// let [b,c,d=100]=a
// console.log(b);
// console.log(c);
// console.log(d);


// Level 2 – Intermediate array destructuring
// Task 6. Swap two variables
// - Variables: a = 10, b = 20
// - What to do:
//   1. Swap the values of both variables using array destructuring.
//   2. Do not use a third variable.
//   3. Print both variables.
// - Expected output: 20 10

// let a=10
// let b=20


// Task 7. Extract remaining elements using rest
// - Array: [10, 20, 30, 40, 50, 60]
// - What to do:
//   1. Extract the first two elements separately.
//   2. Store all remaining elements in another array using the rest operator.
//   3. Print all three variables.
// - Expected output:
// 10
// 20
// [30, 40, 50, 60]
// let a=[10,20,30,40,50,60]
// let [b,c,...res]=a
// console.log(b);
// console.log(c);
// console.log(res);




// Task 8. Skip multiple elements
// - Array: [5, 10, 15, 20, 25, 30]
// - What to do:
//   1. Extract the first element.
//   2. Skip the next two elements.
//   3. Extract the fourth element.
//   4. Print both extracted values.
// - Expected output: 5 20
// let extra=[5,10,15,20,25,30]
// let [a,,,b]=extra
// console.log(a);
// console.log(b);

// Task 10. Use destructuring with a function
// - What to do:
//   1. Create a function named getNumbers().
//   2. Return an array containing [10, 20, 30].
//   3. Store the returned array elements in three separate variables using destructuring.
//   4. Print the variables.
// - Expected output: 10 20 30
let getNumber=(arr)=>{
    let a=arr
    let [e,b,c]=a
    return e,b,c
}
console.log(getNumber([10, 20, 30]))