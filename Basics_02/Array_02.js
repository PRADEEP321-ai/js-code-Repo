const marvel_heros = ["thor", "Ironman", "Captain Amarica"];
const Dc_heros = ["SuperMan", "Batman", "Flash"];

// marvel_heros.push(Dc_heros); // it pust array in existing array  

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// let allHeros = marvel_heros.concat(Dc_heros);
// console.log(allHeros);

//Spread Operator

const allNewHeros = [...marvel_heros, ...Dc_heros];
// console.log(allNewHeros);


let another_Array = [1,2,3,4,[5,3,4,5,6], 7,8, [9,10,11, [1,2,3,4,5]]];
// console.log(another_Array);

let real_another_Array = another_Array.flat(Infinity);
// console.log(real_another_Array);


console.log(Array.isArray("Pradeep")); // false
console.log(Array.from("Pradeep")); //['P', 'r', 'a', 'd', 'e', 'e', 'p']  Creates an array from an iterable object.
console.log(Array.from({name:"Pradeep"})); // interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.



