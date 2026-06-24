const name = "Pradeep";
const repoCount = 50;

console.log(`hello my name is ${name} and my repository number is ${repoCount}`);

const gameName = new String(" Cricket ");

console.log(gameName[0]); // C
console.log(gameName.__proto__); // [String: 'Cricket']

console.log(gameName.length); // 7
console.log(gameName.toUpperCase()); // CRICKET
console.log(gameName.toLowerCase());
console.log(gameName.split('')); // ['C', 'r', 'i', 'c', 'k', 'e', 't']
console.log(gameName.split("i")); // ['Cr', 'cket']
console.log(gameName.substring(0,4)); // Cric
console.log(gameName.trim()); // Cricket

console.log(gameName.includes("p")); // false
console.log(gameName.includes("Cr")); // true

let str1 = "Pradeep";
console.log(str1.charAt(2));
console.log(str1.charCodeAt(2)); // 97
console.log(str1.indexOf("t")); // -1

console.log(str1.replace('P', 'h'));

console.log(str1.lastIndexOf("e")); // 5

console.log(str1.startsWith('a')); // false
console.log(str1.endsWith('p')); // true
console.log(str1.search("deep")); // 3


let fruits = "apple banana apple";
console.log(fruits.replace("apple", "papaya"));
console.log(fruits.replaceAll("apple", "mango"));
