// Lets talk about arrays, or what we call as list in python

myArray = [1,2,3,"kapil", null]
console.log(myArray[myArray.length - 1])

// nested arrays

myFamily = [["Papa", 68], ["Mummy", 66], ['Kapil', 37], ["Anjali", 35], ["Chhotu", undefined]]

console.log("The age of each family member: " +
     myFamily[0][1], + myFamily[1][1], + myFamily[2][1], + myFamily[3][1], + myFamily[4][1]);

// Lets edit chhotu's age

myFamily[4][1] = 0.5

console.log("chhotu's new age is: " + myFamily[4][1]);

// Lets add remaining elements to the array
// Use `push` to append new elements to the end of the array and `pop` to remove elements from the end

myFamily.push(["Komal", 43])
console.log("New family member : " + myFamily[myFamily.length - 1]);

console.log("Who went to saasraawale: " + myFamily.pop())

// Lets add and remove elements to the beginning of the array using shift and unshift

let myFamilyMember = myFamily.shift();
console.log("Family member going out: " + myFamilyMember);

let newFamilyLength = myFamily.unshift(["Komal", 43]);
console.log("New size of the family: " + newFamilyLength);

myFamily.unshift(myFamilyMember);
console.log("family reunited: " + myFamily);




