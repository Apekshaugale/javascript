// # JavaScript Strings – 50 Practice Tasks
// # Level 1: Beginner – Individual string methods
// # A. at()
// # Task 1. Access a character using a positive index
// # - String: "JavaScript"
// # - What to do:
// #   1. Store the string in a variable.
// #   2. Use at() to access the character at index 4.
// #   3. Print the result.
// # - Expected output: "S"

// let s ="JavaScript"
// console.log(s.at(4))


// # Task 2. Access a character using a negative index
// # - String: "Programming"
// # - What to do:
// #   1. Use at() to access the last character.
// #   2. Print the result.
// // # - Expected output: "g"


// let a ="Programming"
// console.log(a.at(-1))


// # Task 3. Access a character outside the string
// # - String: "Python"
// # - What to do:
// #   1. Use at() to access the character at index 10.
// #   2. Print the result.
// # - Expected output: undefined
// # B. charAt()
// let b="Python"
// console.log(b.at(10));



// # Task 4. Access a character using charAt()
// # - String: "Developer"
// # - What to do:
// #   1. Access the character at index 3.
// #   2. Print the result.
// # - Expected output: "e"
// let i="Developer"
// console.log(i.at(3));


// # Task 5. Access the last character using charAt()
// # - String: "Computer"
// # - What to do:
// #   1. Find the last character using the string's length.
// #   2. Use charAt() to access it.
// #   3. Print the result.
// # - Expected output: "r"
// let r = "Computer";
// let lastChar = r.charAt(r.length - 1);
// console.log(lastChar); // "r"


// # Task 6. Compare at() and charAt()
// # - String: "JavaScript"
// # - What to do:
// #   1. Access the last character using at(-1).
// #   2. Access the character using charAt(-1).
// #   3. Print both results.
// # - Expected output:
// # t
// let arr="JavaScript"
// console.log(o.at(-1))
// console.log(o.charAt(-1))
// # The first result is "t" and the second is an empty string ("").


// # C. charCodeAt()
// # Task 7. Find the character code
// # - String: "ABC"
// # - What to do:
// #   1. Use charCodeAt() to get the character code of the first character.
// #   2. Print the result.
// # - Expected output: 65
// s="ABC"
// console.log(s.charCodeAt('A'));



// # Task 8. Find the character code at a specific position
// # - String: "HELLO"
// # - What to do:
// #   1. Find the character code of the character at index 4.
// #   2. Print the result.
// # - Expected output: 79
// s="HELLO"
// console.log(s.charCodeAt(s[4]));



// # D. concat()
// # Task 9. Combine two strings
// # - String 1: "Hello"
// # - String 2: "World"
// # - What to do:
// #   1. Use concat() to combine both strings.
// #   2. Print the result with a space between the words.
// # - Expected output: "Hello World"
// let Str= "Hello"
// let S = "World"
// console.log(Str.concat(' ',S));

// # Task 10. Combine three strings
// # - String 1: "I"
// # - String 2: "Love"
// # - String 3: "JavaScript"
// # - What to do:
// #   1. Use concat() to combine all three strings.
// #   2. Add spaces between the words.
// #   3. Print the result.
// # - Expected output: "I Love JavaScript"
// # E. endsWith()
//  a= "I"
// b= "Love"
// c= "JavaScript"
// console.log(a.concat(" ",b," ",c));


// # Task 11. Check the ending of a string
// # - String: "JavaScript"
// # - What to do:
// #   1. Check whether the string ends with "Script".
// #   2. Print the result.
// # - Expected output: true
// let s="JaaScript"
// console.log(s.endsWith('Script'));




// # Task 12. Check an incorrect ending
// # - String: "Programming"
// # - What to do:
// #   1. Check whether the string ends with "Java".
// #   2. Print the result.
// # - Expected output: false
// s="Programming"
// console.log(s.endsWith("Jaa"));


// # F. includes()
// # Task 13. Check whether a word exists
// # - String: "I am learning JavaScript"
// # - What to do:
// #   1. Check whether the string contains "learning".
// #   2. Print the result.
// # - Expected output: true
// let s="I am learning JavaScript"
// console.log(s.includes("learning"));


// # Task 14. Check whether a character exists
// # - String: "Computer"
// # - What to do:
// #   1. Check whether the string contains "z".
// #   2. Print the result.
// # - Expected output: false
// let a="Computer"
// console.log(a.includes("z"));



// # Task 15. Check whether a word exists from a particular position
// # - String: "JavaScript is a programming language"
// # - What to do:
// #   1. Check whether "JavaScript" exists starting from index 10.
// #   2. Print the result.
// # - Expected output: false
// # G. indexOf() and lastIndexOf()
// let a="JavaScript is a programming language"
// console.log(a.indexOf("JavaScript"));


