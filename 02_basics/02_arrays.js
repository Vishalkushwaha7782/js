const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros)
// console.log(marvel_heros[3][0])

const allheros = marvel_heros.concat(dc_heros);
// console.log(allheros)

// spread operator

const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros)


const another_array = [1,2,3,[4,3,2],4,5,[1,2,[3,4]]]

const real_array = another_array.flat(Infinity)
// console.log(real_array)

// console.log(Array.isArray("vishal"))
// console.log(Array.from("vishal"))
// console.log(Array.from({name : "vishal"})) // interesting

let scor1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(scor1,score2,score3));