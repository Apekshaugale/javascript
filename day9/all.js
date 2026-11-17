// const accNo = 12345
// accNo = 777
// console.log(accNo);

// const accNo  = 87685;

// let accBal = 10;
// accBal = 20
// let accBal = 10

// a = 10
// a = 20

// let count = 0;
// ++count
// console.log((count += 2)); // 1
// console.log(count--); // 1
// console.log(count); // 0

// let a = 10
// let b = "10"
// console.log(a === b);

// let a = true
// console.log(typeof true); // boolean
// console.log(typeof "true"); // string

// let a = 10;
// let b = 10.1;
// let c = -10.1;
// let d = 12345678901234567n   ;
// let e = 12n   ;
// console.log(d);
// let friends = ["Jyothi", "Apeksha", "Sonam", "Bhakti"]
// let str = `my friends are ${friends.map(friend=>friend)}`
// console.log(str);

// let price = 101
// let str1 = 'Hello'
// let str2 = "Hello"
// let str3 = `the product is ${price > 100 ? "Expensive" : "Cheap"} `
// console.log(str1);
// console.log(str2);
// console.log(str3);

// let accNo;
// console.log(accNo); // undefined

// let accBal = null;
// console.log(accBal);

// let person = {
//     name :  null,
// }

// console.log(10 + true);

// let a = Symbol(10)
// let b = Symbol(10)
// console.log(a==b);

// console.log(Boolean(1));
// console.log(Boolean(2));
// console.log(Boolean(-2));
// console.log(Boolean("a"));
// console.log(Boolean(" "));
// console.log(Boolean([]));
// console.log(Boolean({}));

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// let isAvailable = false
// price  ? "product available" : "not available"

// let price = 90;

// let str = `the product is ${price > 100 ? "Expensive" : "Affordable"}`;

// let friends = ["Jyothi", "Apeksha", "Sonam", "Bhakti"]
// let str = `My friends are ${friends.map(friend=>friend)}`
// console.log(str);
// My friends are Jyothi,Apeksha,Sonam,Bhakti

// console.log("10"+10); // 1010 concatination because of "+"
// console.log("10" - 10); // 0 reason - "10" is typecastable to number
// console.log("a" - "b"); // NaN reason - "a" is non numeric and cannot be typecastable to number

// console.log("hello" == "hello"); // true
// console.log(Symbol("hello") == Symbol("hello")); // false

// let func = ()=>{

// }

// let add = (a, b)=>{
//     console.log(a+b);
// }
// add(10,20)

// let sayHello = (str) => {
//   for (let i = 0; i < 10; i++) {
//     console.log(str);
//   }
// };
// sayHello("Hello");

//   for (let i = 0; i < 10; i++) {
//     console.log(str);
//   }
// Array(10).fill(2).map((val, i)=>{console.log(`${val}*${i+1} = ${val*(i+1)}`)})
// let n = 2;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${n} * ${i} = ${n * i}`);
// }
// let str = "Hello";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// if(){}
// }

// alert("alert1")

// let showPopUp = ()=>{
//   alert("alert2")
// }

// let span = document.querySelector('span')
// let div = document.querySelector('div')
// span.onclick = ()=>{
//   div.style.display = "block"
// }

// let func1 = ()=>{} // arrow function
// function func2() {} // regular function / function declaration
// let func3 = ()=>{}        // function as a expression
// let func4 = function(){} // function as a expression
// ()=>{}     // annonymous function
// function () {}     // annonymous function
// console.log();

// ((a)=>{
//   console.log(a);
// })(10);

// (function (){})()

// Basic calculator
// Create four functions for addition, subtraction, multiplication, and division. Each function should accept two numbers and return the result.
// Concepts: regular functions, parameters, return

// function add (n1, n2){
// //  return n1+n2
// }
// // console.log(add(10, 20));

// let sum = add(10, 20)
// console.log(sum);

// function sub (n1, n2){}
// function mul (n1, n2){}
// function div (n1, n2){}

// Temperature converter
// Write a function that converts Celsius to Fahrenheit and another that converts Fahrenheit to Celsius.
// Formula: F=(C×9/5)+32
// Concepts: function expressions, arrow functions, return values

// let celToFahr = (temp) => {
//   let newtemp = (temp * 9) / 5 + 32;
//   return newtemp;
// };
// let fahrToCel = (temp) => {
//   let newtemp = ((temp - 32) * 5) / 9;
//   return newtemp;
// };
// console.log(celToFahr(38));
// console.log(fahrToCel(100.4));
// let btn = document.querySelector("button");
// let isLoggedIn = true;
// let f1 = (login, logout) => {

//   let innerFunc = () => {
//     if (isLoggedIn) {
//       logout();
//     } else {
//       login();
//     }
//   };
//   return innerFunc;
// };
// btn.onclick = f1(
//   () => {
//     alert("logged in successfully");
//   },
//   () => {
//     alert("logged out successfully");
//   }
// );

// let a = 10
// let b = ()=>{}
// console.log(a);

// let f1 = (cb)=>{
//    console.log(cb);

//     cb()
// }
// let f2 = ()=>{console.log("called")}
// f1(f2())

// function vote(age){
//     if (age>=18){
//         console.log('u can vote')
//     }
//     else{
//         console.log('not')
//     }
// }
// function a(func,age){
//     console.log()
// }
// a(vote)

// let greetUser = (name, callback) => {
//   callback(name);
// };
// let sayHello = (name) => {
//   console.log(`Hello ${name}`);
// };
// let sayGoodBye = (name) => {
//   console.log(`Goodbye ${name}`);
// };

