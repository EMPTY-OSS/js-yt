//the data is catagorise in two , where how the data is stored in menory and access it .

//one is PRIMITIVE and the second oneis NONPRIMITIVE.

//PRIMITVE

// 7 TYPES  : String, Number, Boolen, Null, Undefined, Symbol, BigInt

const score = 100

const IsLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

///const bigNumber = 232243424




// Reference type (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","ravi", "ravan"]

let myObj = {
    name:"ravi",
    age: 23
}

const myfunction = function(){
    console.log("Hello World");
 
    
}

console.log(typeof outSideTemp);




//*******************************


//two types of memory  

// STACK  (PRIMITIVE )   OR   HEAP(NON PRMIITVE)

//E.G

let myYoutubeName = "ravisainidotcom"

let anotherName = myYoutubeName
anotherName = "raviravi"

console.log(anotherName);
console.log(myYoutubeName);

//if we change the name of data ,the preovious name didn't change becoz of the new name, that is the copy of the previous data.

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl" 
}

let userTwo = userOne

userTwo.email = "ravi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
