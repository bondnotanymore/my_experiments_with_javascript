// lets talk about functions and scope of variables in JS

function myfirstFunction() {
    console.log("Hello Javascript world !!");
}

myfirstFunction()

function mathOperations(num1, num2){

    sum = num1 + num2;
    product = num1 * num2;
    subtraction = num1 - num2;
    division = num1 / num2;
    remainder = num1 % num2

    return [sum, product, subtraction, division, remainder]

}

const mathOperationsResult = mathOperations(10, 5)
console.table(mathOperationsResult)
console.log({mathOperationsResult})

// Local scope and Global scope of variables

// Global scope

var num1 = 10

function useGlobalVar() {
    return num1;
}

console.log(useGlobalVar()) // Considers the value num1 defined local to the scope of the function : 10

// Local scope

var num1 = 10

function useLocallVar() {
    let num1 = 5
    return num1;
}

console.log(useGlobalVar()) // Considers the value num1 defined local to the scope of the function : 5
console.log(num1) // considers the value of num1 defined in global scope : 10

function noReturn(){
    console.log("test no return");
}

a = noReturn()
console.log(a)

// Boolean returns

function evenOrOdd(a){
    if (a % 2 == 0) {
        return true
    } else {
        return false
    }
}

console.log(evenOrOdd(7));

// Using global variable across functions

num1 = 5

function squareOfNum(){
    return num1*num1
}

function squareRootOfNum(){
    return Math.sqrt(num1);
}

console.log(squareOfNum(), '\n',squareRootOfNum());