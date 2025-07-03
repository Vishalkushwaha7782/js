const myarr = [0,1,2,3,4,5];
const myheros = ["shaktiman","nagraj"];

const myarr2 = new Array(1,2,3,4)
// console.log(myarr[1]);

// Array Methods

// myarr.push(6)
// myarr.push(7)
// myarr.pop()
// console.log(myarr)

// myarr.unshift(9)
// myarr.shift()

// console.log(myarr.includes(2))
// console.log(myarr.indexOf(2))

// const newArray = myarr.join()
// console.log(myarr)
// console.log(newArray)
// console.log(typeof newArray)
// console.log(typeof myarr)


// slice , splice
console.log("A",myarr)

const myn1 = myarr.slice(1,3)

console.log(myn1)
console.log("B",myarr)

const myn2 = myarr.splice(1,3)
console.log("C",myarr)
console.log(myn2)