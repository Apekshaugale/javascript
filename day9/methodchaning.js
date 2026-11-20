// Part 4: Method chaining – 10 challenges
// Combine two or more methods in a single expression. Do not create unnecessary intermediate arrays.
// 31. Use filter() and map() to find even numbers and multiply them by 5.
// Array: [1, 2, 3, 4, 5, 6]
// Expected output: [10, 20, 30]
// let arr=[1, 2, 3, 4, 5, 6]
// let chaining=(arr.filter((num)=>{return num%2==0 })).map((num)=>{return num*5})
// console.log(chaining);


// 32. Use filter() and reduce() to calculate the sum of numbers greater than 20.
// Array: [10, 20, 30, 40, 50]
// Expected output: 120
// let arr=[10, 20, 30, 40, 50]
// let value=(arr.filter((ele)=>{return ele>20})).reduce((acc,ele)=>{return acc+ele})
// console.log(value)


// 33. Use map() and reduce() to calculate the sum of squares.
// Array: [1, 2, 3, 4, 5]
// Expected output: 55
// let a=[1, 2, 3, 4, 5]
// let b=(a.map((ele)=>{return ele**2})).reduce((acc,ele)=>{return acc+ele})
// print(console.log(b))

// 34. Use filter(), map(), and reduce() to find the sum of squares of even numbers.
// Array: [1, 2, 3, 4, 5, 6]
// Expected output: 56
// let a=[1, 2, 3, 4, 5, 6]
// let res=((a.filter((num)=>{return num%2==0})).map((num)=>{return num**2})).reduce((acc,num)=>{return acc+num})
// console.log(res);

// 35. Use filter() and sort() to get positive numbers in descending order.
// Array: [-10, 20, -5, 40, 10, -30]
// Expected output: [40, 20, 10]
// let Array= [-10, 20, -5, 40, 10, -30]
// let pos=(Array.filter((num)=>{return num>0})).sort((num,ele)=>{return ele-num})
// console.log(pos);

// 36. Use filter(), map(), and reduce() to:
// - Select numbers divisible by 5.
// - Multiply each by 3.
// - Calculate their total.
// Array: [5, 10, 12, 15, 20]
// Expected output: 150
// let arr=[5, 10, 12, 15, 20]
// // let pro=((arr.filter((num)=>{return num%5==0})).map((num)=>{return num*3})).reduce((acc,num)=>{return acc+num})
// let pro=((arr.filter((num)=>{return num%5==0})).map((ele)=>{return ele*3})).reduce((acc,n)=>{return acc+n})
// console.log(pro);



// 37. Use filter(), sort(), and map() to:
// - Select even numbers.
// - Sort them in ascending order.
// - Multiply each by 2.
// Array: [9, 4, 7, 2, 8, 3, 6]
// Expected output: [4, 8, 12, 16]
// let arr=[9, 4, 7, 2, 8, 3, 6]
// let some=((arr.filter((num)=>{return num%2==0})).sort((a,b)=>{return a-b})).map((acc)=>{return acc*2})
// console.log(some);


// 38. Use filter(), map(), and reduce() to find the sum of cubes of numbers greater than 3.
// Array: [1, 2, 3, 4, 5]
// Expected output: 189
// let arr=[1,2,3,4,5]
// let res=((arr.filter((n)=>{return n>3})).map((a)=>{return a**3})).reduce((acc,b)=>{return acc+b})
// console.log(res);


// 39. Use filter(), sort(), and reduce() to:
// - Select numbers greater than 10.
// - Sort in descending order.
// - Calculate their sum.
// Array: [5, 20, 15, 40, 10, 30]
// Expected output: 105
// let a=[5, 20, 15, 40, 10, 30]
// let grt=((a.filter((num)=>{return num>10})).sort((c,b)=>{return b-c})).reduce((acc,e)=>{return acc+e})
// console.log(grt);

// 40. Final challenge: Use filter(), map(), sort(), and reduce() together:
// - Select even numbers.
// - Calculate their squares.
// - Sort the squares in descending order.
// - Find their total sum.
// Array: [1, 2, 3, 4, 5, 6]

// Expected output: 56

let arr= [1, 2, 3, 4, 5, 6]
let out=(((arr.filter((e)=>{return e%2==0}).map((s)=>{return s**2})).sort((a,b)=>{return b-a}))).reduce((t,u)=>{return t+u})
console.log(out);
