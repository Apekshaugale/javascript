// join()
// Purpose: The join() method converts all array elements into a single string, using a separator between elements.
// Does not modify original array
// Syntax
// array.join(separator);


// Parameters
// Parameter	Meaning
// separator	Optional separator placed between elements

// If you don't provide a separator, JavaScript uses a comma (,).
// Return value
// - Returns a string.
// - Does not modify the original array.
// - An empty array returns an empty string "".
// Example 1: Join using the default separator
// let arr = ["Java", "Python", "C++"];

// let result = arr.join();

// console.log(result);
// console.log(typeof result);


// Output:
// Java,Python,C++
// string


// Example 2: Join using a space
// let arr = ["Hello", "World"];

// let result = arr.join(" ");

// console.log(result);


// Output:
// Hello World


// Example 3: Join using a hyphen
// let arr = [10, 20, 30, 40];

// let result = arr.join("-");

// console.log(result);


// Output:
// 10-20-30-40


// Example 4: Join using an empty separator
// let arr = ["J", "A", "V", "A"];

// let result = arr.join("");

// console.log(result);


// Output:
// JAVA


// Important points
// - join() always returns a string.
// - join() does not change the original array.
// - join() without a separator uses commas.
// - join("") combines elements without any separator.
// - join(" ") puts spaces between elements.

// 6. Comparison of all five methods
// This table is particularly important for understanding return values and array modification.
// Method	Purpose	Return value	Modifies original?
// splice()	Add/remove/replace	Removed elements array	Yes
// slice()	Extract elements	New array	No
// includes()	Search element	Boolean	No
// reverse()	Reverse elements	Reversed array	Yes
// join()	Convert array to string	String	No