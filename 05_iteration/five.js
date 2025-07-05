// const coding = ["js","rb","c++","py"]

// const values = coding.forEach( (item) => {
//     console.log(item);
// } )

// console.log(values);

// const mynumber = [1,2,3,4,5,6,7,8,9,10]

//  const number = mynumber.filter( (num) => num > 4 )

// const number = mynumber.filter( (num)=>{
//     return num >4 ; // here return is mendetory is write
// } )
//  console.log(number);

// const newnums = mynumber.map( (num) => num + 10 )

// const newnums = mynumber
// .map((num) => num*10)
// .map((num) => num+1)
// .filter((num) => num >=40)
// console.log(newnums);



//           REDUCE METHOD                   //


const mynumes = [1,2,3]

const myTotal = mynumes.reduce( function (acc,curval){
    console.log(`acc is ${acc} and curval is ${curval}`);
    return acc + curval;
},0)  // here we initialize acc value which is 0 you choose any value

console.log(myTotal);

