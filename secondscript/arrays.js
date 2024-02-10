// splice
//takes a portion of array without disturbig the actual array
// splice
//takes a portion of array and disturbs the actual array
// Spread 
//and good way of joining or concatinating two arrays, join converts the array to string and concat only works on 2 arr at a time 
// flat
//opens the array whish is nested and takes also takes depth as parameter 
/*
the difference between of and from function of array is that of creates array of given elements in parenthesis regardless of its type whereas from converts 
any iterable object like string, map, type array etc or array like structures into array. of just combines and not converts but from converts
*/
let arr1 = [5, 6, 3, 4, 7, 0]
let arr2 = [7, 4, 3, 9, 6]
// console.log(arr1.toString());
// console.log(arr2.join(" "));
//join just convert a array to string, useful if data sent as url
let opr1 = arr1.slice(2, 5)
//console.log(typeof opr1);
//console.log(opr1);
//console.log(`before ${arr2}`);
let opr2 = arr2.splice(1, 3)
//console.log(`splice ${opr2}`);
//console.log(`after ${arr2}`);
let newarr1 = [...arr1, ...arr2]
// console.log(newarr1);
let arr3 = [34, 56, 73, [3, 5, 6, 7], 69, 71, [21, 34, 56, [11, [0, 0, 0], 13], 77], 44, 67]
let newarr2 = arr3.flat(1)
let newarr3 = arr3.flat(2)
let newarr4 = arr3.flat(3)
// console.log(newarr2);
// console.log(newarr3);
// console.log(newarr4);
let mynum = new Number(7345)
console.log(mynum);
let frommynum = Array.from(mynum.toString())
console.log(frommynum);
let str1 = "kush"
let str2 = "preet"
let str3 = "singh"
console.log((Array.of(str1, str2, str3)).indexOf("singh"));