const myobject = {
    js :'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'by apple',
}

for (const key in myobject) {
    // console.log(`${key} shortcut is for ${myobject[key]}`);
}

const programming = ["js","rb","c++","py","java"]

for (const key in programming) {
    // console.log(programming[key]);
}

// +++++++++++++++++++ five.js ++++++++++++++++++++++

const coding = ["js","rb","c++","py"]

// coding.forEach( function (val) {  // it is call back function 
//     console.log(val);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })


// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme);

coding.forEach( (item,index,arr) => {
    // console.log(item,index,arr);
})

const myCoding = [
    {
        languagename : "javascript",
        filename : "js",
    },
    {
        languagename : "java",
        filename : "java",
    },
    {
        languagename : "python",
        filename : "py",
    },

]

myCoding.forEach( (item) => {
    console.log(item.languagename);
} )