// # Task 16. Find the first occurrence
// # - String: "JavaScript Programming"
// # - What to do:
// #   1. Find the first occurrence of "a" using indexOf().
// #   2. Print the result.
// # - Expected output: 1
// let a="JavaScript Programming"
// console.log(a.indexOf("a"));


// # Task 17. Find the last occurrence
// # - String: "banana"
// # - What to do:
// #   1. Find the last occurrence of "a" using lastIndexOf().
// #   2. Print the result.
// # - Expected output: 5
// let a="banana"
// console.log(a.lastIndexOf("a"))


// # Task 18. Search for a word
// # - String: "I am learning Python and Python is easy"
// # - What to do:
// #   1. Find the first occurrence of "Python".
// #   2. Find the last occurrence of "Python".
// #   3. Print both results.
// # - Expected output:
// # 13
// # 24
// let a= "I am learning Python and Python is easy"
// console.log(a.indexOf("Python"));
// console.log(a.lastIndexOf("Python"));


// # Level 2: Beginner to Intermediate – Formatting and modifying strings
// # H. padEnd()
// # Task 19. Add padding at the end
// # - String: "5"
// # - What to do:
// #   1. Use padEnd() to make the string length 5.
// #   2. Use "0" as the padding character.
// #   3. Print the result.
// # - Expected output: "50000"
// s="5"
// console.log(s.padEnd(5,0));


// # Task 20. Add custom padding
// # - String: "Hi"
// # - What to do:
// #   1. Make the string length 8.
// #   2. Use "*" as the padding character.
// #   3. Print the result.
// # - Expected output: "Hi******"
// # I. padStart()
// let s="Hi"
// console.log(s.padStart(8,"*"));
// console.log(s.padEnd(8,"*"));


// # Task 21. Add zeros at the beginning
// # - String: "25"
// # - What to do:
// #   1. Make the string length 5.
// #   2. Add zeros at the beginning.
// #   3. Print the result.
// # - Expected output: "00025"
// let a="25"
// console.log(a.padStart(5,0));


// # Task 22. Add custom padding at the beginning
// # - String: "Hello"
// # - What to do:
// #   1. Make the string length 10.
// #   2. Use "-" as the padding character.
// #   3. Print the result.
// # - Expected output: "-----Hello"
// # J. repeat()


// # Task 23. Repeat a string
// # - String: "Hello "
// # - What to do:
// #   1. Repeat the string 3 times.
// #   2. Print the result.
// # - Expected output: "Hello Hello Hello "
// let s="Hello "
// console.log(s.padEnd(3,"Hello "));


// # Task 24. Repeat a symbol
// # - String: "*"
// # - What to do:
// #   1. Repeat the symbol 10 times.
// #   2. Print the result.
// # - Expected output: "**********"
// let s="*"
// console.log(s.padEnd(10,"*"));

// # Task 25. Repeat a word using a function
// # - What to do:
// #   1. Create a function named repeatWord().
// #   2. Accept a word and a number as parameters.
// #   3. Repeat the word according to the given number.
// #   4. Return the result.
// # - Function call: repeatWord("Java", 3)
// # - Expected output: "JavaJavaJava"
// # K. startsWith()

let repeatWord=(word,num)=>{
    let a=word*num
    return a

}
 repeatWord("Java", 3)
 
// # Task 26. Check the beginning of a string
// # - String: "JavaScript"
// # - What to do:
// #   1. Check whether the string starts with "Java".
// #   2. Print the result.
// # - Expected output: true

// # Task 27. Check the beginning from a particular position
// # - String: "Hello JavaScript"
// # - What to do:
// #   1. Check whether "Java" starts at index 6.
// #   2. Print the result.
// # - Expected output: true
// # L. toUpperCase() and toLowerCase()

// # Task 28. Convert to uppercase
// # - String: "javascript programming"
// # - What to do:
// #   1. Convert the complete string into uppercase.
// #   2. Print the result.
// # - Expected output: "JAVASCRIPT PROGRAMMING"

// # Task 29. Convert to lowercase
// # - String: "PYTHON PROGRAMMING"
// # - What to do:
// #   1. Convert the complete string into lowercase.
// #   2. Print the result.
// # - Expected output: "python programming"

// # Task 30. Convert two different strings
// # - String 1: "hello world"
// # - String 2: "GOOD MORNING"
// # - What to do:
// #   1. Convert the first string into uppercase.
// #   2. Convert the second string into lowercase.
// #   3. Print both results.
// # - Expected output:
// # HELLO WORLD
// # good morning
// # M. trim(), trimStart() and trimEnd()


