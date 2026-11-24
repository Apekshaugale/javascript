// Level 1 – Basic object destructuring
// Task 11. Extract all object properties

// - Object:
// {
//     name: "Rahul",
//     age: 22,
//     city: "Pune"
// }


// - What to do:
//   1. Extract all three properties.
//   2. Print their values.
// - Expected output: Rahul 22 Pune
// Task 12. Extract selected properties

// - Object:
// {
//     id: 101,
//     name: "Laptop",
//     price: 50000,
//     brand: "Dell"
// }


// - What to do:
//   1. Extract only name and price.
//   2. Print both values.
// - Expected output: Laptop 50000
// Task 13. Use different variable names

// - Object:
// {
//     firstName: "Apeksha",
//     lastName: "Ugale",
//     age: 22
// }


// - What to do:
//   1. Extract firstName into a variable named fname.
//   2. Extract lastName into a variable named lname.
//   3. Extract age into a variable named myAge.
//   4. Print all variables.
// - Expected output: Apeksha Ugale 22
// Task 14. Use default values

// - Object:
// {
//     name: "Priya",
//     age: 21
// }


// - What to do:
//   1. Extract name, age, and city.
//   2. Assign "Mumbai" as the default value for city.
//   3. Print all variables.
// - Expected output: Priya 21 Mumbai
// Task 15. Extract a property that does not exist

// - Object:
// {
//     product: "Mobile",
//     price: 15000
// }


// - What to do:
//   1. Extract product, price, and quantity.
//   2. Print all variables.
//   3. Observe the value of quantity.
// - Expected output:
// Mobile
// 15000
// undefined


// Level 2 – Intermediate object destructuring
// Task 16. Use default values with different variable names

// - Object:
// {
//     username: "admin",
//     password: "12345"
// }


// - What to do:
//   1. Extract username into user.
//   2. Extract password into pass.
//   3. Extract role into userRole, with "Guest" as its default value.
//   4. Print all variables.
// - Expected output: admin 12345 Guest
// Task 17. Extract remaining properties using rest

// - Object:
// {
//     name: "Laptop",
//     price: 50000,
//     brand: "Dell",
//     color: "Black",
//     ram: "16GB"
// }


// - What to do:
//   1. Extract name and price.
//   2. Store all remaining properties in another object using the rest operator.
//   3. Print all three variables.
// - Expected output:
// Laptop
// 50000
// { brand: "Dell", color: "Black", ram: "16GB" }


// Task 18. Use destructuring with a function
// - What to do:
//   1. Create a function named getStudent().
//   2. Return an object containing name, age, and marks.
//   3. Extract all properties using object destructuring.
//   4. Print all values.
// - Expected output: Apeksha 22 85
// Task 19. Extract object properties in a function parameter
// - What to do:
//   1. Create an object containing name, age, and city.
//   2. Create a function named displayStudent().
//   3. Accept an object as a parameter and destructure its properties directly in the parameter.
//   4. Print all properties.
// - Function call: displayStudent({name: "Amit", age: 23, city: "Pune"})
// - Expected output: Amit 23 Pune
// Task 20. Update variable values using object destructuring

// - Object:
// {
//     a: 100,
//     b: 200
// }


// - What to do:
//   1. Create variables a and b with values 10 and 20.
//   2. Extract object properties into the existing variables.
//   3. Print both variables.
// - Expected output: 100 200
// Part 3: Mixed Destructuring
// These tasks combine array and object destructuring.

// Task 21. Array containing objects

// - Array:
// [
//     {name: "Rahul", age: 22},
//     {name: "Priya", age: 21}
// ]


// - What to do:
//   1. Extract the first object from the array.
//   2. Extract its name and age properties.
//   3. Print both.
// - Expected output: Rahul 22
// Task 22. Object containing an array

// - Object:
// {
//     name: "Apeksha",
//     skills: ["Python", "SQL", "JavaScript"]
// }


// - What to do:
//   1. Extract name and skills.
//   2. Extract the first two skills into separate variables.
//   3. Print all three values.
// - Expected output: Apeksha Python SQL
// Task 23. Nested object destructuring

// - Object:
// {
//     name: "Rahul",
//     address: {
//         city: "Pune",
//         state: "Maharashtra"
//     }
// }


// - What to do:
//   1. Extract name.
//   2. Extract city and state from the nested address object.
//   3. Print all three values.
// - Expected output: Rahul Pune Maharashtra
// Task 24. Nested array destructuring

// - Array:
// [10, 20, [30, 40, 50]]


// - What to do:
//   1. Extract 10 and 20.
//   2. Extract 30, 40, and 50 from the nested array.
//   3. Print all five values.
// - Expected output: 10 20 30 40 50
// Task 25. Object with an array and nested object

// - Object:
// {
//     name: "Apeksha",
//     skills: ["Python", "SQL"],
//     address: {
//         city: "Pune",
//         pincode: 411001
//     }
// }


// - What to do:
//   1. Extract name.
//   2. Extract both skills into separate variables.
//   3. Extract city and pincode.
//   4. Print all values.
// - Expected output:
// Apeksha
// Python SQL
// Pune 411001


// Part 4: Advanced Practice
// Task 26. Swap array elements
// - Array: [10, 20, 30, 40]
// - What to do:
//   1. Swap the first and last elements using destructuring.
//   2. Print the modified array.
// - Expected output: [40, 20, 30, 10]
// Task 27. Extract first, middle and remaining elements
// - Array: [10, 20, 30, 40, 50, 60, 70]
// - What to do:
//   1. Extract the first element.
//   2. Skip the second element.
//   3. Extract the third element.
//   4. Store the remaining elements using rest.
// - Expected output:
// 10
// 30
// [40, 50, 60, 70]


// Task 28. Destructure an array returned from a function
// - What to do:
//   1. Create a function named calculate().
//   2. Return an array containing the sum, difference, and product of 20 and 10.
//   3. Extract all three results using array destructuring.
//   4. Print them.
// - Expected output: 30 10 200
// Task 29. Destructure an object returned from a function
// - What to do:
//   1. Create a function named getEmployee().
//   2. Return an object with id, name, salary, and department.
//   3. Extract name and salary.
//   4. Print both values.
// - Expected output: Amit 40000
// Task 30. Combine array and object destructuring

// - Array:
// [
//     {name: "Rahul", marks: 80},
//     {name: "Priya", marks: 90},
//     {name: "Amit", marks: 75}
// ]


// - What to do:
//   1. Extract the first two objects using array destructuring.
//   2. Extract the name and marks properties from both objects.
//   3. Print all four values.
// - Expected output:
// Rahul 80
// Priya 90



// Quick revision: Syntax you need to remember
// 1. Array destructuring
// let [a, b, c] = arr;


// 2. Skipping array elements
// let [a, , c] = arr;


// 3. Array rest
// let [a, b, ...rest] = arr;


// 4. Object destructuring
// let {name, age} = student;


// 5. Rename object properties
// let {name: myName} = student;


// 6. Default values
// let {city = "Pune"} = student;


// 7. Object rest
// let {name, ...rest} = student;


// 8. Nested destructuring
// let {address: {city}} = student;