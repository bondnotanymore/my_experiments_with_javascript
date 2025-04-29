/**** 
 This file will deal with all the string data type definitions and operations.
 To compile and run the file, type control+option+N and you will see the output
 of your file in the console.
 ***/

 var myname = "I am a double quoted string inside a javascript file.";
 var myname_quotes = 'I am a "double quoted" string inside a javascript file.';
 var myname_escape = "I am a \"double quoted\" string inside a javascript file."; 
 /**
  * Escaping the double quotes with a backward slash helps with asking the Javascript interpreter engine
  * to not interpret the double quotes as is or with its usual meaning but to skip evaluating it
  * thus making it possible to have a double quoted string insider another
  */

 var myname_backtick = `'I am a "double quote" string inside a javascript file'.`;
 console.log(myname, myname_escape, myname_quotes, myname_backtick);

 /**
  * Various escape sequences in JS
  * \\ : escapes the backslash.
  * \n : a new line character, takes the output to new line.
  * \t : a tab char, adds a tab to the line.
  * \" : escapes a double quote in the string.
  * \r: carriage return
  * \f: form feed
  * \b: backspace
  */

 var newstring_escape = "I am new string with \"double quotes\".\n Let's go to the new line with a \n\t, where I can add a \\ to my lines."
 console.log(newstring_escape)

 // various operations on string

 var firstName = "Kapil"
 var lastName = "Mathur"
 var fullName = firstName + lastName
 console.log(fullName)

 firstName += '\t' + lastName
 fullNameWithTab = firstName
 console.log(fullNameWithTab)

 newString = firstName + '\n\t' + lastName
 console.log(newString)

 // length of strings and character slicing

 var newString = "I am a new string for which the length needs to be calculated.\t\"."

 newStringLength = newString.length
 newString8thChar = newString[7]
 newStringLastChar = newString[newStringLength-1]
 newStringThirdLastChar = newString[newStringLength - 3]

 console.log(newString)
 //console.log(newStringLength + "\n" + newString8thChar + "\n" + newStringLastChar + "\n" + newStringThirdLastChar);

console.log('Length of tab char in js: ' + "\t".length);

// strings are immuatable in javascript so you can reassign a value to a certain index


newString[64] = "f"