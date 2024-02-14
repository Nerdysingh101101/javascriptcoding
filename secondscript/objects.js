// let va1 = "kabir"
// let va2 = "singh"
// let va3 = "bakshi"
// //console.log(Array.of(va1,va2,va3));

// //after learning loop, try to take the above array and by using of make another array and merge it which will result in letter biforgation of
// //kabir singh bakshi
// let newarr = [...(Array.from(va1)),...(Array.from(va2)),...(Array.from(va3))]
// console.log(newarr);

//hehe done it rn only, methods other than spread is concat but it take only 2 array @ a time

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//2 way to create obj- literal, constructor. 
//literal is simple and constructor is object.create.
//singleton is created when object made through constructor but not through literal
const mysym = Symbol("key1")
// console.log(typeof mysym);
const firstobj = {
    name: "kushpreet singh bakshi",
    dob: "20/12/2002",
    single: true,
    age: 21,
    [mysym]: "keyone"
}

// console.log(firstobj);
// console.log(firstobj["name"]);
// console.log(firstobj.dob);
// console.log(firstobj["single"]);
// console.log(firstobj[mysym]);

//******************************************************************************************************************************* */

let obj2 = {
    0: "a",
    1: "b"
}
// console.log(obj2);
let obj3 = {
    2: "c",
    3: "d"
}
// console.log(obj3);

//const obj4 = {...obj2,...obj3}
//to use spread for array use sq bracket[] and for using spread on object, use {}
//console.log(obj4);

//nesting works simple in javascript objectives
//assign method in object
const obj4 = Object.assign(obj2,obj3)
// console.log(obj4);
// console.log(obj2);
// console.log(obj4 === obj2);

// console.log(Object.keys(firstobj))
 console.log(firstobj);

 //********************************************* destructuring of objects******************************************************************************* */
 //this is called the destructuring an object wherein we extracts the properties of an object and can use them independently without need to call them
 // through the name of the object using dot operator
const {name : naam, dob: paidaish, single: akela, age: umar} = firstobj
console.log(naam);
console.log(paidaish);
console.log(akela);
console.log(umar);