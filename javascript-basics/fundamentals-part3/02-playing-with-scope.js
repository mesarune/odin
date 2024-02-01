"use strict";

output(x); // 1

// output(y); // y is not defined
// output(z); // z is not defined

/* Both of these should throw an error into the console along the lines of "ReferenceError: y is not defined". Why is that? Because of function scope, y and z are locked inside the a() and b() functions, so output() can't access them when called from the global scope. */

/* However, what about when it's called from inside another function? Try editing a() and b() so they look like this: */

/*
function a() {
  const y = 2;
  output(y);
}

function b() {
  const z = 3;
  output(z);
}
*/

/* then try calling the a() and b() functions from the JavaScript console: */

// a(); // 2
// b(); // 3

/* This works fine, as the output() function is being called inside the other functions — in the same scope as the variables it is printing are defined in, in each case. output() itself is available from anywhere, as it is defined in the global scope. */

/* Now try updating your code like this: */

/*
function a() {
  const y = 2;
  output(x);
}

function b() {
  const z = 3;
  output(x);
}
*/

// a(); // 1
// b(); // 1

/* Both the a() and b() call should print the value of x to the browser viewport. These work fine because even though the output() calls are not in the same scope as x is defined in, x is a global variable so is available inside all code, everywhere. */

/* Finally, try updating your code like this: */

/*
function a() {
  const y = 2;
  output(z);
}

function b() {
  const z = 3;
  output(y);
}
*/

// a(); // z is not defined
// b(); // y is not defined

/* this is because the output() calls and the variables they are trying to print are not in the same function scopes — the variables are effectively invisible to those function calls. */
