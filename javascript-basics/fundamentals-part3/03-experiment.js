"use strict";

lizerd(); // "I'm chilling on the wall."

// console.log(num1 + num2); // Cannot access 'num1' before initialization

// console.log(result); // Cannot access 'result' before initialization

// let result = num1 * num2; // Cannot access 'num1' before initialization

let num1 = 1;
let num2 = 2;

let result = num1 * num2;

console.log(result); // 2

console.log(num1 + num2); // 3

function lizerd() {
  alert( "I'm chilling on the wall." );
}