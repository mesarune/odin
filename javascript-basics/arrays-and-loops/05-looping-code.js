"use strict";

/* The basic tool for looping through a collection is the for...of loop:

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}

In this example, for (const cat of cats) says:

1.Given the collection cats, get the first item in the collection.
2.Assign it to the variable cat and then run the code between the curly braces {}.
3.Get the next item, and repeat (2) until you've reached the end of the collection. */

/* You can use map() to do something to each item in a collection and create a new collection containing the changed items:

function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

Here we pass a function into cats.map(), and map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array. In this case the function we provide converts the item to uppercase, so the resulting array contains all our cats in uppercase: */

/* You can use filter() to test each item in a collection, and create a new collection containing only items that match:

function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]

This looks a lot like map(), except the function we pass in returns a boolean: if it returns true, then the item is included in the new array. Our function tests that the item starts with the letter "L", so the result is an array containing only cats whose names start with "L": */

/* Note that map() and filter() are both often used with function expressions, which we will learn about in the Functions module. Using function expressions we could rewrite the example above to be much more compact:

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]

*/

/* In the "drawing circles" example above, you don't have a collection of items to loop through: you really just want to run the same code 100 times. In a case like that, you should use the for loop. This has the following syntax:

for (initializer; condition; final-expression) {
  // code to run
}

Here we have:

The keyword for, followed by some parentheses.
Inside the parentheses we have three items, separated by semicolons:

1.An initializer — this is usually a variable set to a number, which is incremented to count the number of times the loop has run. It is also sometimes referred to as a counter variable.

2.A condition — this defines when the loop should stop looping. This is generally an expression featuring a comparison operator, a test to see if the exit condition has been met.

3.A final-expression — this is always evaluated (or run) each time the loop has gone through a full iteration. It usually serves to increment (or in some cases decrement) the counter variable, to bring it closer to the point where the condition is no longer true.

Some curly braces that contain a block of code — this code will be run each time the loop iterates. */