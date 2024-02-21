//************************************* functions in javascript************************************************************ */

function addone(num1, num2 = 30){
    return num1 + num2
    
}

let output = addone(5,3)
// console.log(output);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const obj2 = {
    username: "kushpreet singh bakshi",
    age: 21,
    hellomessage: function(){
        console.log(`${this.username} , welcome the king of jakarta`);

    }
}

// console.log(obj2.username);
// console.log(obj2["username"]);
// console.log(obj2.hellomessage());

// ############################################################################################################

const arr10 = (arr7) =>{

    console.log(`${arr7.age}`);
}


let obj3 = {
    name: "kushpreet",
    age: 20,
    gender: "male"

}
console.log(Object.values(obj3));
arr10(obj3)