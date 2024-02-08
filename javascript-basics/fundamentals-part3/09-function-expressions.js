"use strict";

/* Let’s look at more examples of passing functions as values and using function expressions.

We’ll write a function ask(question, yes, no) with three parameters:

question
Text of the question
yes
Function to run if the answer is “Yes”
no
Function to run if the answer is “No”
The function should ask the question and, depending on the user’s answer, call yes() or no(): */

function ask(question, yes, no) {
  if (confirm(question)) yes() // The confirm() method displays a dialog box with a message, an OK button, and a Cancel button.The confirm() method returns true if the user clicked "OK", otherwise false.
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

/* In practice, such functions are quite useful. The major difference between a real-life ask and the example above is that real-life functions use more complex ways to interact with the user than a simple confirm. In the browser, such functions usually draw a nice-looking question window. But that’s another story.

The arguments showOk and showCancel of ask are called callback functions or just callbacks.

The idea is that we pass a function and expect it to be “called back” later if necessary. In our case, showOk becomes the callback for “yes” answer, and showCancel for “no” answer. */

/* We can use Function Expressions to write an equivalent, shorter function: */

function ask2(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask2(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

/* Here, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here.

Such code appears in our scripts very naturally, it’s in the spirit of JavaScript. */

/* Let’s formulate the key differences between Function Declarations and Expressions.
First, the syntax: how to differentiate between them in the code. */

/* Function Declaration: a function, declared as a separate statement, in the main code flow: */

// Function Declaration
function sum(a, b) {
  return a + b;
}

/* Function Expression: a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the “assignment expression” =: */

// Function Expression
let sum2 = function(a, b) {
  return a + b;
};

/* The more subtle difference is when a function is created by the JavaScript engine.

A Function Expression is created when the execution reaches it and is usable only from that moment.

Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

Function Declarations are different.

A Function Declaration can be called earlier than it is defined.

For example, a global Function Declaration is visible in the whole script, no matter where it is.

That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

And after all Function Declarations are processed, the code is executed. So it has access to these functions.

For example, this works: */

sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}

/* …If it were a Function Expression, then it wouldn’t work: */

/*
sayHi2("John"); // error!

let sayHi2 = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};
*/

/* Another special feature of Function Declarations is their block scope.

In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

For instance, let’s imagine that we need to declare a function welcome() depending on the age variable that we get during runtime. And then we plan to use it some time later.

If we use Function Declaration, it won’t work as intended: */

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

}

// ...use it later
// welcome(); // Error: welcome is not defined

/* That’s because a Function Declaration is only visible inside the code block in which it resides.

Here’s another example: */

let age2 = 16; // take 16 as an example

if (age2 < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

// welcome(); // Error: welcome is not defined

/* What can we do to make welcome visible outside of if?

The correct approach would be to use a Function Expression and assign welcome to the variable that is declared outside of if and has the proper visibility.

This code works as intended: */

let age3 = prompt("What is your age?", 18);

let welcome;

if (age3 < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now

/* Or we could simplify it even further using a question mark operator ?: */

let age4 = prompt("What is your age?", 18);

let welcome2 = (age4 < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome2(); // ok now

/* As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.

That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.

…But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), then Function Expression should be used. */

/* Summary

1.Functions are values. They can be assigned, copied or declared in any place of the code.
2.If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
3.If the function is created as a part of an expression, it’s called a “Function Expression”.
4.Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
5.Function Expressions are created when the execution flow reaches them.

In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.
So we should use a Function Expression only when a Function Declaration is not fit for the task. We’ve seen a couple of examples of that in this chapter, and will see more in the future. */

