let colors = ["red", "blue", "yellow", "green"];


//without Destructuring
const first = colors[0];
const second = colors[1];

console.log(first);
console.log(second);


//with Destructuring

const [color1, color2] = colors;

console.log(color1);
console.log(color2);

//skipping Element

const element = [10, 20, 30, 40];

const [a, , c] = element;
console.log(a);
console.log(c);

//use Rest operator

const number = [1, 2, 3, 4, 5];

const [first1, ...rest] = number;
console.log(first);
console.log(rest);





