"use strict";

/* The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result: */

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

/* Will the function work differently if else is removed? */

function checkAge2(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}

/* Is there any difference in the behavior of these two variants? */

/* No difference!

In both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy. */

/* The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result. */

function checkAge3(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

/* Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

Using a question mark operator ?
Using OR || */

/* Using a question mark operator '?': */

function checkAge4(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

/* Using OR || (the shortest variant): */

function checkAge5(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

/* Note that the parentheses around age > 18 are not required here. They exist for better readability. */

/* Write a function min(a,b) which returns the least of two numbers a and b.

For instance: */

/*
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

/* A solution using if: */

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

/* A solution with a question mark operator '?': */

function min2(a, b) {
  return a < b ? a : b;
}

/* P.S. In the case of an equality a == b it does not matter what to return. */

/* Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result. */

/*
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
*/

/* Create a web-page that prompts for x and n, and then shows the result of pow(x,n). */

/* P.S. In this task the function should support only natural values of n: integers up from 1. */

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}