// greetUser("Sarthak", sayHello);
// greetUser("Sarthak", sayGoodBye);

// let calculate = (a, b, callback) => {
//   callback(a, b);
// };

// let add = (a, b) => {
//   console.log(`Add of ${a} and ${b} is ${a + b} `);
// };
// let sub = (a, b) => {
//     console.log(`Sub of ${a} and ${b} is ${a - b} `);
// };
// let mul = () => {};
// let div = () => {};

// calculate(10, 20, sub);
// let formatMessage = (message, callback)=>{
//     callback(message)
// }

// let convertUpperCase= (msg)=>{
//     console.log(msg.toUpperCase());
// }
// let convertLowerCase = (msg)=>{
//     console.log(msg.toLowerCase());
// }
// let reverseMsg = (msg)=>{
//     console.log(msg.split(" ").reverse().join(" "));
// }
// let prefixMsg = (msg)=>{
//     console.log(msg.padStart(20, "*"));
// }
// let sufixMsg = (msg)=>{
//     console.log(msg.padEnd(20, "*"));
// }

// formatMessage("All is well", convertUpperCase)
// formatMessage("All is well", convertLowerCase)
// formatMessage("All is well", reverseMsg)
// formatMessage("All is well", prefixMsg)
// formatMessage("All is well", sufixMsg)

// let currentAccBal = 1000;
// let transaction = (type, amt) => {
//   type(amt);
// };
// let deposit = (amt) => {
//   currentAccBal += amt;
//   console.log(currentAccBal);
// };
// let withdraw = (amt) => {
//   currentAccBal -= amt;
//   console.log(currentAccBal);
// };
// let intrest = (percentages) => {
//   currentAccBal = currentAccBal + (currentAccBal * percentages) / 100;
//   console.log(currentAccBal);
// };
// // transaction(deposit, 1000)
// // transaction(withdraw, 1000)
// transaction(intrest, 7);

// create cal;
// return inner func that accept a, b , cb
// inside returned func calculate a + b
// pass the sum to callback
// return callbacks result
// call the outer func first then return func
// pass the callback that multiplies the sum by 2
// let calculate = () => {
//   return (a, b, cb) => {
//     cb(a + b);
//   };
// };
// let innerFunc = calculate();
// innerFunc(10, 20, (sum) => {
//   console.log(sum * 2);
// });

// let a = 10;
// console.log(window);
// alert()
// confirm()
// let username = prompt("Enter username")

// let a = 10;
// console.log(a);
// demo(10);
// function demo(n) {
//   console.log(n * n);
// }
// demo(10);

// let a = 10;
// console.log(a);
// demo(10);
// let demo = function (n) {
//   console.log(n * n);
// }
// demo(10);

// console.log(a);
// var a = 10;
// console.log(b);
// let b = 20;
// const c = 30;
// console.log(c);

// let f1 = () => {
//   let a = 10;
//   let f2 = () => {
//     console.log(a);
//   };
//   f2();
// };
// f1();

// let f1 = () => {
//   let a = 10;
//   let b = 20
//   let f2 = () => {
//     console.log(a);
//     console.log(b);
//   };
//   return f2
// };
// let retF2 = f1();
// retF2()

// let func = ()=>{
//   return 10
// }
// let a = func()
// console.log(a);

//! let arr = [10, ()=>{alert()} , 30, "hello", [100, [200, 300, [400]]]]
// console.log(arr.length-1);
// console.log(arr[1]());
// console.log(arr[4][1][2][0]);

// let arr = [10, 20, 30, 40];
// arr.push(100)
// arr.pop()
// arr.unshift(100)
// arr.shift()
// arr.splice(start, count, elements)
// arr.splice(1, 1, 200) //  [10, 200, 30, 40]
// arr.splice(1, 0, 200) //  [10, 200, 20, 30, 40]
// arr.splice(1, 1) //  [10, 30, 40]
// arr.splice(1 ) //  [10]
// arr.splice(1 ) //  [10]
// arr.splice(1, 10); //  [10]
// arr.splice(1, 0, 100, 200, 300); //  [10, 100, 200, 300, 20, 30, 40]
//  arr.splice(0, arr.length, 100 ) // [100]
// console.log(arr);

// let arr = [10, 20, 30, 40];
//! let customForEach = (cb) => {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i], i);
//   }
// };
// customForEach((ele, i) => {
//   console.log(ele * i);
// });

//! arr.forEach((ele, i) => {
//   console.log(ele*2);
// });

// [10, 20, 30, 40].forEach(ele=>console.log(ele*2))
// [10, 20, 30, 40].map(ele=>console.log(ele*2))
// [10, 20, 30, 40].filter(ele=>console.log(ele*2))
// [10, 20, 30, 40].reduce(ele=>console.log(ele*2))
// [10, 20, 30, 40].some(ele=>console.log(ele*2))
// [10, 20, 30, 40].every(ele=>console.log(ele*2))
// [10, 20, 30, 40].sort((a, b)=>console.log(ele*2))
// setTimeout(()=>{},  time)
// setInterval(()=>{},  time)
// ele.addEventLostener("event", ()=>{})
// then(()=>{})
// catch(()=>{})
// finally(()=>{})
// new Promise(()=>{})
console.log([10, 20, 30, 40].map((val, i)=>val*i));

let arr = [10, 20, 30, 40];
let customMap = (cb) => {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    let val = cb(arr[i], i);
    temp.push(val); //  [0, 20, 60, 120]
  }
  return temp
};
let newArr = customMap((ele, ind) => {
  return ele * ind;
});
console.log(newArr);