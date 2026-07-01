// What are Truthy and Falsy Values?
// Truthy value → A value that is considered true in a boolean context.
// Falsy value → A value that is considered false in a boolean context.


const userEmail = "pradeep@gmail.ai";

if (userEmail) {
    console.log("Got user email");
}else {
    console.log("Dont have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

let arr = [];

if (arr.length === 0) {
    console.log("Array is empty");
} 

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20

console.log(val1);


//Ternary Operator
//condition ? expressionIfTrue : expressionIfFalse;

const iceTeasPrice = 100;
iceTeasPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

