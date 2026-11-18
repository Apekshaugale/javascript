//!Purpose: filter() selects only those elements that satisfy a condition.

// Syntax :

// let result = arr.filter((value,index,array)=>{
//       // statements
// })

// result: stores the filtered array.
// arr: original array.
// !filter(): checks each element against a condition.
// element: current number.
// index: position of that number.
// array: complete original array.

// Remember: filter() returns a new array containing only matching elements.

// Task 11. Find even numbers
// Array: [1, 2, 3, 4, 5, 6, 7, 8]
// Expected output: [2, 4, 6, 8]
// let a=[1,2,3,4,5,6,7,8]
// let even=a.filter((num)=>{return num%2===0})
// console.log(even)


// Task 12. Find odd numbers
// Array: [10, 11, 12, 13, 14, 15, 16]
// Expected output: [11, 13, 15]
// let arr=[10,11,13,14,15,16]
// let odd=arr.filter((num)=>{return num%2===1})
// console.log(odd)


// Task 13. Find numbers greater than 50
// Array: [10, 60, 30, 80, 90, 20]
// // Expected output: [60, 80, 90]
// let Array=[10, 60, 30, 80, 90, 20]
// let greater=Array.filter((grt)=>{return grt>50})
// console.log(greater);


// Task 14. Find numbers less than 100
// Array: [50, 120, 80, 200, 90, 150]
// Expected output: [50, 80, 90]
// let Array=[50, 120, 80, 200, 90, 150]
// let less=Array.filter((num)=>{return num<100})
// console.log(less)


// Task 15. Find numbers between 20 and 50
// Array: [10, 25, 30, 55, 40, 60, 45]
// Expected output: [25, 30, 40, 45]
// let Array= [10, 25, 30, 55, 40, 60, 45]
// let num=Array.filter((i)=>{return (i>=20 & i<=50)})
// console.log(num);


// Task 16. Find positive numbers
// Array: [-10, 20, -30, 40, 0, 50]
// Expected output: [20, 40, 50]
// let y= [-10, 20, -30, 40, 0, 50]
// let positive=y.filter((num)=>{return num>0})
// console.log(positive);


// Task 17. Find numbers divisible by 5
// let Array= [10, 12, 15, 22, 25, 30, 33]
// let div=Array.filter((num)=>{return num%5===0})
// console.log(div);
// Expected output: [10, 15, 25, 30]


// Task 18. Find numbers greater than their average
// Array: [10, 20, 30, 40, 50]
// What to do:
// 1. Calculate the average of the array.
// 2. Use filter().
// 3. Keep only numbers greater than the average.
// Expected output: [40, 50]

// let array=[10,20,30,40,50]
// function greater() {
//     let add=0
//     for(let i=0;i<array.length;i++){
//         add+=array[i]
//     }
//     let avg =add/array.length
//     return avg
// }
// let avgstore=greater()
// let sort=array.filter((num)=>{return num>avgstore})
// console.log(sort)


// Task 19. Find numbers whose squares are greater than 100
// Array: [2, 5, 8, 10, 12]
// Expected output: [12]
// let arr= [2, 5, 8, 10, 12]
// function square(){
//     let squnum=[]
//     for(let i=0;i<arr.length;i++){
//          squnum.push(arr[i]*arr[i])
//     }
// return squnum
// }
// let a=square()//square of eachb element 
// let greater=arr.filter((ele)=>{return ele*ele>100})
// console.log(greater);
// console.log(a)



//  let arr= [2, 5, 8, 10, 12]
//  let greater=arr.filter((ele)=>{return ele*ele>100})
//  console.log(greater);
 


// Task 20. Use filter with a separate function
// Array: [10, 15, 20, 25, 30, 35]
// What to do:
// 1. Create a function called checkEven().
// 2. It should accept a number.
// 3. Return true if the number is even.
// 4. Otherwise, return false.
// 5. Pass the function to filter().
// Expected output: [10, 20, 30]
let array= [10, 15, 20, 25, 30, 35]
function checkeven(num){
        if 
        (num%2===0){
            return true
        }
        else{
            return false
        }
}
let result=array.filter(checkeven)
console.log(result);
