// reverse()
// Purpose: The reverse() method reverses the order of elements in an array.
// Modifies original array
// Syntax
// array.reverse();


// Parameters
// It does not accept any parameters.
// Return value
// - Returns the reversed array.
// - Modifies the original array.
// - Returns the same array, not a separate copy.


// Part 4 – reverse() (Tasks 23–30)
// !Remember: reverse() modifies the original array.

// 23. Reverse the array.
// let arr=[10, 20, 30, 40, 50]
// console.log(arr.reverse())
// Expected output: [50, 40, 30, 20, 10]

// 24. Reverse an array of odd numbers.
// let Array= [1, 3, 5, 7, 9]
// console.log(Array.reverse())


// 25. Reverse an array and print both the original variable and the result. Observe what happens.
// let arr= [10, 20, 30, 40]
// console.log(arr)
// console.log(arr.reverse());


// 26. Create a reversed copy of an array without changing the original array. Use slice() and reverse().
// let a=[1, 2, 3, 4, 5]
// console.log(a.slice().reverse())


// 27. Reverse the array and then extract the first three elements using slice().
// let arr=[10, 20, 30, 40, 50, 60]
// console.log(arr.reverse().slice(0,3))



// 28. Use slice() and reverse() together to extract the last three elements in reverse order without modifying the original array.
// let ray=[10, 20, 30, 40, 50, 60]
// console.log(ray.slice(3).reverse())


// 29. Use splice() to remove the last two elements, then use reverse() on the remaining array.
// let arr=[10, 20, 30, 40, 50, 60]
// console.log(arr.splice(0,4).reverse())



// 30. Final challenge: Create a reversed copy of an array, check whether it includes 30, and print the reversed array and the boolean result.

let arr=[10, 20, 30, 40, 50]
let newarr =arr.reverse();
console.log(newarr.includes(30))