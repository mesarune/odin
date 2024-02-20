"use strict";

/* The length property returns the length (size) of an array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length; // 4

*/

/* The JavaScript method toString() converts an array to a string of (comma separated) array values.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString(); // Banana,Orange,Apple,Mango

*/

/* ES2022 intoduced the array method at():

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2); // "Apple"

*/

/*

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[2]; // "Apple"

*/

/* The at() method returns an indexed element from an array.

The at() method returns the same as [].

The at() method is supported in all modern browsers since March 2022: */

/* Many languages allows negative bracket indexing like [-1] to access elements from the end of an object / array / string.

This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.

The at() method was introduced in ES2022 to solve this problem. */

/* The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * "); // Banana * Orange * Apple * Mango

*/

/* When you work with arrays, it is easy to remove elements and add new elements.

This is what popping and pushing is:

Popping items out of an array, or pushing items into an array. */

/* The pop() method removes the last element from an array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

*/

/* The pop() method returns the value that was "popped out": */

/* The push() method adds a new element to an array (at the end):

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

*/

/* The push() method returns the new array length:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi"); // 5

*/

/* The shift() method removes the first array element and "shifts" all other elements to a lower index.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

*/

/* The shift() method returns the value that was "shifted out":

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift(); // "Banana"

*/

/* The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

*/

/* The unshift() method returns the new array length:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); // 5

*/

/* Array elements are accessed using their index number:

Array indexes start with 0:

[0] is the first array element
[1] is the second
[2] is the third ... */

/*

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";

console.log(fruits); // ["Kiwi", "Orange", "Apple", "Mango"]

*/

/* The length property provides an easy way to append a new element to an array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi"; // ["Banana","Orange","Apple","Mango","Kiwi"]

*/

/* Warning !
Using delete() leaves undefined holes in the array.

Use pop() or shift() instead. */

/* The concat() method creates a new array by merging (concatenating) existing arrays:

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

*/

/* Note
The concat() method does not change the existing arrays. It always returns a new array.

The concat() method can take any number of array arguments.

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);

*/

/* The concat() method can also take strings as arguments:

const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 

console.log(myChildren); // ["Emil","Tobias","Linus","Peter"]

*/



console.log();