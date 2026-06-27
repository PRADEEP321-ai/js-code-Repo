// const userData  = new Object(); 

const user = {}; //  {}

// console.log(userData); // {}
// console.log(user); // {}

user.name = "Pradeep";
user.id = 123;
user.email = "pradeep@gmail.com";

// console.log(user);


// let regularUser = {
//     email : "some@gmail.com",
//     fullname : {
//         user1Name : {
//             firstName : "Disha",
//             lastName : "Gauddab"
//         },
//         user_2_name : { 
//             firstName : "Pradee",
//             lastName : "Gauddab"
//         }
//     }
// }

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.user1Name);
// console.log(regularUser.fullname  .user_2_name.lastName);

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "A", 4 : "B"};

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// const obj3 = {...obj1, ...obj2};
// console.log(obj3);


const users = [
    {
        email : "pradeep@gmail.com",
        password : 12324
    },
    {
        email : "trupti@gmail.com",
        password : 45677
    },
    {
        email : "pratham@gmail.com",
        password : 78456
    },
    {
        email : "ganapati@gmail.com",
        password : 4982
    }
]

let user1 = users[1].email;
// console.log(user1);


// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


// console.log(user.hasOwnProperty('email'));


//+++++++++++++++++ Object Destruction ****************
let course = {
    courseName : "JavaScript",
    price : 999,
    courseInstructor : "hitesh"
}

const {courseInstructor: instruction} = course;
// console.log(instruction);


let {courseName, price} = course;
console.log(courseName);
console.log(price);






