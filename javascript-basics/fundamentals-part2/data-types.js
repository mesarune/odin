"use strict";

let message = "hello";
message = 123456;

// Number
let n = 123;
n = 12.345;

n = 1 / 0;
n = Infinity; // We can reference Infinity directly

n = "not a number" / 2;
n = NaN + 1;

// BigInt
n = 1234567890123456789012345678901234567890n; // the "n" at the end means it's a BigInt

// String
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`; // Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}
let name = "John";
phrase = `Hello, ${name}!`;
phrase = `the result is ${1 + 2}`;

// Boolean
let isGreater = 4 > 1;

// Null
let pw = null;
// null for unknown values – a standalone type that has a single value null.

// Undefined
let age;

// Object
// The object type is special.
// All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.
// Being that important, objects deserve a special treatment. We’ll deal with them later in the chapter Objects, after we learn more about primitives.

// Symbol
// The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.

console.log(age);
