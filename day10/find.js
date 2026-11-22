// What is find()?
// The find() method is used to search for an element that satisfies a given condition.

// It returns the first element that satisfies the condition.

// If no element satisfies the condition, it returns undefined.
// Syntax
// array.find(callback);


// The callback function can receive three parameters:
// array.find((element, index, array) => {
//     // condition
// });


// Parameter	Meaning
// element	Current element being checked
// index	Index of the current element
// array	Original array being searched

// Return value: The first matching element, or undefined.
// Part 6 – find() (Tasks 20–23)
// 20. Find the first number greater than 50.

arr=[10, 20, 60, 80, 30, 100]
console.log(arr.find((ele)=>{return ele>50}));

// 21. Find the first even number.
// [11, 15, 21, 24, 30, 40]
arr=[11, 15, 21, 24, 30, 40]
console.log(arr.find((ele)=>{return ele%2==0}));

// 22. Create a separate function called checkPositive() and pass it to find().

arr=[-10, -5, 0, 15, 20, 30]
console.log(arr.find((ele)=>{return ele>0}));

// 23. Find the first number whose square is greater than 100.

a= [2, 5, 8, 10, 12, 15]
console.log(a.find((ele)=>{return ele**2>100}));


// find()	                                                filter()
// Returns first matching element	                   Returns all matching elements
// Returns a single element	                       Returns an array
// Stops after first match	                           Checks all elements
// Returns undefined if no match	                   Returns [] if no match