// forEach loop
// forEach() is an array method used to execute a function once for each element in an array.
// It is one of the most commonly used methods for iterating through arrays.
// Note: forEach() is not a loop keyword like for or while. It is an array method.


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function(item) {
//     console.log(item);
// })

// coding.forEach( (languages) => {
//     console.log(languages);
// })


// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme);

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName +" "+  item.languageFileName);
})