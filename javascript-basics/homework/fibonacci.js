"use strict";

// const fibonacci = function(n) {
//   let array = [1, 1];
//   for (let i = 2; i < n; i++) {
//     array.push(array.at(-2) + array.at(-1));
//   }
//   return array.at(-1);
// };

const fibonacci = function(n) {
  let num1 = 1;
  let num2 = 1;
  for (let i = 2; i < n; i++) {
    num2 = num1 + num2;
    num1 = num2 - num1;
  }
  return num2;
};

console.log(fibonacci(7));