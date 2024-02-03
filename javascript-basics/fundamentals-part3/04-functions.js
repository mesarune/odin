"use strict";

/* To create a function we can use a function declaration.
It looks like this: */

function showMessage() {
  alert( 'Hello everyone!' );
}

/* The function keyword goes first, then goes the name of the function, then a list of parameters between the parentheses (comma-separated, empty in the example above, we’ll see examples later) and finally the code of the function, also named “the function body”, between curly braces. */

/*
function name(parameter1, parameter2, ... parameterN) {
 // body
}
*/

/* Our new function can be called by its name: */

showMessage();

/* A variable declared inside a function is only visible inside that function. */

function showMessage2() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage2(); // Hello, I'm JavaScript!

// alert( message ); // <-- Error! The variable is local to the function

/* A function can access an outer variable as well */

let userName = 'John';

function showMessage3() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage3(); // Hello, John

/* The function has full access to the outer variable. It can modify it as well. */

let userName2 = 'John';

function showMessage4() {
  userName2 = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName2;
  alert(message);
}

alert( userName2 ); // John before the function call

showMessage4();

alert( userName2 ); // Bob, the value was modified by the function

/* The outer variable is only used if there’s no local one. */

/* If a same-named variable is declared inside the function then it shadows the outer one. For instance, in the code below the function uses the local userName. The outer one is ignored: */

let userName3 = 'John';

function showMessage5() {
  let userName3 = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName3; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage5();

alert( userName3 ); // John, unchanged, the function did not access the outer variable

/* Variables declared outside of any function, such as the outer userName in the code above, are called global.

Global variables are visible from any function (unless shadowed by locals).

It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data. */

/* We can pass arbitrary data to functions using parameters.
In the example below, the function has two parameters: from and text. */

function showMessage6(from, text) { // parameters: from, text
  alert(from + ': ' + text);
}

showMessage6('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage6('Ann', "What's up?"); // Ann: What's up? (**)

/* When the function is called in lines (*) and (**), the given values are copied to local variables from and text. Then the function uses them. */

/* When a value is passed as a function parameter, it’s also called an argument.

In other words, to put these terms straight:

A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
An argument is the value that is passed to the function when it is called (it’s a call time term).
We declare functions listing their parameters, then call them passing arguments. */

/* If a function is called, but an argument is not provided, then the corresponding value becomes undefined. */

showMessage6("Ann"); // "Ann: undefined"

/* That’s not an error. Such a call would output "Ann: undefined". As the value for text isn’t passed, it becomes undefined. */

/* We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =: */

function showMessage7(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage7("Ann"); // Ann: no text given

/* Now if the text parameter is not passed, it will get the value "no text given".
The default value also jumps in if the parameter exists, but strictly equals undefined, like this: */

showMessage7("Ann", undefined); // Ann: no text given

