"use strict";

/* Sometimes, we need to perform different actions based on different conditions.

To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator. */

/* The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code. */

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );

/* If we want to execute more than one statement, we have to wrap our code block inside curly braces: */

if (year == 2015) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}

/* We recommend wrapping your code block with curly braces {} every time you use an if statement, even if there is only one statement to execute. Doing so improves readability. */

/* The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

Let’s recall the conversion rules from the chapter Type Conversions:

A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.

Other values become true, so they are called “truthy”.

So, the code under this condition would never execute: */

/* if (0) { // 0 is falsy
  ...
} */

/* …and inside this condition – it always will: */

/* if (1) { // 1 is truthy
  ...
} */

/* The if statement may contain an optional else block. It executes when the condition is falsy. */

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

/* Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that. */

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

/* In the code above, JavaScript first checks year < 2015. If that is falsy, it goes to the next condition year > 2015. If that is also falsy, it shows the last alert.

There can be more else if blocks. The final else is optional. */

console.log();