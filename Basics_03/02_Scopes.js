let a = 100;
// const b = 20;
var c = 300;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("Inner: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(a);

function one(){
    const username = "Pradeep";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    console.log(website);
    
    two();
}

one();
