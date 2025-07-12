const user = {
    username : "vishal",
    logincount :8,
    isloggedin : true,

    getuserdetails : function(){
        // console.log("got user details from database");
        console.log(`username : ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getuserdetails());
// console.log(this);


// constructor function

function User(username,logincount,isloggedin){
    this.username = username
    this.logincount = logincount
    this.isloggedin = isloggedin

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("vishal",12,true)
const userTwo = new User("aman",10,false)
console.log(userOne);
// console.log(userTwo);



