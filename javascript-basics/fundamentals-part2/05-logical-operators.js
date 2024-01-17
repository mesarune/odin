"use strict";

/* There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). Here we cover the first three, the ?? operator is in the next article. */

/* The “OR” operator is represented with two vertical line symbols: */

// let result = a || b;

let result = true || true; // true
result = true || false; // true
result = false || true; // true
result = false || false; // false

/* As we can see, the result is always true except for the case when both operands are false.

If an operand is not a boolean, it’s converted to a boolean for the evaluation.

For instance, the number 1 is treated as true, the number 0 as false: */

if (1 || 0) { // works just like if( true || false )
  result = 'truthy!';
}

/* Most of the time, OR || is used in an if statement to test if any of the given conditions is true. */

let hour = 9;

if (hour < 10 || hour > 18) {
  result = 'The office is closed.';
}

/* We can pass more conditions: */

hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  result = 'The office is closed.'; // it is the weekend
}

/* The OR || operator does the following:

Evaluates operands from left to right.
For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were false), returns the last operand.
A value is returned in its original form, without the conversion.

In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found. */

result = 1 || 0;  // 1 (1 is truthy)
result = null || 1;  // 1 (1 is the first truthy value)
result = null || 0 || 1; // 1 (the first truthy value)
result = undefined || null || 0;  // 0 (all falsy, returns the last value)

/* This leads to some interesting usage compared to a “pure, classical, boolean-only OR”. */

/* Getting the first truthy value from a list of variables or expressions.

For instance, we have firstName, lastName and nickName variables, all optional (i.e. can be undefined or have falsy values).

Let’s use OR || to choose the one that has the data and show it (or "Anonymous" if nothing set): */

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

result = firstName || lastName || nickName || "Anonymous"; // SuperCoder
/* If all variables were falsy, "Anonymous" would show up. */

/* Short-circuit evaluation.

Another feature of OR || operator is the so-called “short-circuit” evaluation.

It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.

In the example below, only the second message is printed: */

// true || alert("not printed");
// false || alert("printed"); // printed

/* In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

Sometimes, people use this feature to execute commands only if the condition on the left part is falsy. */

/* The AND operator is represented with two ampersands &&: */

// result = a && b;

/* In classical programming, AND returns true if both operands are truthy and false otherwise: */

result = true && true; // true
result = true && false; // false
result = false && true; // false
result = false && false; // false

/* An example with if: */

hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  result = 'The time is 12:30';
}

/* Just as with OR, any value is allowed as an operand of AND: */

if (1 && 0) { // evaluated as true && false
  result = "won't work, because the result is falsy";
}

/* The AND && operator does the following:

Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.
In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one. */

// if the first operand is truthy,
// AND returns the second operand:
result = 1 && 0; // 0
result = 1 && 5; //5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
result = null && 5; // null
result = 0 && 'no matter what'; //0

/* We can also pass several values in a row. See how the first falsy one is returned: */
result =  1 && 2 && null && 3; // null

/* When all values are truthy, the last value is returned: */
result = 1 && 2 && 3; // 3

/* The precedence of AND && operator is higher than OR ||.

So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d). */

/* The boolean NOT operator is represented with an exclamation sign !. */

// result = !value;

/* The operator accepts a single argument and does the following:

Converts the operand to boolean type: true/false.
Returns the inverse value. */

result = !true // false
result = !0 //true

/* A double NOT !! is sometimes used for converting a value to boolean type: */

result = !!"non-empty string"; // true
result = !!null; // false

/* That is, the first NOT converts the value to boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain value-to-boolean conversion.

There’s a little more verbose way to do the same thing – a built-in Boolean function: */

result = Boolean("non-empty string"); // true
result = Boolean(null); // false

/* The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||. */

/* Tasks */

result = null || 2 || undefined; // 2

// result = alert(1) || 2 || alert(3); // 2 x -> first 1, then 2 o 
/* The call to alert does not return a value. Or, in other words, it returns undefined.

The first OR || evaluates its left operand alert(1). That shows the first message with 1.
The alert returns undefined, so OR goes on to the second operand searching for a truthy value.
The second operand 2 is truthy, so the execution is halted, 2 is returned and then shown by the outer alert.
There will be no 3, because the evaluation does not reach alert(3). */

result = 1 && null && 2; // null

// result = alert(1) && alert(2); // first 1, then undefined

result = null || 2 && 3 || 4; // 3

let age = 30;
if (age >= 14 && age <= 90);

if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

// if (-1 || 0) alert( 'first' ); // run
// if (-1 && 0) alert( 'second' ); // doesn't run
// if (null || -1 && 1) alert( 'third' ); // exectutes

/* some experiment */

result = !!-1 == true; // true

console.log(result);
