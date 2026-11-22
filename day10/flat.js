// What is flat()?
// The flat() method is used to convert a nested array into a new array by removing nested levels.

// In simple words, it takes elements from inner arrays and brings them into the outer array.
// Syntax
// array.flat(depth);


// Parameter:

// depth determines how many levels of nested arrays should be flattened.
// - Default depth is 1.
// - flat(1) flattens one level.
// - flat(2) flattens two levels.
// - flat(Infinity) flattens all levels.
// Return value: Returns a new flattened array. The original array remains unchanged.
 // Part 5 – flat() (Tasks 16–19)
 // 16. Convert the following nested array into a single-level array using flat().
// a= [1, 2, [3, 4], 5, 6]
// console.log(a.flat());

// 17. Flatten an array containing two levels of nested arrays.

// [1, [2, 3], [4, [5, 6]]]

a= [1, [2, 3], [4, [5, 6]]]
console.log(a.flat(2));
// 18. Flatten the following array completely using the appropriate depth.

b=[1, [2, [3, [4, [5]]]]]
console.log(b.flat(4))

// 19. Use flat() with depth 2 on:

c=[10, [20, [30, 40], 50], [60, 70]]
console.log(c.flat(2))
console.log(c.flat(1))

// Observe the difference between flat(1) and flat(2).

