// let myName = "vishal   ";
// let mychannel = "chai    ";

// console.log(myName.truelength);

let myhero = ["thor","spiderman"];

let heropower = {
    thorpower : "hammer",
    spiderpower : "sling",
}

Object.prototype.vishal = function(){
    console.log(`vishal is present in all objects`);
    
}
Array.prototype.heyvishal = function(){
    console.log(`hey vishal whatsup`);
    
}

// heropower.vishal();
myhero.heyvishal();
// heropower.vishal();
// heropower.heyvishal();


// Inheritance
const User = {
    username : "rakesh",
    email : "rakesh@rakesh.com"
}

const Teacher = {
    makevideo : true
}

const Teachingsupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : 'js assignment',
    fulltime : true,

    __proto__:Teachingsupport
}

Teacher.__proto__= User

//modern syntacx
Object.setPrototypeOf(Teachingsupport,Teacher)
