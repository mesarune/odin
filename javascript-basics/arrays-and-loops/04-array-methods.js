"use strict";

/* The copyWithin() method copies array elements to another position in an array:

Copy to index 2, all elements from index 0:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);

Copy to index 2, the elements from index 0 to 2:

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);

The copyWithin() method overwrites the existing values.

The copyWithin() method does not add items to the array.

The copyWithin() method does not change the length of the array. */

/* The flat() method creates a new array with sub-array elements concatenated to a specified depth.

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();

console.log(newArr); // [1,2,3,4,5,6]

*/

/* The splice() method can be used to add new items to an array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits); // ["Banana","Orange","Lemon","Kiwi","Apple","Mango"]

The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added. */

/* The splice() method returns an array with the deleted items:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");

console.log(fruits); // ["Banana","Orange","Lemon","Kiwi"]

*/

/* With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);

console.log(fruits); // ["Orange","Apple","Mango"]

The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added. */

/* ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.

The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);

console.log(spliced); // ["Feb","Mar","Apr"]

*/

/* The slice() method slices out a piece of an array into a new array:

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);

console.log(citrus); // ["Orange","Lemon","Apple","Mango"]

The slice() method creates a new array.

The slice() method does not remove any elements from the source array. */

/* Slice out a part of an array starting from array element 3 ("Apple"):

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);

console.log(citrus); // ["Apple","Mango"]

*/

/* The slice() method can take two arguments like slice(1, 3).

The method then selects elements from the start argument, and up to (but not including) the end argument.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

console.log(citrus); // ["Orange","Lemon"]

*/

/* If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2);

console.log(citrus); // ["Lemon","Apple","Mango"]

*/

/* JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

This is always the case when you try to output an array.

These two examples will produce the same result:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // "Banana,Orange,Apple,Mango"

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); // ["Banana","Orange","Apple","Mango"]

*/

/* All JavaScript objects have a toString() method. */
