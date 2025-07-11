// const promiseOne = new Promise(function(resolve,reject){
//     // Do an async task
//     //DB calls,cryptography
//     setTimeout(function(){
//         console.log('Async task is complete')
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
// })

// new Promisetwo(function(resolve,reject){
//     console.log("Async task 2");
//     reject()
// },1000).catch(function(){
//     console.log("consumed");
    
// })

const promisethree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username : "vishal",email :"vk@vk.c0m"})
    }, 1000);
})

promisethree.then(function(user){
    console.log(user);
    
})


const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username : "rakesh",password :"1234"})
        }else{
            reject('ERROR: something went wrong')
        }
        
    }, 1000);
})

promisefour.then((user)=>{
    console.log(user);
    return user.password;
}).then((username) => {
    console.log(username);
    
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("the promise is either resolved or rejected")
)

const promisefive = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username : "javascript",pass :"123"})
        }else{
            reject("ERROR: js went wrong")
        }
    }, 1000);
})

async function consumepromiseFive() {
    try {
        const response = await promisefive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumepromiseFive();

async function getAllusers(){
    try {
        const response = await fetch('https://randomuser.me/api/')

        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log("E :", error);
        
    }
}
getAllusers();

fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})