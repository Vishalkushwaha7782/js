// if

const temp = 40;
if(temp === 40){
    // if true then it will execute
    // console.log("executed");
}
else{
    // console.log("not executed");
}

// <,>,<=<,>=,==,!=,===

// const score = 200;
// if(score >100){
//     var power = "fly";
//     console.log(`user power : ${power}`);
// }

//     console.log(`user power : ${power}`);


const balance = 1000;
// if(balance >300) console.log("test");

const userLoggeddIn = true
const debitcard = false 

if(userLoggeddIn && debitcard){
    console.log("Allow to buy course");
}

if(userLoggeddIn || debitcard){
    console.log("Allow to buy course within one hour");
}
