// let pets = ["Cat", "Dog", "Hamster"];
// pets["species"] = "mammals";
// pets[3] = "koala";

// for (let pet in pets) {
//    console.log(pet); 
// }
// console.log("seperator");
// for (let pet of pets) {
//     console.log(pet); 
// }

// // console.log(pets.species);
// let myobj = {
//     name: "kiushpreet",
//     age: 30
// }

// console.log(myobj);

// ########################################3 foreach ################################################


let arr = [10, 9,8,7,6,5,4,3,2,1, "happy new year"]

arr.forEach(function (countdown) {
    //console.log(`mere saath boliye, BOLO ${countdown}`);
})

//arrow function

arr.forEach((countdown) => {
    //console.log(`mere saath boliye, BOLO ${countdown}`);
})


let myobj2 = [
    {
        name: "satpal singh",
        age: 45
    },
    {
        name: "baljeet kaur",
        age: 43
    },
    {
        name: "kushpreet singh",
        age: 21
    },
    {
        name: "kabir singh",
        age: 17
    },
]

myobj2.forEach( (items) =>{

    //console.log(`the name is ${items['name']} and age is ${items['age']}`);
} )


//###################################################################################################

let arr1 = [1,2,3,4,5]
let sumofelements = 0;

let result = arr1.forEach( (elements) => {
    sumofelements = sumofelements + elements
    return sumofelements
} )

//console.log(result);

arr1.filter

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004, price: 4000 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008, price: 2300 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007, price: 1700 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010, price: 1500 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014, price: 3500 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010, price: 2000 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996, price: 3000 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016, price: 1900 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989, price: 5000 },
  ];

  for (const key in books[2]) {
    // console.log((books[2]).key);
  }
  //console.log(Object.keys(books[2]));

//##############################################filter ##############################################
//in filter it returns values based on given condition but foreach loop dont

  const bookage = books.filter( (eachbook) => { return eachbook.publish > 1990 && eachbook.publish < 2015} )

//  console.log(bookage);

 // add 10 in each element of array

 let samplearr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
 let sumarr = []
 samplearr.forEach( (element) => {
    element += 10
    sumarr.push(element)
    
 } )
// console.log(samplearr[4]);
// console.log(sumarr);

let resultarr = samplearr
                        .filter( (element) => {
                            if((element%2)== 0 ){
                                return element
                            }
                        } )
                        .filter( (element) => {
                            if(element > 10){
                                return element
                            }
                        } )
// console.log(resultarr);

// ################################################ reduce ##################################################

//important in react and used in shopping cart

// ek array hai arr = [1,2,3,4]
//ek initial val  initval = 1, this goes in accumulator
//accumulator is one of the parameters of the callback function passed in reduce method, 
// second parameter is current value of array = ye ek ke baad ek aage badta rahega
//syntax arr.reduce( (accumulator, current value) => accumulator + curent value, initval )

let arr3 = [3,4,5,6]

// const totalval = arr3.reduce( (acc, currval) => {
//     return acc + currval
// }, 200 )

// console.log(totalval);

const bookpricetotal = books.reduce( (acc, currval) => {
    return acc + currval.price
},0 )

console.log(bookpricetotal);
