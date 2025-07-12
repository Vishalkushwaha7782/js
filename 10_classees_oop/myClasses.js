// ES6

// class User {
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
    
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const name = new User("vishal;","vk@gmail.com","123")

// console.log(name.encryptPassword());
// console.log(name.changeUsername());

// behind the scenne

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const name = new User("vishal;","vk@gmail.com","123")

console.log(name.encryptPassword());
console.log(name.changeUsername());