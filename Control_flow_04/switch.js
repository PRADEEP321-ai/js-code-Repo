// In javascript, the switch statement is used to execute differrent block of code based on the value of expression.

//Syntax: 

switch (key) {
    case value:
        
        break;

    default:
        break;
}

// Example:

const month = 3;

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;

    default:
        break;
}

const month = "march";

switch (month) {
    case "Jan":
        console.log("Jan");
        break;
    case "Feb":
        console.log("feb");
        break;
    case "march":
        console.log("Mar");
        break;
    case "April":
        console.log("April");
        break;
    case "May":
        console.log("May");
        break;
    case "June":
        console.log("June");
        break;

    default:
        break;
}
