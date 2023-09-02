const marvel_heros =["thor","ironman","spiderman"]
const dc_heros =["superman","flash","batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);

// const all_new_heros = [...marvel_heros,...dc_heros]

// console.log(all_new_heros);

// const all_new_heros =[...marvel_heros,...dc_heros]

console.log(all_new_heros);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Hitesh"})) ///intersting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));