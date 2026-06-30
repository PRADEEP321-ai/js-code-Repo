// Control flow is the order in which JavaScript execite statement in a program.
// by default, Javascript execute code from top to bottom, one line after another.

//if

const isUserLoggedIn = true;
const temperature = 41

if(temperature === 40){
    console.log("less than 50");
} else {
    console.log("Temperature is greater than 50");
}   

// in control flow we use comparion operator: <, > , <=, >=, ==, !=, ===

// const score = 200;

// if(score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


// const balance = 1000;
// if (balance > 600) console.log("test");

// if (balance > 500) {
//     console.log("less than");
// }else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 900")
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}