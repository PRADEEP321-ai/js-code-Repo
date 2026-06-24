// Array

let arr = [0, 1, 2, 3, 4, 5];
console.log(arr);

const arr2 = new Array(1,2,4,5,6);
console.log(arr2);

//access any element
console.log(arr2[2]);

arr2.push(3); // insert element from last in array
console.log(arr2);

arr2.pop(); // remove element from last in array
console.log(arr2);

arr.unshift(9); // insert element in array from first
console.log(arr);

arr.shift(); // remove element from first
console.log(arr);

console.log(arr.includes(0)); // it check value is present or not

console.log(arr2.indexOf(4));

//slice, splice

console.log();
