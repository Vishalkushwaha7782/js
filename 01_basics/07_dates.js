let myDate = new Date()
// console.log(myDate);


// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());

let mycreatedDtae = new Date(2025,6,2)
// console.log(mycreatedDtae.toDateString());

let myCreatedDtae = new Date("01-26-2025")
// console.log(myCreatedDtae.toLocaleDateString());

let myTimestamp = Date.now()
// console.log(myTimestamp)

// console.log(myCreatedDtae.getTime());

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1);

newDate.toLocaleDateString('default',{
    weekday : "long"

    
})
