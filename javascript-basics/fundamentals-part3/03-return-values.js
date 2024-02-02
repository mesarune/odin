"use strict";

/* Return values are just what they sound like — the values that a function returns when it completes. You've already met return values several times, although you may not have thought about them explicitly. */

const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made

/* The replace() function is invoked on the myText string, and is passed two parameters:

The substring to find ('cold')
The string to replace it with ('warm')
When the function completes (finishes running), it returns a value, which is a new string with the replacement made. In the code above, the result of this return value is saved in the variable newString. */

/* If you look at the replace() function MDN reference page, you'll see a section called return value. It is very useful to know and understand what values are returned by functions, so we try to include this information wherever possible. */

/* To return a value from a custom function, you need to use the return keyword. We saw this in action recently in our random-canvas-circles.html example. Our draw() function draws 100 random circles somewhere on an HTML <canvas>: */

/*
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
*/

/* Inside each loop iteration, three calls are made to the random() function, to generate a random value for the current circle's x-coordinate, y-coordinate, and radius, respectively. The random() function takes one parameter — a whole number — and returns a whole random number between 0 and that number. It looks like this: */

/*
function random(number) {
  return Math.floor(Math.random() * number);
}
*/

/* This could be written as follows: */

/*
function random(number) {
  const result = Math.floor(Math.random() * number);
  return result;
}
*/

/* We are returning the result of the calculation Math.floor(Math.random() * number) each time the function is called. This return value appears at the point the function was called, and the code continues. */

/* So when you execute the following: */

// ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);

/* If the three random() calls return the values 500, 200, and 35, respectively, the line would actually be run as if it were this: */

// ctx.arc(500, 200, 35, 0, 2 * Math.PI);

/* The function calls on the line are run first, and their return values are substituted for the function calls, before the line itself is then executed. */

/* Let's have a go at writing our own functions featuring return values.

Make a local copy of the function-library.html file from GitHub. This is a simple HTML page containing a text <input> field and a paragraph. There's also a <script> element, in which we have stored a reference to both HTML elements in two variables. This page will allow you to enter a number into the text box, and display different numbers related to it below.
Add some useful functions to this <script> element below the two existing lines: */

/*
function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}
*/

/* The squared() and cubed() functions are fairly obvious — they return the square or cube of the number that was given as a parameter. The factorial() function returns the factorial of the given number. */

/* Include a way to print out information about the number entered into the text input by adding the following event handler below the existing functions: */

/*
input.addEventListener("change", () => {
  const num = parseFloat(input.value);
  if (isNaN(num)) {
    para.textContent = "You need to enter a number!";
  } else {
    para.textContent = `${num} squared is ${squared(num)}. `;
    para.textContent += `${num} cubed is ${cubed(num)}. `;
    para.textContent += `${num} factorial is ${factorial(num)}. `;
  }
});
*/

/* Here are some explanations for the addEventListener function in step 3 above:

By adding a listener to the change event, this function runs whenever the change event fires on the text input — that is when a new value is entered into the text input, and submitted (e.g., enter a value, then un-focus the input by pressing Tab or Return). When this anonymous function runs, the value in the input is stored in the num constant.
The if statement prints an error message if the entered value is not a number. The condition checks if the expression isNaN(num) returns true. The isNaN() function tests whether the num value is not a number — if so, it returns true, and if not, it returns false.
If the condition returns false, the num value is a number and the function prints out a sentence inside the paragraph element that states the square, cube, and factorial values of the number. The sentence calls the squared(), cubed(), and factorial() functions to calculate the required values. */

