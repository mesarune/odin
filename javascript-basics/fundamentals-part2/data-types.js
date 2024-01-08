"use strict";

let message = "hello";
message = 123456;

// Number
let n = 123;
n = 12.345;

// Infinity
n = 1 / 0;
n = Infinity; // We can reference Infinity directly

// NaN
n = "not a number" / 2;
n = NaN + 1;

// BigInt
n = 1234567890123456789012345678901234567890n; // the "n" at the end means it's a BigInt

// String
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`; // Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}
let name = "John";
phrase = `Hello, ${name}!`
phrase = `the result is ${1 + 2}`

console.log(phrase);
