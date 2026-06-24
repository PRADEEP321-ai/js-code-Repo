let num1 = 120;
console.log(num1);

let num2 = new Number(12000);
console.log(num2);

console.log(num2.toString().length); // "12000" & "String type"
console.log(num2.toFixed(2)); // "12000.00"

console.log(num1.toString()); // "120" & "String type"
console.log(num1.toFixed(2)); // "120.00"

let num3 = 112.34567;
console.log(num3.toFixed(2)); // 112.35
console.log(num3.toFixed(4)); // 112.3457
console.log(num3.toPrecision(2)); // 11e+2
console.log(num3.toPrecision(4)); // 112.3

let num4 = 123456789
console.log(num4.toLocaleString("en-IN"));


//+++++++++++++++++++++++ Math ++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.sqrt(49));
console.log(Math.floor(4.76));
console.log(Math.round(4.5));
console.log(Math.pow(2, 4));
console.log(Math.max(1,22,3,5,6,6));
console.log(Math.min(4.31,4,6,8,2,1));


console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));

