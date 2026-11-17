// !Purpose: forEach() executes a callback once for every element.
// example:
// let arr = [10, 20, 30, 40];

// arr.forEach((element, index, array) => {
//     console.log(element);
// });

// Understand every word
// - arr: original array.
// - forEach(): visits each element.
// - element: current element.
// - index: current element's position.
// - array: original complete array.
// - console.log(element): prints the current element.

// !How many parameters?
// - forEach() method: callback and optional thisArg.
// - Callback: up to 3 parameters: element, index, array.
// Remember: forEach() returns undefined. It does not create a new array.


// Task 31. Print every element
// Array: [10, 20, 30, 40, 50]
// Expected output:
// 10
// 20
// 30
// 40
// 50
// let arr=[10, 20, 30, 40, 50]
// let every=arr.forEach((i)=>{
//     console.log(i);
    
// })


// Task 32. Print the square of every number
// let arr=[2, 3, 4, 5]
// let squ=arr.forEach((i)=>{
//     console.log(i*i);  
// })
// Expected output:
// 4
// 9
// 16
// 25


// Task 33. Print only even numbers
// What to do:
// 1. Use forEach().
// 2. Check whether each number is even.
// 3. Print only even numbers.
// let arr=[1, 2, 3, 4, 5, 6, 7, 8]
// let even=arr.forEach((ele)=>{if (ele%2===0){
//     console.log(ele);   
// }
// })


// Task 34. Print the sum of all numbers
// What to do:
// 1. Create a variable sum = 0.
// 2. Use forEach().
// 3. Add each number to sum.
// 4. Print the final sum outside the loop.
// Expected output: 100
// let arr=[10, 20, 30, 40]
// let sum=0
// let num=arr.forEach((ele)=>{
// sum+=ele
//    }
// )
// console.log(sum);


// Task 35. Count even numbers
// let  arr=[1, 2, 4, 5, 6, 8, 9, 10]
// let count=0
// let even=arr.forEach((ele)=>{
//     if(ele%2===0){
//         count+=1}
// })
// console.log(count);

// Expected output: 5


// Task 36. Print numbers greater than 25
// let arr=[10, 20, 30, 40, 50]
// let grt=arr.forEach((ele)=>{
//     if (ele>25){
//         console.log(ele);   
//     }
// })

// Expected output:
// 30
// 40
// 50


// Task 37. Multiply every number by 3 and print it
// let arr=[2, 4, 6, 8]
// let mul=arr.forEach((ele)=>{
//     console.log(ele*3);
    
// })

// Expected output:
// 6
// 12
// 18
// 24




// Task 38. Find the total of positive numbers
// let b=[-10, 20, -30, 40, 50]
// let total=0
// let positive=b.forEach((ele)=>{
//     if (ele>0){
//         total+=ele
//     }
// })
// console.log(total);
// Expected output: 110




// Task 39. Print the index and value of every element
// Hint: forEach() callback can receive two parameters: element and index.
// let arr=[100, 200, 300, 400]
// let index=arr.forEach((ele,i)=>{
//     console.log(i,ele);  
// })
// Expected output:
// 0 100
// 1 200
// 2 300
// 3 400


// Task 40. Create a separate function and pass it to forEach()

// Array: [10, 20, 30, 40]

// What to do:
// 1. Create a function called printNumber().
// 2. It should accept one number.
// 3. Print the number multiplied by 5.
// 4. Pass the function to forEach().
let arr= [10, 20, 30, 40]
function printNumber(num){
    
        console.log(num*5)  
}
let sep=arr.forEach(printNumber)


// Expected output:
// 50
// 100
// 150
// 200