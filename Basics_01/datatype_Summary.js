//DataType in JavaScript

//1. Primitive DataTypes
// 1. Number
    const num1 = 10;
    console.log(num1);
    console.log(typeof num1); // number
    
// 2. String
    const str1 = "Hello, World!";
    console.log(str1);
    console.log(typeof str1); // string

// 3. Boolean
    const bool1 = true;
    console.log(bool1);
    console.log(typeof bool1); // boolean

// 4. Null
    const nullValue = null;
    console.log(nullValue);
    console.log(typeof nullValue); // object (this is a known quirk in JavaScript)

// 5. Undefined
    let undefinedValue;
    console.log(undefinedValue);
    console.log(typeof undefinedValue); // undefined

// 6. Symbol (ES6)
    const symbol1 = Symbol("unique");
    console.log(symbol1);
    console.log(typeof symbol1); // symbol

// 7. BigInt (ES2020)
    const bigInt1 = 1234567890123456789012345678901234567890n;
    console.log(bigInt1);
    console.log(typeof bigInt1); // bigint


//2. Non-Primitive DataTypes

//1. Array
    const arr1 = [1, 2, 3, 4, 5];
    console.log(arr1);
    console.log(typeof arr1); // object                                         

//2. Function
    let myFunction = function greet() {
        return "Hello!";
    }     
    
    console.log(typeof myFunction);
    

// 3. Object
    const obj1 = {
        name: "John",       
        age: 30,    
    };
    console.log(obj1);
    console.log(typeof obj1); // object 




//    DataType                         |                         Typeof  value
//    Number                           |                         number
//    String                           |                         string
//    Boolean                          |                         boolean
//    Null                             |                         object
//    Undefined                        |                         undefined
//    Symbol                           |                         symbol
//    BigInt                           |                         bigint
//    Array                            |                         object
//    function                         |                         function
//    Object                           |                         object