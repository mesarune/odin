"use strict";

const fibonacci = function(n) {
  let array = [1, 1];
  for (let i = 2; i < n; i++) {
    array.push(array.at(-2) + array.at(-1));
  }
  return array.at(-1);
};

console.log(fibonacci(1));