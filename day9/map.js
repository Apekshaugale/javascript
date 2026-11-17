//! let arr=[10,20,30,40,50];
//! let new_arr = arr.map(value => value * 8 );
// !console.log(new_arr);
//!or let new_arr = arr.map((value) => { return value * 8 });

// !syntax of map() method is as follows:
// arr.map((element, index, array) => {
//     // Your logic
// });

// !The 3 Parameters of .map()

// !• 1st Parameter (currentValue / num)
// This is required and holds the actual item currently being processed. For example, in [10, 20, 30], this starts at 10.
// !• 2nd Parameter (index)
// This is optional and holds the position number of the current item. Counting always starts at 0.
// !• 3rd Parameter (array)
// This is optional and holds the entire original array that .map() was called on. It is useful if you need to look at other items while processing the current one.


//!theory
Purpose: map() performs an operation on every element and returns a new array.
eg:
let result = arr.map((element, index, array) => {return element * 2;
})
console.log(result); // [20, 40, 60, 80, 100]

// |-------------------------------------------------------- 
// |Word    | 	Meaning
// |--------------------------------------------------------
// |let	    |    Declares a variable.
// |result  |  	Stores the new array returned by map.
// |arr	    |    Original array.
// |map()	|    Array method that transforms elements.
// |element |   	Stores the current element.
// |index	|    Stores the current element's position.
// |array	|    Stores the original complete array.
// |=>	    |    Arrow function syntax.
// ------------------------------------------------------

// How many parameters?
// - map() method: takes a callback function and optionally a thisArg.
// - Callback: receives up to 3 parameters: element, index, array.
// Remember: map() returns a new array. The original array remains unchanged.

// Task 1. Double every number

// Array: [2, 4, 6, 8, 10]

// What to do:
// 1. Create an array of numbers.
// 2. Use map().
// 3. Multiply every element by 2.
// 4. Store the returned array in a new variable.
// 5. Print the new array.
// Expected output: [4, 8, 12, 16, 20]

// let arr = [2, 4, 6, 8, 10];
// let result = arr.map((num) => {
//     return num * 2;
// });
// console.log(result);

// Task 2. Add 5 to every number

// Array: [10, 20, 30, 40]

// What to do:
// 1. Use map().
// 2. Add 5 to every element.
// 3. Print the new array.
// Expected output: [15, 25, 35, 45]
// array=[10, 20, 30, 40];
// let element=array.map((a)=>{ return a+5}) //we pass one function to map() which takes one argument a and returns a+5
// console.log(element)

// Task 3. Find the square of every number
// Array: [2, 3, 4, 5]
// Expected output: [4, 9, 16, 25]
// array=[2, 3, 4, 5];
// let square=array.map((a)=>{ return a*a})
// console.log(square)

// console.log([2,3,4,5].map((a)=>a*a));

// let arr=[2,3,4,5]
// let squareMap=(cb)=>{
//     let a=[]
//     for(let i=0;i<arr.length;i++){
//         let b=cb(arr[i])
//         a.push(b)
//     }
//     return a
// }
// let c=squareMap((ele)=>{
//     return ele*ele
// })
// console.log(c)


// Task 4. Convert every number into its negative value
// Array: [10, 20, 30, 40]
// Expected output: [-10, -20, -30, -40]
//let Array= [10, 20, 30, 40]
//here negative is a new array which will store the negative values of the original array. We use the map() method to iterate over each element of the original array and return its negative value by multiplying it by -1. The returned values are then stored in the negative array.
// let negative=Array.map((num)=>{return -num})
// console.log(negative)


// Task 5. Multiply every number by itself and then add 10
// Array: [1, 2, 3, 4]
// Expected output: [11, 14, 19, 26]
// let A= [1, 2, 3, 4]
// let output=A.map((i)=>{return (i*i)+10})//i holds the value of each element in the array A. 
// console.log(output)


// Task 6. Subtract 3 from every number
// Array: [10, 15, 20, 25]
// Expected output: [7, 12, 17, 22]

// let Array= [10, 15, 20, 25]
// let sub=Array.map((num)=>{return num-3})
// console.log(sub)



// Task 7. Convert prices into prices with GST
// Array: [100, 200, 300, 400]
// What to do:
// 1. Use map().
// 2. Add 18% GST to each price.
// 3. Print the updated prices.
// Hint: GST amount = price × 18 / 100.

// let Array= [100, 200, 300, 400]
// let price=Array.map((num)=>{return num+(num*18/100)})
// console.log(price)


// Task 8. Increase every number by 10%
// Array: [100, 500, 1000]
// Expected output: [110, 550, 1100]

// let Array= [100, 500, 1000]
// let inc=Array.map((num)=>{return num+(num*10/100)})
// console.log(inc)

// Task 9. Convert temperatures from Celsius to Fahrenheit
// Array: [0, 10, 20, 30]
// Expected output: [32, 50, 68, 86]
// let Array= [0, 10, 20, 30]
// let temp=Array.map((cels)=>{return (cels*9/5)+32})
// console.log(temp)

// Task 10. Use map with a separate function
// Array: [2, 4, 6, 8]
// What to do:
// 1. Create a separate function called double().
// 2. The function should accept a number.
// 3. Return the number multiplied by 2.
// 4. Pass the function to map().
// 5. Print the new array.

// let a=[2,4,6,8]
// let double=a.map((num)=>{return num*2})
// console.log(double)


let array=[2,4,6,8]
function double(num){
    return num*2
}
let result=array.map(double)
console.log(result)