var a = "hello world";

a = "hello there";

let city = "bengaluru"
const company = "Rackspace" // const is used for a variable the value of which is not supposed or cant change

console.log(a);

const dataTypes = "unefined, null, boolean, number, symbol and object" //(In line comment) Different types of datatypes in javascript

/* This is a multi-line comment in javascript
that can extend to multiple lines
*/

// Lets try some operations on variables after declarations

var num1 = 5;
var num2 = 7;
var str1 = "Hello,"

// Going for operations

num1 = num1 + 5;
num2 = num2 * 6;
str1 = str1 + "Kapil Mathur";

// Lets print them

console.log(num1, num2, str1)

// Javascript offers case-sensitivity to its declared variables and throws runtime errors on assigning a undeclared variable

var myProperCamelCaseVar = "hey, there";

// Throws error on not following the camecase or using a undefined/undeclared variable

MyPROPERCAMELCASEVAR = "Will it run?";
console.log(MyPROPERCAMELCASEVAR);

// Basic math

var num1 = 10;
var num2 = 10;
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1/num2;

console.log("two numbers: " + num1 + "," +  num2);
console.log("The sum of two numbers is: " + sum);
console.log("The diff of two numbers is: " + difference);
console.log("The product of two numbers is: " + product);
console.log("The division of two numbers is: " + quotient);

// Increment and decrement operators

num1 = num1 + 1;
console.log("num1 is: " + num1);
num1 = num1 - 1;
console.log("num1 is: " + num1);
num2 = num2 - 1;
console.log("num2 is: " + num2);
num2 = num2 + 1;
console.log("num2 is: " + num2);

// ++ and -- operators
num1++;
console.log("num1 is: " + num1);
num1--;
console.log("num1 is: " + num1);
num2--;
console.log("num2 is: " + num2);
num2++;
console.log("num2 is: " + num2);

// Decimal numbers and operations

var dec1 = 1.1; //float data type; floating point numbers or float
var dec2 = 2.2;

//Multiple the decimal numbers

var deciprod = dec1 * dec2;
console.log("Product of two decimal numbers: " +  deciprod);

// divide decimal numbers

var decidiv = dec2/dec1;
console.log("division of two decimal numbers: " + decidiv);

// Remainder operator

var rem = dec2 % dec1;
console.log("remainder when 2.2 is divided by 1.1 is:  " + rem);

var rem = 5 % 2;
console.log("remainder : " + rem);

// Augmented math operations; Similar to python and applies to all the operations

var a = 2

a += 2;
console.log(a);
a -= 2;
console.log(a);
a *= 2;
console.log(a);
a %= 2;
console.log(a);

// Bracket notation in string to find last letter

var name1 = 'Kapil';
console.log(name1);
console.log(name1[2]);
console.log(name1[name1.length - 1]);