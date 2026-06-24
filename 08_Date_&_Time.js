
// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let myCreateDate = new Date(2023, 1, 23);
// console.log(myCreateDate.toLocaleString());
// console.log(myCreateDate.getMonth());
// console.log(myCreateDate.getDay());
// console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

`${newDate.getDate()} and the time`

let data = newDate.toLocaleString('default', {
    weekday : "short",
});

console.log(data);
