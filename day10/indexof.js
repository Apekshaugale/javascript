// What is indexOf()?
// The indexOf() method searches for an element in an array and returns the index of its first occurrence.

// If the element is not present, it returns -1.
// Syntax
// array.indexOf(searchElement, fromIndex);


// Parameters:
// Parameter	Meaning
// searchElement	Element you want to search for
// fromIndex	Optional. Index from which the search should start

// Return value:
// - Index of the first matching element.
// - -1 if the element is not found.
// Part 3 – indexOf() (Tasks 9–12)
// 9. Find the index of 30 in [10, 20, 30, 40, 50].
let q=[10, 20, 30, 20, 40]
console.log(q.indexOf(30));
// 10. Find the index of 100 in [10, 20, 30, 40]. Observe the output when the element is not present.
let c=[10, 20, 30, 20, 40]
console.log(c.indexOf(100));
// 11. Find the index of 20 in [10, 20, 30, 20, 40].
let b=[10, 20, 30, 20, 40]
console.log(b.indexOf(20));

// 12. Find the index of 20, starting the search from index 2, in [10, 20, 30, 20, 40].
let a=[10, 20, 30, 20, 40]
console.log(a.indexOf(20,2));

