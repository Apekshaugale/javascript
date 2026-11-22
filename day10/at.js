// /What is at()?
// The at() method is used to access an element from an array using its index.

// It allows us to access elements from:
// - The beginning of an array using positive indexes.
// - The end of an array using negative indexes.

// Syntax
// array.at(index);


// Parameter:
// Parameter	Meaning
// index	Position of the element you want to access

// Return value: Returns the element at the specified index. If the index is outside the array, it returns undefined.


// Part 1 – at() (Tasks 1–4)
// 1. Get the first element from [10, 20, 30, 40, 50] using at().
let a=[10, 20, 30, 40, 50]
console.log(a.at(0));

// 2. Get the last element from [5, 10, 15, 20, 25] using at().
let b=[5, 10, 15, 20, 25]
console.log(b.at(4));

// 3. Get the second-last element from [100, 200, 300, 400, 500] using a negative index.
let c=[100, 200, 300, 400, 500]
console.log(c.at(-2));

// 4. Get the third element and third-last element from [11, 22, 33, 44, 55, 66] using at().
let d=[11, 22, 33, 44, 55, 66]
console.log(d.at(2));
console.log(d.at(-3));

10
at.js:26 25
at.js:30 400
at.js:34 33
at.js:35 44



