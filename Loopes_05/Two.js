// while loop

// let index = 0;
// while (index <= 10) {
//     console.log(`value of index is ${index}`);
//     index = index + 2;
// }

let myArray = [12,43, 54,65,87,98];
let i = 0;
while(i < myArray.length){
    console.log(`index of ${i} is ${myArray[i]}`);
    i++;
}

let score = 1;

do{
    console.log(`score is ${score}`);
    score++;
} while(score <= 10);