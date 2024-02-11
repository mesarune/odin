"use strict";

/* factorial */

// n! = n * (n - 1) * (n - 2) * ...*1

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));