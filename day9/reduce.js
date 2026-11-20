// Remember: reduce() uses an accumulator to maintain the result while processing array elements.
//!Purpose: reduce() processes all elements and combines them into one accumulated result.

//!example:
// let arr = [10, 20, 30, 40];
// let result = arr.reduce((accumulator, element, index, array) => {
//     return accumulator + element;
// }, 0);
// console.log(result);

//!here The 0 is the initial value of the accumulator.The second argument 0 is not a callback parameter.If you omit the initial value, the first array element becomes the initial accumulator, and iteration starts from the second element.
// ------------------------------------------------------------
// |Parameter	   | What it stores
// -------------------------------------------------------------
// |accumulator   |Result accumulated from previous iterations
// |element	   | Current element
// |index	       | Current element's index
// |array	       | Original complete array
// |-------------------------------------------------------------


// !How many parameters?
// - reduce() method: callback and optional initialValue.
// !- Callback: up to 4 parameters:
//   1. accumulator
//   2. element (current value)
//   3. index
//   4. array

// Task 21. Find the sum of all numbers
// Array: [10, 20, 30, 40]
// Expected output: 100

// let array= [10, 20, 30, 40]
// let number=array.reduce((sum,i)=>{return sum+i})
// console.log(number);


// Task 22. Find the product of all numbers
// let arr=[2, 3, 4, 5]
// let product=arr.reduce((mul,ele)=>{return mul*ele})
// console.log(product);
// Expected output: 120


// Task 23. Find the maximum number
// let array=[10, 50, 20, 90, 30]
// let maximium=array.reduce((acc,i)=>{
//     if(acc>i){
//         return acc
//     }
//     else{
//         return i
//     }
// })
// console.log(maximium);
// Expected output: 90



// Task 24. Find the minimum number
// let array=[45, 12, 78, 5, 34]
// let min=array.reduce((acc,ele)=>{
//     if (acc>ele){
//         return ele
//     }
//     else{
//         return acc
//     }
// })
// console.log(min);
// Expected output: 5



// Task 25. Count the total number of elements
// let arr=[10, 20, 30, 40, 50]
// let total=arr.reduce((acc,i,a)=>{return acc+1},0)
// console.log(total);
// Expected output: 5

// Task 26. Find the sum of even numbers only
// let  arr=[1, 2, 3, 4, 5, 6, 7, 8]
// let sum=arr.reduce((acc,i)=>{
//     if(i%2===0){
//         return acc+i
//     }
//     return acc
// },0)
// console.log(sum);
// Expected output: 20


// Task 27. Find the sum of odd numbers only
// let arr= [1, 2, 3, 4, 5, 6, 7, 8]
// let sum=arr.reduce((a,ele)=>{
//     if (ele%2===1){
//         return a+ele
//     }
// return a
// },0)
// console.log(sum);
// Expected output: 16



// Task 28. Find the total price
// What to do:
// 1. Use reduce().
// 2. Add all prices.
// 3. Store the final total.
// 4. Print it.
// Expected output: 1200
// let arr=[100, 250, 350, 500]
// let price=arr.reduce((acc,i)=>{
//     return acc+i
// },0)
// console.log(price);




// Task 29. Find the difference between numbers
// What to do:
// 1. Use reduce().
// 2. Subtract the second number from the first.
// 3. Continue subtracting the remaining numbers.
// Expected output: 70
// let arr=[100, 20, 10]
// let sub=arr.reduce((acc,ele)=>{return acc-ele})
// console.log(sub);



// Task 30. Find the sum of squares
// Array: [1, 2, 3, 4, 5]
// What to do:
// 1. Use reduce().
// 2. Calculate the square of each number.
// 3. Add all the squares.
// Expected output: 55

// let arr= [1, 2, 3, 4, 5]
// let sum=arr.reduce((acc,ele)=>{return acc+ele*ele},0)
// console.log(sum);


// let arr=[10,20,30,40,50]
// let  customReduce=(cb)=>{//in cb we customreduce
//     let acc=arr[0] ;
//     for(let i=0;i<arr.length;i++){
//        acc=cb(acc,arr[i])
//     }
// return acc
// }
// let grt=customReduce((acc,ele)=>{
//     if (acc > ele) {
//     return acc;
//   } else {
//     return ele;
//   }

// })
// console.log(grt);

// let A=[-10,20,-30,40,-50]
// let posforEach=(cb)=>{
//     for(let i=0;i<A.length;i++){
//         if (A[i]>0){
//             cb(A[i])
//         }
//     }
// }
// posforEach((ele)=>{console.log(ele);
// })

// let arr=[1,3,2,4,5]
// let avg=arr.reduce((acc,ele)=>{ return acc+ele/arr.length})
// console.log(avg);


// let arr=[2,3,4,5,6]
// let maxi=arr.reduce((acc,val)=>{ if(acc>val){return acc}
// return val})
// console.log(maxi);

let arr=[-10,-2,0,2,10]
// let res=arr.filter((ele)=>{return ele>-2})
// console.log(res);

let res=arr.filter((ele)=>{return })

mult by index filter even sum reduce 


