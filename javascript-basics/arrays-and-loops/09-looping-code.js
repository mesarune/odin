"use strict";

/* If you're iterating through an array or some other object that supports it, and don't need access to the index position of each item, then for...of is the best choice. It's easier to read and there's less to go wrong.

For other uses, for, while, and do...while loops are largely interchangeable. They can all be used to solve the same problems, and which one you use will largely depend on your personal preference — which one you find easiest to remember or most intuitive. We would recommend for, at least to begin with, as it is probably the easiest for remembering everything — the initializer, condition, and final-expression all have to go neatly into the parentheses, so it is easy to see where they are and check that you aren't missing them.

Let's have a look at them all again. */

/* First for...of:

for (const item of array) {
  // code to run
}

*/

/* for:

for (initializer; condition; final-expression) {
  // code to run
}

*/

/* while:

initializer
while (condition) {
  // code to run

  final-expression
}

*/

/* and finally do...while:

initializer
do {
  // code to run

  final-expression
} while (condition)

*/
