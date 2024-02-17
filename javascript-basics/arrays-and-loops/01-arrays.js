"use strict";

/* An array is a special variable, which can hold more than one value:

const cars = ["Saab", "Volvo", "BMW"];

*/

/* If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number. */

/* Using an array literal is the easiest way to create a JavaScript Array.

Syntax:

const array_name = [item1, item2, ...]; 

*/

/*

const cars = ["Saab", "Volvo", "BMW"];

*/

/* Spaces and line breaks are not important. A declaration can span multiple lines:

const cars = [
  "Saab",
  "Volvo",
  "BMW"
];

*/

/* You can also create an array, and then provide the elements:

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

*/

/* The following example also creates an Array, and assigns values to it:

const cars = new Array("Saab", "Volvo", "BMW");

*/

/* The two examples above do exactly the same.

There is no need to use new Array().

For simplicity, readability and execution speed, use the array literal method. */

/* You access an array element by referring to the index number:

const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];

console.log(car); // "Saab"

*/

/* Note: Array indexes start with 0.

[0] is the first element. [1] is the second element. */

/* This statement changes the value of the first element in cars:

const cars = ["Saab", "Volvo", "BMW"];

cars[0] = "Opel";

let car = cars[0];

console.log(car); // "Opel"

*/

// The JavaScript method toString() converts an array to a string of (comma separated) array values.

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.toString()); // "Banana,Orange,Apple,Mango"

/* With JavaScript, the full array can be accessed by referring to the array name: */

const cars = ["Saab", "Volvo", "BMW"];

console.log(cars); // ["Saab", "Volvo", "BMW"]

/* Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

But, JavaScript arrays are best described as arrays.

Arrays use numbers to access its "elements". In this example, person[0] returns John: */

const person = ["John", "Doe", 46];

console.log(person[0]); // "John"

/* Objects use names to access its "members". In this example, person.firstName returns John: */

const person2 = {firstName:"John", lastName:"Doe", age:46};

console.log(person2.firstName); // "John"

/* JavaScript variables can be objects. Arrays are special kinds of objects.

Because of this, you can have variables of different types in the same Array.

You can have objects in an Array. You can have functions in an Array. You can have arrays in an Arr

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

*/

