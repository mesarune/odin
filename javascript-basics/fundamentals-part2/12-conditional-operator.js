"use strict";

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

/* The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many. */

/* let result = condition ? value1 : value2; */

/* The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2. */

accessAllowed = (age > 18) ? true : false;

/* Technically, we can omit the parentheses around age > 18. The question mark operator has a low precedence, so it executes after the comparison >. */

// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)

accessAllowed = age > 18 ? true : false;

/* But parentheses make the code more readable, so we recommend using them. */

/* A sequence of question mark operators ? can return a value that depends on more than one condition. */

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

/* The first question mark checks whether age < 3.
If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon “:”, checking age < 18.
If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon “:”, checking age < 100.
If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon “:”, returning 'What an unusual age!'. */

/* Here’s how this looks using if..else: */

if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}

/* Sometimes the question mark ? is used as a replacement for if: */

let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');

/* Depending on the condition company == 'Netscape', either the first or the second expression after the ? gets executed and shows an alert.

We don’t assign a result to a variable here. Instead, we execute different code depending on the condition.

It’s not recommended to use the question mark operator in this way.

The notation is shorter than the equivalent if statement, which appeals to some programmers. But it is less readable. */

/* Here is the same code using if for comparison: */

if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}

/* The purpose of the question mark operator ? is to return one value or another depending on its condition. Please use it for exactly that. Use if when you need to execute different branches of code. */



console.log();