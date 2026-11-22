// /What is concat()?
// The concat() method is used to combine two or more arrays into a new array.

// It can also combine an array with individual values.
// Syntax
// array1.concat(array2, array3, ...);


// Parameters:
// - array2: Second array or value to combine.
// - array3: Third array or value to combine.

// - You can pass multiple arrays and values.

// Return value: Returns a new combined array.
// // Part 2 – concat() (Tasks 5–8)
// 5. Combine two arrays [10, 20, 30] and [40, 50, 60] using concat().
let a1=[10, 20, 30]
let a2=[40, 50, 60]
console.log(a1.concat(a2));


// 6. Combine three arrays [1, 2], [3, 4], and [5, 6] into one array.
let d1=[1, 2]
let d2=[3, 4]
let d3=[5,6]
console.log(d1.concat(d2,d3));


// 7. Add the elements [100, 200] to the end of [10, 20, 30, 40] using concat().
let a4=[100, 200]
let a3=[10,20,30,40]
console.log(a3.concat(a4));


// 8. Combine an array [5, 10, 15] with individual values 20, 25, and 30 using concat().
let a=[5, 10, 15]
let c=20
let r=25
let y=30
console.log(a.concat(c,r,y));



// Difference between push() and concat()
// push()	                                               concat()
// Modifies original array	                          Does not modify original array
// Returns new array length	                      Returns a new combined array
// Adds elements to the original array	             Combines arrays or values


