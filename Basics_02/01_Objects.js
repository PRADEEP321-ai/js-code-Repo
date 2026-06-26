let mySym = Symbol("key1");

let MyUser = {
    name :"Pradeep",
    "full name" :"Pradeep Gauddab",
    [mySym] : "myKey1",
    age : 20,
    location : "pune",
    email : "pradeepgauddab@gmail.com",
    isLoggin : false,
    lastLogginDays : ["Monday", "Saturday"]
}

// console.log(MyUser.age);
// console.log(MyUser["email"]);
// console.log(MyUser["full name"]);
// console.log(typeof  MyUser[mySym]);

MyUser.email = "pradeep@gmail.com";
// Object.freeze(MyUser);
// MyUser.email = "ptljwdkf@akdfvl";
console.log(MyUser);


MyUser.greeting = function() {
    console.log("hello Js user");
}

MyUser.greetingTwo = function() {
    console.log(`hello Js user, ${this.name}`);
}

console.log(MyUser.greeting());
console.log(MyUser.greetingTwo());


