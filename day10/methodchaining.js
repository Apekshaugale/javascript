// What is method chaining?
// Method chaining means using multiple methods one after another on the same array expression.

// Instead of creating separate variables for every operation, we connect methods using dots (.).
// Syntax
// array.method1().method2().method3();


// The important concept is that the previous method's returned value becomes the input for the next method.

// Part 8 – Method chaining activities (Tasks 27–30)
// 27. Use filter() and find() together to:
// - Select even numbers.
// - Find the first number greater than 20.
// Array: [10, 15, 20, 25, 30, 40, 50]
// Expected output: 30
let arr= [10, 15, 20, 25, 30, 40, 50]
let vari=arr.filter((num)=>{return num%2==0}).find((ele)=>{return ele>20})
console.log(vari);

// 28. Use concat() and sort() together to:
// - Combine two arrays.
// - Sort the combined array in ascending order.
// Arrays: [50, 10, 30] and [20, 40, 60]
// Expected output: [10, 20, 30, 40, 50, 60]
let a=[50, 10, 30] 
let b= [20, 40, 60]
let c=a.concat(b).sort((a,b)=>{return a-b})
console.log(c)


// 29. Use flat() and reduce() together to:
// - Flatten the array.
// - Calculate the sum of all numbers.
// Array: [10, [20, 30], [40, [50]]]
// Expected output: 150
let ar=[10, [20, 30], [40, [50]]]
let value=ar.flat(2).reduce((acc,ele)=>{ return acc+ele})
console.log(value)

// 30. Final challenge: Use filter(), sort(), and findLast() together to:
// - Select even numbers.
// - Sort them in ascending order.
// - Find the last number smaller than 50.
// Array: [70, 20, 10, 60, 40, 30, 80]
// Expected output: 40

let array=[70, 20, 10, 60, 40, 30, 80]
let v=array.filter((ele)=>{ return ele%2==0}).sort((a,b)=>{return a-b}).findLast((ele)=>{return ele<50})
console.log(v)
     