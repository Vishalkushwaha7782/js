// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "hello"

for(const greet of greeting){
    // console.log(`each char is : ${greet}`);
}

//maps

const map = new Map()
map.set('IN',"INDIA")
map.set('US',"UNITED STATE")
map.set('EN',"ENGLAND")

// console.log(map);

for(const [key,value] of map){  // here "[]" is syntax
    console.log(key,"-",value);
}
