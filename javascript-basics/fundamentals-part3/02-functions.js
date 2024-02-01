"use strict";

/* So far we have just created a function like so: */

function myFunction() {
  alert("hello");
}

/* But you can also create a function that doesn't have a name: */

(function () {
  alert("hello");
});

/* This is called an anonymous function, because it has no name. You'll often see anonymous functions when a function expects to receive another function as a parameter. In this case, the function parameter is often passed as an anonymous function. */

/* Note: This form of creating a function is also known as function expression. Unlike function declarations, function expressions are not hoisted. */

/* For example, let's say you want to run some code when the user types into a text box. To do this you can call the addEventListener() function of the text box. This function expects you to pass it (at least) two parameters:

the name of the event to listen for, which in this case is keydown
a function to run when the event happens.
When the user presses a key, the browser will call the function you provided, and will pass it a parameter containing information about this event, including the particular key that the user pressed: */

/* function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey); */

/* Instead of defining a separate logKey() function, you can pass an anonymous function into addEventListener(): */

/* textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
}); */

/* If you pass an anonymous function like this, there's an alternative form you can use, called an arrow function. Instead of function(event), you write (event) =>: */

/* textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
}); */

/* If the function only takes one parameter, you can omit the parentheses around the parameter: */

/* textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
}); */

/* Finally, if your function contains only one line that's a return statement, you can also omit the braces and the return keyword and implicitly return the expression. In the following example, we're using the map() method of Array to double every value in the original array: */

const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]

/* So in the example above, item => item * 2 is the arrow function equivalent of: */

function doubleItem(item) {
  return item * 2;
}

/* You can use the same concise syntax to rewrite the addEventListener example. */

/* textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`),
); */

/* We recommend that you use arrow functions, as they can make your code shorter and more readable. */

/* Here's a complete working example of the "keydown" example we discussed above: */

/* const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
}); */

/* Let's talk a bit about scope — a very important concept when dealing with functions. When you create a function, the variables and other things defined inside the function are inside their own separate scope, meaning that they are locked away in their own separate compartments, unreachable from code outside the functions.

The top-level outside all your functions is called the global scope. Values defined in the global scope are accessible from everywhere in the code.

JavaScript is set up like this for various reasons — but mainly because of security and organization. Sometimes you don't want variables to be accessible from everywhere in the code — external scripts that you call in from elsewhere could start to mess with your code and cause problems because they happen to be using the same variable names as other parts of the code, causing conflicts. This might be done maliciously, or just by accident. */

/* For example, say you have an HTML file that is calling in two external JavaScript files, and both of them have a variable and a function defined that use the same name: */

// first.js
const name = "Chris";
function greeting() {
  alert(`Hello ${name}: welcome to our company.`);
}

// second.js
const name = "Zaptec";
function greeting() {
  alert(`Our company is called ${name}.`);
}

/* Both functions you want to call are called greeting(), but you can only ever access the first.js file's greeting() function (the second one is ignored). In addition, an error results when attempting (in the second.js file) to assign a new value to the name variable — because it was already declared with const, and so can't be reassigned. */

/* Keeping parts of your code locked away in functions avoids such problems */

