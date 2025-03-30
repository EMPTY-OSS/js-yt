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
