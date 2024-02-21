let str1 = "kushpreet singh bakshi"
//console.log(str1);

//************************************************basic string ops*************************************************************
// Basic Level:
// Concatenation: How do you concatenate two strings in JavaScript?
const str2 = "kushpreet"
const str3 = " SINGH"
//console.log(`${str2}${str3}`);
// String Length: How do you find the length of a string in JavaScript?
//console.log(`length of ${str2} is ${str2.length}`);

// Accessing Characters: How can you access the third character in a string?
// console.log(`I the third character of ${str2} is ${str2.charAt("2")}`);
// console.log(`II the third character of ${str2} is ${str2[2]}`);

// Uppercase Conversion: How do you convert a string to uppercase in JavaScript?
//console.log(`the case conversion of ${str2} is ${str2.toUpperCase()}`);
// Lowercase Conversion: How do you convert a string to lowercase in JavaScript?
//console.log(`the case conversion of ${str3} is ${str3.toLowerCase()}`);
// String Comparison: Explain the difference between == and === when comparing two strings.
const x = "x"
const y = x
// console.log(x==y);
// console.log(x===y);
// Substring Extraction: How can you extract a substring from a given string in JavaScript?
const strre = str1.slice(10,14)
console.log(`substring extraction from ${str1} is ${strre}`);
// Whitespace Trimming: How do you remove leading and trailing whitespaces from a string?

// String to Number: How do you convert a string containing a number into an actual number in JavaScript?
let strnum = "55"
let actualnum = Number(strnum)
console.log(typeof actualnum, `${actualnum}`);
// String Representation: What is the result of "5" + 3 in JavaScript?
// result will be 53 
//and if it was 5 + "3", it will still be 53 
//what changes that when we put 3 numbers and first is string then sum will be treated string and if first is number then sum will be treated number
console.log("5" + 3);
console.log(5 + 3 + "2");
