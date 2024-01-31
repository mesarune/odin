"use strict";

const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string

const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number

/* The JavaScript language has many built-in functions to allow you to do useful things without having to write all that code yourself. In fact, some of the code you are calling when you invoke (a fancy word for run, or execute) a built-in browser function couldn't be written in JavaScript — many of these functions are calling parts of the background browser code, which is written largely in low-level system languages like C++, not web languages like JavaScript. */

/* You've also seen a lot of custom functions in the course so far — functions defined in your code, not inside the browser. Anytime you saw a custom name with parentheses straight after it, you were using a custom function. */

/* function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
} */

/* This function draws 100 random circles inside a <canvas> element. Every time we want to do that, we can just invoke the function with this: */

/* draw(); */

/* rather than having to write all that code out again every time we want to repeat it. Functions can contain whatever code you like — you can even call other functions from inside functions. The above function for example calls the random() function three times, which is defined by the following code: */

function random(number) {
  return Math.floor(Math.random() * number);
}

/* You are probably clear on this by now, but just in case, to actually use a function after it has been defined, you've got to run — or invoke — it. This is done by including the name of the function in the code somewhere, followed by parentheses. */

function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once

/* Some functions require parameters to be specified when you are invoking them — these are values that need to be included inside the function parentheses, which it needs to do its job properly. */

/* As an example, the browser's built-in Math.random() function doesn't require any parameters. When called, it always returns a random number between 0 and 1: */

// const myNumber = Math.random();

/* The browser's built-in string replace() function however needs two parameters — the substring to find in the main string, and the substring to replace that string with: */

// const myText = "I am a string";
// const newString = myText.replace("string", "sausage");

/* Note: When you need to specify multiple parameters, they are separated by commas. */

/* Sometimes parameters are optional — you don't have to specify them. If you don't, the function will generally adopt some kind of default behavior. As an example, the array join() function's parameter is optional: */

// const myArray = ["I", "love", "chocolate", "frogs"];
// const madeAString = myArray.join(" ");
// console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'

/* If no parameter is included to specify a joining/delimiting character, a comma is used by default. */

/* If you're writing a function and want to support optional parameters, you can specify default values by adding = after the name of the parameter, followed by the default value: */

function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
