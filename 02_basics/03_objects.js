// singelton
// Object.create

//objects literal

const jsUser = {
    name : "vishal",
    email : "vk2s.com",
    age : 20,
    isLoggedIn : true,
    location : "jaipur",

}

// console.log(jsUser.email); // bad manner to access 
// console.log(jsUser["email"]) // good manner to access

// console.log(typeof email)


jsUser.email = "vk86@chatgpt.com"
// Object.freeze(jsUser);
jsUser.email = "vk86@gemai.com"

// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello jsUserr");
}

jsUser.greetingTwo = function(){
    console.log(`hello jsUserr,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo())
