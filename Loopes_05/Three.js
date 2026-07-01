// for of
//the for...of loop is used to iterate over the value of iterable object sunch as:
// 1.Array
// 2.String 
// 3.Maps
// 4.Sets
// 5.NodeLists (from the DOM)

// Unlike for...in, which gives keys (indexes or property names), for...of gives you the actual values.


// ["","", ""];
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const gretting = "Hello World";
for (const greet of gretting) {
    // console.log(`Each char is ${greet}`);
}

//Maps
//map hold the key value pair and remember the original indertion order, all unique value insertion

const map = new Map();
map.set('IN',"India");
map.set('USA', "United states of America");
map.set("Fr", "France");
map.set('IN', "India");

// console.log(map);

for (const [key, value] of map) {
    console.log(key + ": " + value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }