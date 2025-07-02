/* Primitive datatypes

    7 Types : sytring,Number,Boolean,null,undefined,symbol,BigInt

*/
const score = 100
const scoreValue = 100.3

const osLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123456789n

/*
    Refrence(non primitive)

    Array,Objects,Functions
*/

const heros = ["shaktiman","doga","Nagraj"];

// in paranthesis these are object
let myobj = {
    name : "vishal",
    age : 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//    ++++++++++++++++++++++++++++++++++++   //

// stack(primitive) , Heap(non primitive)

let myYoutube = "vishaldotcom"

let anothername = myYoutube
anothername = "aman"

console.log(myYoutube)
console.log(anothername)

let userOne = {
    email : "user@google.com",
    upi : "user@ybl",
}

let userTwo = userOne

userTwo.email = "vishal@vishal.com"

console.log(userOne.email);
console.log(userTwo.email);