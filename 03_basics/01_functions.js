function saymyname(){
    console.log("v")
    console.log("i")
    console.log("s")
    console.log("h")
    console.log("a")
    console.log("l")
}

// saymyname();

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }
function addTwoNumbers(number1,number2){
    return number1+number2;
}
const result = addTwoNumbers(3,5);
// console.log("result is :",result);

function loginusermessage(username){
    if(/*username === undefined*/ !undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginusermessage());


function addcartprice(val1,val2,...num1){   // ... here it is known as rest operator otherwise it is known as spread operator
    return num1;
}

// console.log(addcartprice(100,200,300,2000));

const user = {
    name:"vishal",
    age : 20,
}
function handleobject(anyobject){
    console.log(`name is ${anyobject.name} and age is ${anyobject.age}`);
}
// handleobject(user)

// handleobject({
//     name : "saurabh",
//     age : 18,
// })

const mynewarraay = [200,3000,400,500];

function returnsecondvalue(getarray){
    return getarray;
}

console.log(returnsecondvalue(mynewarraay));