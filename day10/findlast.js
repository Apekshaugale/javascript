// What is findLast()?
// The findLast() method searches an array from the end and returns the last element that satisfies a given condition.

// It is similar to find(), but it searches in reverse order.
// Syntax
// array.findLast(callback);


// Callback parameters:
// array.findLast((element, index, array) => {
//     // condition
// });


// Parameter	Meaning
// element	Current element being checked
// index	Index of the current element
// array	Original array

// Return value: The last matching element, or undefined.
// // Part 7 – findLast() (Tasks 24–26)
// 24. Find the last even number.

// [10, 15, 20, 25, 30, 35, 40]

// 25. Find the last number greater than 50.

// [10, 60, 20, 80, 30, 100, 40]

// 26. Create a separate function called checkOdd() and pass it to findLast().

// [10, 15, 20, 25, 30, 35, 40]



// find()                                                        	findLast()
// Searches from beginning                          	Searches from end
// Returns first matching element                  	Returns last matching element
// Checks elements left to right                   	Checks elements right to left