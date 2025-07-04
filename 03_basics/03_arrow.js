const user = {
    username : "vishal",
    price : 999,

    welcomemeeassage: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomemeeassage();
// user.username = "sam";
// user.price = 100;
// user.welcomemeeassage();
// console.log(this);

// function chai(){
//     const username = "aman";
//     console.log(this.username);
// }
// chai();

// const  chai = function(){
//     const username = "aman";
//     console.log(this.username);
// }

// ARROW FUNCTION

const  chai = () => {
    const username = "aman";
    console.log(this);
}
// chai();



// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1,num2) => num1 + num2;  //implicit return

// const addTwo = (num1,num2) => (num1 + num2);

const addTwo = (num1,num2) => ({username : "vishal"});


console.log(addTwo(3,4));
