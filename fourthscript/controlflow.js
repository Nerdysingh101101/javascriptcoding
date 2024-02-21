// What is the purpose of control flow statements in JavaScript?
// Differentiate between if, else if, and else statements in JavaScript with an example.

// const random1 = 560
// if(random1 < 1000 && false){
//     console.log("if block exected");
// }
// else if(random1 > 500 && (typeof random1) === "number")
// {
//     console.log(`good elseif block executed`);
// }
// else{
//     console.log(`else block executed`);
// }
// console.log(typeof random1);
// Explain the concept of nested if statements in JavaScript. Provide a simple example.


// How does the switch statement differ from if-else statements in JavaScript? Give an example of when you might prefer to use a switch statement.
// What is a ternary operator in JavaScript? How does it work, and when might you use it?
const random2 = 500
let conditonans = random2>100?5:10
// console.log(`${conditonans}`);
// How do you write a for loop in JavaScript? Provide an example of iterating through an array using a for loop.
// What is the purpose of a while loop in JavaScript? Provide an example.
// Explain the difference between break and continue statements in JavaScript. When would you use each?
// Describe the concept of truthy and falsy values in JavaScript, and how they affect control flow decisions.
// How can you use && and || operators in JavaScript to control flow? Provide an example of each.


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ loops @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 

let optnum = 5
let factorial = 1
for(let i = 1; i<=optnum; i++){
    factorial = factorial * i
    console.log(factorial);
}