// # Task 31. Remove spaces from both sides
// # - String: "   JavaScript   "
// # - What to do:
// #   1. Use trim() to remove spaces from the beginning and end.
// #   2. Print the result.
// # - Expected output: "JavaScript"

// # Task 32. Remove spaces from the beginning
// # - String: "     Python"
// # - What to do:
// #   1. Use trimStart().
// #   2. Print the result.
// # - Expected output: "Python"

// # Task 33. Remove spaces from the ending
// # - String: "Java Programming     "
// # - What to do:
// #   1. Use trimEnd().
// #   2. Print the result.
// # - Expected output: "Java Programming"
// # Task 34. Compare all three trimming methods
// # - String: "   Hello World   "
// # - What to do:
// #   1. Apply trim() to the string.
// #   2. Apply trimStart() to the string.
// #   3. Apply trimEnd() to the string.
// #   4. Print all three results separately.
// # - Expected output:
// # Hello World
// # Hello World   
// #    Hello World


// # Level 3: Intermediate – Method chaining
// # In these tasks, use one method after another on the same string expression. For example, the result of the first method becomes the input for the next method.
// # N. Basic method chaining
// # Task 35. Trim and convert to uppercase
// # - String: "   hello javascript   "
// # - What to do:
// #   1. Remove spaces from both sides.
// #   2. Convert the result into uppercase.
// #   3. Use method chaining.
// # - Expected output: "HELLO JAVASCRIPT"

// s=" hello   Javascript  "
// console.log(s.trim());

// # Task 36. Trim and convert to lowercase
// # - String: "   PYTHON PROGRAMMING   "
// # - What to do:
// #   1. Remove spaces from the beginning.
// #   2. Convert the result into lowercase.
// #   3. Use method chaining.
// # - Expected output:
// a= "   PYTHON PROGRAMMING   "
// console.log(a.trimStart().toLowerCase());
  


// # Task 37. Concatenate and convert to uppercase
// # - String 1: "hello"
// # - String 2: "world"
// # - What to do:
// #   1. Combine both strings with a space between them.
// #   2. Convert the final result into uppercase.
// #   3. Use method chaining.
// # - Expected output: "HELLO WORLD"
//  a= "hello"
// b= "world"
// console.log(a.concat(b).toUpperCase());


// # Task 38. Repeat and convert to uppercase
// # - String: "hi"
// # - What to do:
// #   1. Repeat the string 3 times.
// #   2. Convert the complete result into uppercase.
// #   3. Use method chaining.
// # - Expected output: "HIHIHI"
// s="hi"
// console.log(s.repeat(3).toUpperCase());


// # Task 39. Pad and check the ending
// # - String: "Java"
// # - What to do:
// #   1. Use padEnd() to make the string length 8.
// #   2. Use "*" for padding.
// #   3. Check whether the final string ends with "***".
// #   4. Use method chaining.
// # - Expected output: true
// s="Java"
// console.log(s.padEnd(8,"*").endsWith("***"));



// # Task 40. Convert and check whether a word exists
// # - String: "I love javascript"
// # - What to do:
// #   1. Convert the string into uppercase.
// #   2. Check whether it includes "JAVASCRIPT".
// #   3. Use method chaining.
// # - Expected output: true
// # O. Intermediate method chaining
// s="I love javascript"
// console.log(s.toUpperCase().includes("JAVASCRIPT"));


// # Task 41. Trim and check the beginning
// # - String: "    JavaScript is easy"
// # - What to do:
// #   1. Remove spaces from the beginning.
// #   2. Check whether the resulting string starts with "JavaScript".
// #   3. Use method chaining.
// # - Expected output: true
// a="    JavaScript is easy"
// console.log(a.trimStart().startsWith("JavaScript"));


// # Task 42. Trim and check the ending
// # - String: "Learning Python     "
// # - What to do:
// #   1. Remove spaces from the ending.
// #   2. Check whether the resulting string ends with "Python".
// #   3. Use method chaining.
// # - Expected output: true
// s= "Learning Python     "
// console.log(s.trimEnd().endsWith("Python"));



// # Task 43. Concatenate, trim and convert
// # - String 1: "   hello"
// # - String 2: " world   "
// # - What to do:
// #   1. Combine both strings.
// #   2. Remove extra spaces from the beginning and end.
// #   3. Convert the final result into uppercase.
// #   4. Use method chaining.
// # - Expected output: "HELLO WORLD"
// let a= "   hello"
// let b= " world   "
// console.log(a.concat(b).trim().toUpperCase());


