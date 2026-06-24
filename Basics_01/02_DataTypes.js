//JavaScript 

let a = 10;
let b = "Pradeep";
let c = true;
let d = null;
let e;

console.log("Value of a: " + a + " and its type is: " + typeof a);
console.log("Value of b: " + b + " and its type is: " + typeof b);
console.log("Value of c: " + c + " and its type is: " + typeof c);
console.log("Value of d: " + d + " and its type is: " + typeof d);
console.log("Value of e: " + e + " and its type is: " + typeof e);

//"33" is a string, but we can convert it to a number using the Number() function
let f = "33";
console.log("Value of f: " + f + " and its type is: " + typeof f);
let g = Number(f);
console.log("Value of g: " + g + " and its type is: " + typeof g);

//"true" is a string, but we can convert it to a boolean using the Boolean() function
let h = "true";
console.log("Value of h: " + h + " and its type is: " + typeof h);
let i = Boolean(h);
console.log("Value of i: " + i + " and its type is: " + typeof i);

//"false" is a string, but we can convert it to a boolean using the Boolean() function
let j = "false";
console.log("Value of j: " + j + " and its type is: " + typeof j);
let k = Boolean(j);
console.log("Value of k: " + k + " and its type is: " + typeof k);

//"null" is a string, but we can convert it to a null using the null value
let l = "null";
console.log("Value of l: " + l + " and its type is: " + typeof l);
let m = null;
console.log("Value of m: " + m + " and its type is: " + typeof m);

//"undefined" is a string, but we can convert it to a undefined using the undefined value
let n = "undefined";
console.log("Value of n: " + n + " and its type is: " + typeof n);
let o = undefined;
console.log("Value of o: " + o + " and its type is: " + typeof o);

//"NaN" is a string, but we can convert it to a number using the Number() function
let p = "NaN";
console.log("Value of p: " + p + " and its type is: " + typeof p);
let q = Number(p);
console.log("Value of q: " + q + " and its type is: " + typeof q);

//"33abc" is a string, but we can notc convert it to a number using the Number() function
let r = "33abc";
console.log("Value of r: " + r + " and its type is: " + typeof r);
let s = Number(r);
console.log("Value of s: " + s + " and its type is: " + typeof s);

//"10abc" is a string, but we can convert it to a number using the parseInt() function
let z = "10abc";
console.log("Value of z: " + z + " and its type is : " + typeof z);
let y = parseInt(z);
console.log("Value of y: " + y + " and its type is : " + typeof y); 

//"10.5abc" is a string, but we can convert it to a number using the parseFloat() function
let w = "10.5abc";
console.log("Value of w: " + w + " and its type is : " + typeof w);
let v = parseFloat(w);
console.log("Value of v: " + v + " and its type is : " + typeof v);


