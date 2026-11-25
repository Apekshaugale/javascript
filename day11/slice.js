// 2. slice()
// Purpose: The slice() method extracts a portion of an array and returns it as a new array.
// Does not modify original array
// Syntax
// array.slice(start, end);


// Parameters
// Parameter	Meaning
// start	Starting index (included)
// end	Ending index (excluded)

// Remember: The end index is not included in the result.
// Return value
// - Returns a new array containing the selected elements.
// - Does not modify the original array.
// - If no elements match the specified range, returns [].

// Part 2 – slice() (Tasks 9–16)
// Remember: slice() does not modify the original array. The ending index is excluded.
// 9. Extract the first three elements.

let Array= [10, 20, 30, 40, 50]
console.log(Array.slice(0,3));
// Expected output: [10, 20, 30]

// 10. Extract the last two elements using negative indexes.

let arr= [10, 20, 30, 40, 50]
console.log(arr.slice(-2))

// 11. Extract elements from index 1 to index 4.

let y= [5, 10, 15, 20, 25, 30]
console.log(y.slice(1,5))
// 12. Extract only the middle three elements.

let r= [10, 20, 30, 40, 50, 60]
console.log(r.slice(1,4))

// 13. Create a copy of the complete array using slice().
b=[1, 2, 3, 4, 5]
console.log(b.slice())

// 14. Extract all elements except the first and last.
// Array: [10, 20, 30, 40, 50, 60]
let big=[10, 20, 30, 40, 50, 60]
console.log(big.slice(1,5))


// 15. Extract the second-half elements using negative indexes.
// Array: [10, 20, 30, 40, 50, 60]
// 16. Create two separate arrays:
// - First array: first three elements.
// - Second array: remaining elements.
// Original array: 
let car=[10, 20, 30, 40, 50, 60]
console.log(car.slice(0,3));
console.log(car.slice(3));








// !7. Important differences
// splice() vs slice()
// splice()	                                 |   slice()
// Can add, remove and replace               |	Only extracts elements
// Modifies original array	                 |  Doesn't modify original array
// Returns removed elements	                 |  Returns extracted elements
// Has deleteCount parameter	             |   Has end parameter