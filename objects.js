var myfirstObject = {
    "name": "Kapil Mathur",
    "Postion": "Software Development Manager",
    "Company": "Rackspace technology",
    "Lanaguages or Technologies": [
        "Python", "Javascript", "Golang", "AWS", "Terraform", "Git"
    ],
    "fullname": () => {"My full name is: " + "\t" + this.name} 
}

console.log(myfirstObject);
// console.table(myfirstObject);
// console.log({myfirstObject});

// Accessing items inside objects using dot and bracket notation

var myName = myfirstObject.name
var myCompany = myfirstObject.Company
var Languages_technologies = myfirstObject["Lanaguages or Technologies"]

console.log(myName, myCompany, Languages_technologies);

// Updating object properties and deleting them

myfirstObject.Company = "Rackspace Pvt. Ltd."
myfirstObject.Postion = "Engineering Manager"
myfirstObject.experience = 15
myfirstObject["location"] = "Remote"

console.log(myfirstObject);

delete myfirstObject.experience
delete myfirstObject["location"]

console.log(myfirstObject);

function isPropertyPresent(object_item, prop){
    return object_item.hasOwnProperty(prop);
}

if (isPropertyPresent(myfirstObject, "location")){
    console.log("The myFirstObject has the \"location\" property.")
}
else{
    console.log("The myFirstObject doesn't have the \"location\" property.")
}

myfirstObject["location"] = "Remote"

if (isPropertyPresent(myfirstObject, "location")){
    console.log("The myFirstObject has the \"location\" property.")
}