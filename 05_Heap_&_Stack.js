// 1. Stack Memory

// Stack memory stores primitive data types:

// Number
// String
// Boolean
// Undefined
// Null
// Symbol
// BigInt

// When you assign one primitive variable to another, a copy is created.

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

// Stack

// a = 10
// b = 10  ← copy of a



// *******************************************//
// 2. Heap Memory

// Heap memory stores reference types:

// Object
// Array
// Function

// The actual object is stored in the heap, while the variable stores a reference (address).

let user1 = {
  name: "Pradeep"
};

let user2 = user1;

user2.name = "Rahul";

console.log(user1.name); // Rahul
console.log(user2.name); // Rahul

// Stack                    Heap

// user1 -----------+
//                  |
// user2 -----------+----> { name: "Pradeep" }