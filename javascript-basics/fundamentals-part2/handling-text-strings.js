"use strict";

const string = "The revolution will not be televised.";

// const badString1 = This is a test;
// const badString2 = 'This is a test;
// const badString3 = This is a test';

const badString = string;

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

// const badQuotes = 'This is not allowed!";

let name = "Chris";
const greeting = `Hello, ${name}`;

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;


// concatenation being used in action
const button = document.querySelector("button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);
// concatenation being used in action


const hello = "Hello";
const who = "Chris";
// console.log(hello + ", " + who);
// "Hello, Chris"

// console.log(`${hello}, ${who}`);
// "Hello, Chris"

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
// console.log(output);
// "I like the song Fight the Youth. I gave it a score of 90%."

let newline = `One day you finally knew
what you had to do, and began,`;
/*
One day you finally knew
what you had to do, and began,
*/

// To have the equivalent output using a normal string you'd have to include line break characters (\n) in the string
newline = "One day you finally knew\nwhat you had to do, and began,";
/*
One day you finally knew
what you had to do, and began,
*/

// const badQuotes = "She said "I think so!"";
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;

// Escaping characters means that we do something to them to make sure they are recognized as text, not part of the code. In JavaScript, we do this by putting a \backslash just before the character
const bigmouth = 'I\'ve got no right to take my place…';

name = "Front ";
let number = 242;
// console.log(name + number);
// "Front 242"

let myString = "123";
let myNum = Number(myString);
// console.log(typeof myNum);
// number
let myNum2 = 123;
let myString2 = String(myNum2);
// console.log(typeof myString2);
// string

// some experimentation
let myString3 = "one, two, three"
let myNum3 = Number(myString3)
// console.log(typeof myNum3);
// number
let result = myNum + myNum2
// console.log(result);
// 246
let result2 = myNum + myNum3
// console.log(result2);
// NaN

console.log(myNum3);
