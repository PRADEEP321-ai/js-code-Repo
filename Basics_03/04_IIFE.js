// IIFE(Immediate Invoked function Expresion)
// An IIFE (Immediate Invoked function Expresion) is a function that is defined and executed immediately after it is created

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')