
//these are array specific loops

//############################################for of######################################################
//for of returns the value of the iterable objects like arrays and strings
let ofarr = [11,22,33,44,55]
let ofstr = "kushpreet singh bakshi"
let ofobj = {
    name: "simar",
    age: 20,
    gender: "male"
}

// let ofmap = new Map("first", 11)
//  ofmap = new Map("first", 11)
//  ofmap = new Map("first", 11)
//  ofmap = new Map("first", 11)
//  ofmap = new Map("first", 11)

console.log(`ARRAY`);
for (const elements of ofarr) {
    console.log(`the elements of array are ${elements}`);
}
console.log(`STRING`);

for (const elements of ofstr) {
    console.log(`the elements of array are ${elements}`);
}

console.log(`OBJECT`);

// for (const elements of ofobj) {
//     console.log(`the elements of array are ${elements}`);
// }
console.log(`OBJECT PART 2`);


for (const elements of ofarr) {
    console.log(`the keys of array are ${elements}`);
}

//as of our research for of does not work on objects
// console.log(`MAP`);

// for (const elements of ofmap) {
//     console.log(`the elements of map are ${elements}`);
// }

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&for in&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// for in loop gives the keys as the output and not the actual value like for of loop

let onarr = [11,22,33,44,55]
let onstr = "kushpreet singh bakshi"
let onobj = {
    name: "simar",
    age: 20,
    gender: "male"
}

// let onmap = new Map("first", 11)
//  onmap = new Map("first", 11)
//  onmap = new Map("first", 11)
//  onmap = new Map("first", 11)
//  onmap = new Map("first", 11)

console.log(`ARRAY`);
for (const elements in onarr) {
    console.log(`the elements on array are ${elements}`);
}
console.log(`STRING`);

for (const elements in onstr) {
    console.log(`the elements on array are ${elements}`);
}

console.log(`OBJECT`);

for (const elements in onobj) {
    console.log(`the elements on array are ${elements} and values are ${onobj[elements]}`);
}
console.log(`OBJECT PART 2`);


for (const elements in onarr) {
    console.log(`the keys in array are ${elements} and value are ${onarr[elements]}`);
}

// //as of our research for of does not work on objects
// console.log(`MAP`);

// for (const elements in onmap) {
//     console.log(`the elements on map are ${elements}`);
// }