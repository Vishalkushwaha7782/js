// const tinderuser = new Object()

const tinderuser = {}


tinderuser.id = "123c"
tinderuser.name = "vishal"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularuser = {
    fullName : {
        userfullName : {
            firstname : "vishal",
            lastname : "kushwaha"
        }
    }
}

// console.log(regularuser.fullName.userfullName.lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2}
// console.log(obj3);


const cource = {
    coursename :"js in hindi",
    price:"999",
    courceinstructor : "vishal"
}

const {courceinstructor:inst} = cource
console.log(inst);

// {
//    "name":"vishal",
//     "coursename" : "js in hinndi",
//     "price" : "999"
// }

[
    {},
    {},
]