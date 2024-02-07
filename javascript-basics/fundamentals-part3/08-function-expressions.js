"use strict";

/* The syntax that we used before is called a Function Declaration: */

function sayHi() {
  alert( "Hello" );
}

/* There is another syntax for creating a function that is called a Function Expression.
It allows us to create a new function in the middle of any expression. */

let sayHi2 = function() {
  alert( "Hello" );
};

console.log(sayHi2);

/* Here we can see a variable sayHi getting a value, the new function, created as function() { alert("Hello"); }.

As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.

Please note, there’s no name after the function keyword. Omitting a name is allowed for Function Expressions.

Here we immediately assign it to the variable, so the meaning of these code samples is the same: "create a function and put it into the variable sayHi".

In more advanced situations, that we’ll come across later, a function may be created and immediately called or scheduled for a later execution, not stored anywhere, thus remaining anonymous. */

/* Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.

We can even print out that value using alert: */

alert(sayHi); // Show the function code

/* Please note that the last line does not run the function, because there are no parentheses after sayHi. There are programming languages where any mention of a function name causes its execution, but JavaScript is not like that.

In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code.

Surely, a function is a special value, in the sense that we can call it like sayHi().
But it’s still a value. So we can work with it like with other kinds of values.

We can copy a function to another variable: */

function sayHi3() {   // (1) create
  alert( "Hello" );
}

let func = sayHi3;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi3(); // Hello    //     this still works too (why wouldn't it)

/* We could also have used a Function Expression to declare sayHi, in the first line: */

let sayHi4 = function() { // (1) create
  alert( "Hello" );
};

let func = sayHi4;
// ...

/* Everything would work the same. */

/* You might wonder, why do Function Expressions have a semicolon ; at the end, but Function Declarations do not: */

/* The answer is simple: a Function Expression is created here as function(…) {…} inside the assignment statement: let sayHi = …;. The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.

The semicolon would be there for a simpler assignment, such as let sayHi = 5;, and it’s also there for a function assignment. */


