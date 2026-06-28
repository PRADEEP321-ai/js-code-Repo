function sayMyName() {
    console.log("P");
    console.log("r");
    console.log("a");
    console.log("d");
    console.log("e");
    console.log("e");
    console.log("p");
}

// sayMyName();

// function addTwoNum(num1, num2 /* parameters*/){
//     console.log(num1 + num2);
// }

function addTwoNum(num1, num2 /* parameters*/){
    // let result = num1 + num2
    // return result // after return statement anything never print 
    return num1 + num2
}

addTwoNum(10, 12 /* argument*/ ); // 22
addTwoNum(10, "20") // "1020"
addTwoNum(1, null); // 3

const result = addTwoNum(3, 5); // 8
// console.log("Result: ",result); // undefined


function loginUserMessage(username = "sam"){
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just loggrd In`
}

//console.log(loginUserMessage("Pradeep")); // Pradeep just logged In
// console.log(loginUserMessage()); // undefined just logged In


function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200,34,56,865,578));

const user = {
    username : "Pradeep",
    price : 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject(user);
handleObject({
    username : "sam",
    price : 399
})


const myNewArray = [20, 10, 50, 34];

function returnSecodValue(getArray){
    return getArray[1];
}

console.log(returnSecodValue(myNewArray));
