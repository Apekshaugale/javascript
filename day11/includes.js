// //!default paarmeter

// //!string method(50 task)
//at,uppercase,charat,charcodeat,concat,endswith,include,indexof,lastindexof,padend,padstrat,repeated,
//startwith,lowercase,trim,trimend,trimstart,split

// //!split.reverse.join to reerse the given string 
// 3. includes()
// Purpose: The includes() method checks whether a particular element exists in an array.
// Does not modify original array
// Syntax
// array.includes(searchElement, fromIndex);


// Parameters
// Parameter	Meaning
// searchElement	Element you want to search for
// fromIndex	Optional index from where searching begins

// Return value
// Returns a Boolean value:
// - true if the element exists.
// - false if the element does not exist.


// Part 3 – includes() (Tasks 17–22)
// Remember: includes() returns either true or false.

// 17. Check whether 30 exists.
let ray= [10, 20, 30, 40, 50]
console.log(ray.includes(30));


// 18. Check whether 100 exists.
// Array: [10, 20, 30, 40]
let r= [10, 20, 30, 40]
console.log(r.includes(100));


// 19. Check whether 50 exists in the array using includes() and print "Found" or "Not Found".
// Array: [10, 20, 30, 40, 50]
let a=[10,20,30,40,50]
if (a.includes(50)){
    console.log("found");   
}
else{
    console.log("Not found");  
}


// 20. Check whether the array contains both 20 and 40.
let  y=[10, 20, 30, 40, 50]
console.log(y.includes((20,40)));



// 21. Create a function checkElement() that accepts an array and a number. Return whether the number exists in the array using includes().
let checkElement=(arr,num)=>{
    return arr.includes(num)

}
console.log(checkElement([1,4,5,6,7],5))


// 22. Check whether at least one of the numbers 100, 200, or 300 exists in the array. Use includes().

// Array: 
let b=[10, 20, 100, 40, 50]
if (b.includes(100)){
      console.log("Found")
}
else if (b.includes(200)) {
   console.log("Found")
}
else if (b.includes(300)) {
   console.log("Found")
}
else{
    console.log("NOt Found");
    
}




// Important points
// - includes() returns only true or false.
// - It does not return the index.
// - It is case-sensitive when checking strings.
// - includes(20) and includes("20") are different searches.