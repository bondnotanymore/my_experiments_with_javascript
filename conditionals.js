// Lets learn about the conditional statements in JS, if, else, if else if, else, Switch statements
if (5%2 === 0) {
    console.log('5 is divisible by 2');
}
else {
    console.log('5 is not divisible by 2');
}

function isEvenOrNot(item){
    // Boolean function which returns true or false based on the computation
    // It can also return prematurely if invalid input is provided and thus return undefined.
    
    if (typeof item !== "number"){
        console.log("Please provide a valid integer value")
        return
    }
    else if (item % 2 == 0){
        console.log("The item: " + item + ", is an even integer");
        return true
    }
    else {
        console.log("The item: " + item + ", is an odd integer")
        return false
    }
}

console.log(isEvenOrNot(7));
console.log(isEvenOrNot("Kapil"));
console.log(isEvenOrNot(8));
console.log(isEvenOrNot(100000000000));

// Lets test some equality operators

/** Equality operators, Inequality operators, Greater than, Less than, 
 * Greater than or equal to, less than or equal to, 
 * Srict equal to or Strict inequal to*/ 

function isLessThan(a, b){
    // Boolean function which returns true or false based on the computation
    // It can also return prematurely if invalid input is provided and thus return undefined.
    
    if (typeof a !== "number" || typeof b !== "number"){
        console.log("Please provide valid integer values: " + a + '\t' + b);
        return
    }
    else if (a < b){
        console.log("The item: " + a + ", is less than item: " + b);
        return true;
    }
    
    else if (a > b){
        console.log("The item: " + a + ", is greater than item: " + b);
        return false;
    }
    else {
        console.log("Both the items are equal: " + a, b );
        return false;
    }

}

console.log(isLessThan(5, "kapil"))
console.log(isLessThan("kapil", 37))
console.log(isLessThan(-5, 0))
console.log(isLessThan(5, 10))
console.log(isLessThan(10, 5))
console.log(isLessThan(-3, -2))
console.log(isLessThan(5, 5))

if (5 === "5"){
    console.log("They are not equal, they are of different types");
}
else if (5 === 5){
    console.log("They are genuninely equal");
}

// diving into Switch statements

function whatIsTheType(a){
    // Using switch statement to determine
    switch(a){
        case(typeof a == "number"):{
            console.log("The item is of type: " + number)
            break;
        }
        case(typeof a == "string"):{
            console.log("The item is of type: " + string)
            break;
        }
        case(typeof a == "boolean"):{
            console.log("The item is of type: " + boolean)
            break;
        }
        default:{
            console.log("The item is of type: " + undefined)
            break;
        }
    }
}

console.log(whatIsTheType(5));

// Returning early in javascript

function returnsearly(item){
    return typeof item === "number" && item % 2 === 0
}

console.log(returnsearly("kapil"))