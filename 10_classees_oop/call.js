function SetUsername(username){
    this.username = username;
}

function createuser(username,email,password){
    SetUsername.call(this,username);
    this.email = email;
    this.password = password;
}

const name = new createuser("vishal","vishal@vishal.com","1234")
console.log(name);
