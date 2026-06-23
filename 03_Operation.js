// ***********************Operattion**********************

let value = 3;
let negValue = -value;
console.log(negValue);


let str1 = "Pradeep";
let str2 = " Gauddab";

console.log(str1 + str2);
console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 2);


//Arithmatic Operations

let a = 10;
let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//Assignment Operator
let x = 5;

x += 2;
x -= 1;
x *= 4;
x /= 3;
x %= 3;

// 2. Assignment Operators
let x = 5;

x += 2; // x = x + 2 => 7
x -= 1; // 6
x *= 2; // 12
x /= 3; // 4
x %= 3; // 1

// 3. Comparison Operators
// Return true or false.

console.log(5 == "5");   // true (value only) "==" check value only
console.log(5 === "5");  // false (value + type) "===" check value and datatype also

console.log(5 != "5");   // false
console.log(5 !== "5");  // true

console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 9);    // false

// 4. Logical Operators
let age = 20;

console.log(age > 18 && age < 30); // true (AND)
console.log(age > 18 || age < 10); // true (OR)
console.log(!(age > 18));          // false (NOT)


// 5. Increment & Decrement
let n = 5;

n++; // 6
n--; // 5

console.log(++n); // pre-increment
console.log(n++); // post-increment


// 6. String Operators
let first = "Hello";
let second = "World";

console.log(first + " " + second);

// Hello World
// 7. Ternary Operator

// Short form of if...else.

let age = 18;

let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // Adult

// 8. Type Operators
console.log(typeof 123);      // "number"
console.log(typeof "Hello");  // "string"

let arr = [1, 2, 3];
console.log(arr instanceof Array); // true

// 9. Nullish & Optional Chaining
let name = null;

console.log(name ?? "Guest"); // Guest

let user = {};
console.log(user.address?.city); // undefined


// Operator Precedence (Order of Execution)
// () Parentheses
// **
// *, /, %
// +, -
// Comparison (>, <, ===, etc.)
// Logical (&&, ||)
// Assignment (=)




