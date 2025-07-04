// const { captureOwnerStack } = require("react");

const userEmail = {}

if(userEmail){
    // console.log("you got email");
}
else{
    // console.log("don't have email")
}


/* 
    Falsy values :-
    false,0,-0, BigInt on, "", null , undefined , NaN

*/

/*
    truthy values:-
    "0" , 'false , " ", {}, [], function(){}

*/


// Nullish Coalescing Operator (??): null defined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 16
val1 = null ?? undefined ?? 70
console.log(val1);

// Terniary operator

const icePrice = 100

icePrice <= 80 ? console.log("less than 80") : console.log("more than 80");