// # Task 44. Pad, repeat and convert
// # - String: "5"
// # - What to do:
// #   1. Use padStart() to make the string length 3, adding zeros.
// #   2. Repeat the result twice.
// #   3. Convert the final result into uppercase.
// #   4. Use method chaining.
// # - Expected output: "005005"
// let s="5"
// console.log(s.padStart(3,"0").repeat(2).toUpperCase());


// # Task 45. Repeat and check the beginning
// # - String: "Java"
// # - What to do:
// #   1. Repeat the string twice.
// #   2. Check whether the final string starts with "JavaJava".
// #   3. Use method chaining.
// # - Expected output: true
// let s="Java"
// console.log(s.repeat(2).endsWith("JavaJava"));

// # Level 4: Advanced practice – Combining methods and functions
// # Task 46. Find the last character and convert it
// # - String: "javascript"
// # - What to do:
// #   1. Use at() to access the last character.
// #   2. Convert that character into uppercase.
// #   3. Print the result.
// # - Expected output: "T"
// let a="javascript"
// console.log(a[9].toUpperCase());


// # Task 47. Find the position of a character after conversion
// # - String: "JavaScript"
// # - What to do:
// #   1. Convert the string into lowercase.
// #   2. Find the first occurrence of "a".
// #   3. Find the last occurrence of "a".
// #   4. Print both positions.
// # - Expected output:
// # 1
// # 3
// let r="JavaScript"
// console.log(r.toLowerCase().indexOf("a"));
// console.log(r.toLowerCase().lastIndexOf("a"));


// # Task 48. Create a string-checking function
// # - What to do:
// #   1. Create a function named checkWord().
// #   2. Accept a string and a word as parameters.
// #   3. Remove extra spaces from the string.
// #   4. Convert the string into lowercase.
// #   5. Check whether the string includes the given word.
// #   6. Return the result.
// # - Function call: checkWord("   I Love JavaScript   ", "javascript")
// # - Expected output: true
// let checkWord=(str,word)=>{
//    let a= str.trim().toLowerCase().includes(word)
//    return a
// }
// console.log(checkWord("   I Love JavaScript   ", "javascript"));


// # Task 49. Create a string-formatting function
// # - What to do:
// #   1. Create a function named formatName().
// #   2. Accept a name as a parameter.
// #   3. Remove extra spaces from both sides.
// #   4. Convert the name into uppercase.
// #   5. Add "***" at the end using padEnd() so that the final string length is 15.
// #   6. Return the result.
// # - Function call: formatName("   Apeksha   ")
// # - Expected output: "APEKSHA********"
// let formatName=(names)=>{
//     let b=names.trim().toUpperCase().padEnd(15,"***")
//     return b
// }
// console.log(formatName("   Apeksha   "));

// # Task 50. Final challenge – String processing
// # - String: "   javascript is an interesting language   "
// # - What to do:
// #   1. Remove spaces from both sides.
// #   2. Convert the complete string into uppercase.
// #   3. Check whether it starts with "JAVASCRIPT".
// #   4. Check whether it ends with "LANGUAGE".
// #   5. Find the first occurrence of "A".
// #   6. Find the last occurrence of "A".
// #   7. Print the final string and all four results.
// # - Expected output:
// # JAVASCRIPT IS AN INTERESTING LANGUAGE
// # true
// # true
// # 1
// # 32
// let a="   javascript is an interesting language   "
// console.log(a.trim().toUpperCase().startsWith("JAVASCRIPT"));
// console.log(a.trim().toUpperCase().endsWith("LANGUAGE"));
// console.log(a.trim().toUpperCase().indexOf("A"));
// console.log(a.trim().toUpperCase().lastIndexOf("A"));


// # Practice rules
// # 1. Try to solve each task yourself before checking a solution.
// # 2. Use only the methods mentioned in the task.
// # 3. For method-chaining tasks, try to write the methods in a single expression.
// # 4. Use console.log() to check your results.
// # 5. Remember: strings are immutable in JavaScript. String methods return a result; they do not change the original string.
// # Important: Method names to remember
// # Method	Purpose
// # at()	Access character by index
// # charAt()	Access character by index
// # charCodeAt()	Get character code
// # concat()	Combine strings
// # endsWith()	Check ending
// # includes()	Check whether text exists
// # indexOf()	Find first occurrence
// # lastIndexOf()	Find last occurrence
// # padEnd()	Add padding at the end
// # padStart()	Add padding at the beginning
// # repeat()	Repeat a string
// # startsWith()	Check beginning
// # toUpperCase()	Convert to uppercase
// # toLowerCase()	Convert to lowercase
// # trim()	Remove spaces from both sides
// # trimStart()	Remove beginning spaces
// # trimEnd()	Remove ending spaces