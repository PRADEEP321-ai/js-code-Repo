// reduce() Methods

// the reduce() method is used to reduce an array into a single value by appplying a callback function to each element. 

// The result can be:

// A number (sum, product, average)
// A string
// An object
// An array
// Any other single value

// It is one of the most powerful array methods in JavaScript.


// Syntax: 
// array.reduce((accumulator, currentValue, index, array) => {
//     // Return updated accumulator
// }, initialValue);

// Parameters
// Parameter	Description
// accumulator	Stores the accumulated result
// currentValue	Current element being processed
// index	Current index (optional)
// array	Original array (optional)
// initialValue	Initial value of the accumulator (optional but recommended)


const myNums = [1, 2, 3, 4];

// const myTotal = myNums.reduce(function (acc, currVal ) {
//     console.log(`acc: ${acc} and currval : ${currVal}`);
//     return acc + currVal;
// }, 0)

const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const PriceToPay =shoppingCart.reduce((acc,item) => (acc + item.price), 0)

console.log(PriceToPay);
