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

let arrDemo = [1,5,4,6,7,5,8,9];

let result = arrDemo.slice(1,4); // The Slice method returns a shallow copy of a portion of an array into a new array 
                                    //object selected from start to end (end not included) where start and end represent the 
                                    // index of items in that array. The original array will not be modified.
console.log(result);

let result2 = arrDemo.splice(1,4);   //splice() is used to add, remove, or replace elements in an array and it modifies the original array.
console.log(result2);
