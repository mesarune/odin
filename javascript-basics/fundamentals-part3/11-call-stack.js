"use strict";

/* https://www.javascripttutorial.net/javascript-call-stack/ */

/* Javascript excution context */

let x = 10;

function timesTen(a){
    return a * 10;
}

let y = timesTen(x);

console.log(y); // 100

/* In this example:

1.First, declare the x variable and initialize its value with 10.
2.Second, declare the timesTen() function that accepts an argument and returns a value that is the result of the multiplication of the argument with 10.
3.Third, call the timesTen() function with the argument as the value of the x variable and store result in the variable y.
4.Finally, output the variable y to the Console.

Behind the scenes, JavaScript does many things. in this tutorial, you will focus on execution contexts.

When the JavaScript engine executes the JavaScript code, it creates execution contexts.

Each execution context has two phases: the creation phase and the execution phase. */

/* The creation phase */

/* When the JavaScript engine executes a script for the first time, it creates the global execution context. During this phase, the JavaScript engine performs the following tasks:

1.Create the global object i.e., window in the web browser or global in Node.js.
2.Create the this object and bind it to the global object.
3.Set up a memory heap for storing variables and function references.
4.Store the function declarations in the memory heap and variables within the global execution context with the initial values as undefined.

When the JavaScript engine executes the code example above, it does the following in the creation phase:

First, store the variables x and y and function declaration timesTen() in the global execution context.
Second, initialize the variables x and y to undefined. */

/* The execution phase */

/* During the execution phase, the JavaScript engine executes the code line by line, assigns the values to variables, and executes the function calls. */

/* For each function call, the JavaScript engine creates a new function execution context.

The function execution context is similar to the global execution context. But instead of creating the global object, the JavaScript engine creates the arguments object that is a reference to all the parameters of the function: */

/* In our example, the function execution context creates the arguments object that references all parameters passed into the function, sets this value to the global object, and initializes the a parameter to undefined.

During the execution phase of the function execution context, the JavaScript engine assigns 10 to the parameter a and returns the result (100) to the global execution context: */

/* To keep track of all the execution contexts, including the global execution context and function execution contexts, the JavaScript engine uses the call stack, which you will learn in the next tutorial. */

/* Javascript call stack */

/* A call stack is a way for the JavaScript engine to keep track of its place in code that calls multiple functions. It has the information on what function is currently being run and what functions are invoked from within that function…

Also, the JavaScript engine uses a call stack to manage execution contexts:

The global execution context
Function execution contexts

The call stack works based on the last-in-first-out (LIFO) principle.

When you execute a script, the JavaScript engine creates a global execution context and pushes it on top of the call stack.

Whenever a function is called, the JavaScript engine creates a function execution context for the function, pushes it on top of the call stack, and starts executing the function.

If a function calls another function, the JavaScript engine creates a new function execution context for the function being called and pushes it on top of the call stack.

When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off.

The script will stop when the call stack is empty. */

/* Let’s start with the following example: */

function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let z = average(10, 20);

/* When the JavaScript engine executes this script, it places the global execution context (denoted by main() or global() function on the call stack. */

/* The global execution context enters the creation phase and moves to the execution phase.

The JavaScript engine executes the call to the average(10, 20) function and creates a function execution context for the average() function and pushes it on top of the call stack: */

/* The JavaScript engine starts executing the average() since because the average() function is on the top of the call stack.

The average() function calls add() function. At this point, the JavaScript engine creates another function execution context for the add() function and places it on the top of the call stack: */

/* JavaScript engine executes the add() function and pops it off the call stack: */

/* At this point, the average() function is on the top of the call stack, the JavaScript engine executes and pops it off the call stack. */

/* Now, the call stack is empty so the script stops executing: */

/* Stack overflow */

/* The call stack has a fixed size, depending on the implementation of the host environment, either the web browser or Node.js.

If the number of execution contexts exceeds the size of the stack, a stack overflow error will occur.

For example, when you execute a recursive function that has no exit condition, the JavaScript engine will issue a stack overflow error: */

/*
function fn() {
    fn();
}

fn(); // stack overflow
*/

/* Asyncronous javascript */

/* JavaScript is a single-threaded programming language. This means that the JavaScript engine has only one call stack. Therefore, it only can do one thing at a time.

When executing a script, the JavaScript engine executes code from top to bottom, line by line. In other words, it is synchronous.

Asynchronous means the JavaScript engine can execute other tasks while waiting for another task to be completed. For example, the JavaScript engine can:

Request for data from a remote server.
Display a spinner
When the data is available, display it on the webpage.

To do this, the JavaScript engine uses an event loop, which will be covered in the following tutorial. */

/* Summary */

/* JavaScript engine uses a call stack to manage execution contexts.
The call stack uses the stack data structure that works based on the LIFO (last-in-first-out) principle. */
