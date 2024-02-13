"use strict";

/*
const a = "Hello";
const b = "World";

console.log(c); // Uncaught ReferenceError: c is not defined
*/

/* A ReferenceError is thrown when one refers to a variable that is not declared and/or initialized within the current scope. In our case, the error message explains that the error has occurred because c is not defined. Different errors of this type have different messages based on what is causing the ReferenceError. For example, another message you may run into is ReferenceError: can't access lexical declaration 'X' before initialization. As we can see, this points to a completely different reason than our original ReferenceError above. Understanding both the error type and the error message is crucial to comprehending why you are receiving the error.

The next part of an error gives us the name of the file in which you can find the error (in this case, our script.js), and also the line number. This allows you to easily navigate to the problematic line in your code. Here, the error originates from the fourth line of script.js, which is displayed as a link under the error message with the text at script.js:4. If you click this link, most browsers will navigate to the exact line of code and the rest of your script in the Sources tab of the Developer Tools. Sometimes your browser’s console will also display the column (or character) in the line at which the error is occurring. In our example, this would be at script.js:4:13. */

/* Another important part of an error is the stack trace. This helps you understand when the error was thrown in your application, and what functions were called that led up to the error. So, for example, if we have the following code: */

/*
const a = 5;
const b = 10;

function add() {
  return c; // Uncaught ReferenceError: c is not defined
}

function print() {
  add();
}

print();
*/

/* The stack trace tells us that:

c is not defined in scope of add(), which is declared on line 5.
add() was called by print(), which was declared on line 9.
print() itself was called on line 12.
Thus the stack trace lets you trace the evolution of an error back to its origin, which here is the declaration of add(). */

/* These are some of the most common errors you will encounter, so it’s important to understand them. */

/* Syntax error
A syntax error occurs when the code you are trying to run is not written correctly, i.e., in accordance with the grammatical rules of JavaScript. For example this: */

/*
function helloWorld() {
  console.log "Hello World!" // Uncaught SyntaxError: Unexpected string
}
*/

/* will throw the following error, because we forgot the parentheses for console.log()! */

/* Reference error
We covered reference errors in the first example in this lesson, but it’s important to remember that these arise because whatever variable you are trying to reference does not exist (within the current scope) - or it has been spelled incorrectly! */

/* Type error
These errors are thrown for a few different reasons:

Per MDN, a TypeError may be thrown when:

1.an operand or argument passed to a function is incompatible with the type expected by that operator or function;
2.or when attempting to modify a value that cannot be changed;
3.or when attempting to use a value in an inappropriate way.

Say we have two strings that you would like to combine to create one message, such as below: */

/*
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2); // Uncaught TypeError: str1.push is not a function
*/

/* Here, we get a TypeError with a message stating that str1.push is not a function. This is a common error message that confuses learners because you might know that .push() is certainly a function (for example, if you have used it to add items to arrays before). But that’s the key - .push() is not a String method, it’s an Array method. Hence, it is “not a function” that you can find as a String method. If we change .push() to .concat(), a proper String method, our code runs as intended! A good note to keep in mind when faced with a TypeError is to consider the data type you are trying to run a method or operation against. You’ll likely find that it is not what you think, or the operation or method is not compatible with that type. */

/* At this point, you might be wondering how we can resolve these errors.

Read the error carefully and try to understand it on your own.
Next, Google the error! Chances are, you can find a fix or explanation on StackOverflow or in the documentation. If nothing else, you will receive more clarity as to why you are receiving this error.
Use the debugger! As previously mentioned, the debugger is great for more involved troubleshooting, and is a critical tool for a developer. You can set breakpoints, view the value of any given variable at any point in your application’s execution, step through code line by line, and more! It is an extremely valuable tool and every programmer should know how to use it. This tutorial dives into the Chrome Debugger. Warning: In point 4 of step 3 of the tutorial, devtools will pause on the second line rather than at the declaration of the function. Don’t worry this is expected.
Make use of the console! console.log() is a popular choice for quick debugging. For more involved troubleshooting, using the debugger might be more appropriate, but using console.log() is great for getting immediate feedback without needing to step through your functions. There are also other useful methods such as console.table(), console.trace(), and more! You can find additional methods here. */

/* Lastly, many people are met with warnings and treat them as errors. Errors will stop the execution of your program or whatever process you may be attempting to run and prevent further action. Warnings, on the other hand, are messages that provide you insight on potential problems that may not necessarily crash your program at runtime, or at all! While you should address these warnings if possible and as soon as possible, warnings are not as significant as errors and are more likely to be informational. Warnings are typically shown in yellow, while errors are typically shown in red. Though these colors are not a rule, frequently there will be a visual differentiation between the two, regardless of the platform you are encountering them on. */
