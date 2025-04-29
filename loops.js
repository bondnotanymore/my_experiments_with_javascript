// Lets explore various types of looping in javascript

// While loops

// Implementing binary search in javascript to search for an element in the array
myArray = [2, 3, 4, 5, 9, 10, 15, 20]
myTarget = 9

function binarySearch(arr, item) {
    let l = 0;
    let r = arr.length - 1;
    middle = 0

    while( l <= r){
        console.log("left: " + l)
        console.log("right: " + r)
        
        middle = Math.floor((l+r)/2);
        console.log("middle: " + middle)

        if(arr[middle] === item){
            console.log("The target item : " + item + " was found in the array: " + arr);
            return true
        }
        else if(arr[middle] < item){
            l = middle + 1
            console.log("Increment the left pointer to the newer position since the middle element was less than the target");
        }
        else{
            r = middle - 1
            console.log("Increment the right pointer to the newer position since the middle element was greater than the target");
        }
    }
    console.log("the element was not found.")
    return false
}

console.log(binarySearch(myArray, myTarget));

// for loops

arr = []
for(var item=0; item<5; item++){
    arr.push(item)
}

console.log(arr)

// for loops with odd and even increments

arr = []
for(var i=0; i<10; i+=2){
    arr.push(i)
}

console.log(arr)

arr = []
for(var i=1; i<10; i+=2){
    arr.push(i)
}

console.log(arr)

// for loop backwards ,with both odd and even increments

arr = []
for(var i=10; i>0; i--){
    arr.push(i)
}
console.log(arr)

arr = []
for(var i=10; i>0; i-=2){
    arr.push(i)
}
console.log(arr)

arr = []
for(var i=9; i>0; i-=2){
    arr.push(i)
}
console.log(arr)

// Iterating through existing arrays using for loops

// Calculating the summation of items in an array using for loops

myArray = [2, 3, 4, 5, 9, 10, 15, 20]
sum_array = 0
product_array = 1

function sumOfArray(arr){
    for(var i=0; i<myArray.length; i++){
        sum_array += arr[i]
        product_array *= arr[i]
        console.log(i)
    }
    return [sum_array, product_array]
}


console.log(sumOfArray(myArray));

// Nested for loops to deal with nested arrays

myNestedArray = [[1,2,3], [4,5,6], [9, 10]]

mySum = 0
myProduct = 0

for(var i=0; i < myNestedArray.length; i++){
    for(var j=0; j < myNestedArray[i].length; j++){
        console.log(myNestedArray[i][j]);
        mySum += arr[i][j]
        myProduct *= arr[i][j]
    }
}

console.log(mySum, myProduct)