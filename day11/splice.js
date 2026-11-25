// 1. splice()
// Purpose: The splice() method is used to add, remove, or replace elements in an existing array.
// Modifies original array
// Syntax
// array.splice(start, deleteCount, item1, item2, ...);


// Parameters
// Parameter	Meaning
// start	    Index from where the operation begins
// deleteCount	 Number of elements to remove
// item1, item2	  Elements you want to insert (optional)

// Return value
// - Returns a new array containing the removed elements.
// - If no elements are removed, it returns an empty array [].
// - It modifies the original array.




// Part 1 – splice() (Tasks 1–8)
// Remember: splice() modifies the original array.

// 1. Remove the element at index 2.
// let Array= [10, 20, 30, 40, 50]
// console.log(Array.splice(2,1));
// console.log(Array);
// Expected output: [10, 20, 40, 50]

// 2. Remove the first two elements.
// let fir= [10, 20, 30, 40, 50]
// fir.splice(0,2)
// console.log(fir);
// Expected output: [30, 40, 50]

// 3. Remove the last element using splice().
// let arr=[5, 10, 15, 20]
// arr.splice(3)
// console.log(arr);



// 4. Insert 100 at index 2 without removing any element.
// let Array=[10, 20, 30, 40]
// Array.splice(2, 0, 100)
// console.log(Array);
// Expected output: [10, 20, 100, 30, 40]


// 5. Insert 50 and 60 at index 1.
// let Array= [10, 20, 30, 40]
// Array.splice(1,0,50,60)
// console.log(Array);
// Expected output: [10, 50, 60, 20, 30, 40]


// 6. Replace the element at index 2 with 999.
// let ray= [10, 20, 30, 40, 50]
// ray.splice(2,1,999)
// console.log(ray);
// Expected output: [10, 20, 999, 40, 50]

// 7. Remove three elements starting from index 1 and store the removed elements in a separate variable.
// let Array=[10, 20, 30, 40, 50, 60]
// let newa =Array.splice(0,3)
// console.log(newa);



// Important points
// - splice(2, 1) → removes one element from index 2.
// - splice(2, 0, 100) → inserts 100 at index 2.
// - splice(2, 1, 100) → replaces the element at index 2 with 100.
// - splice(-1, 1) → removes the last element.