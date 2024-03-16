"use strict";

/* Now that we have a handle on manipulating the DOM with JavaScript, the next step is learning how to make that happen dynamically or on demand! Events are how you make that magic happen on your pages. Events are actions that occur on your webpage, such as mouse-clicks or key-presses. Using JavaScript, we can make our webpage listen to and react to these events.

There are three primary ways to go about this:

You can specify function attributes directly on your HTML elements.
You can set properties in the form of on<eventType>, such as onclick or onmousedown, on the DOM nodes in your JavaScript.
You can attach event listeners to the DOM nodes in your JavaScript.
Event listeners are definitely the preferred method, but you will regularly see the others in use, so we’re going to cover all three. */

// Method 1
// <button onclick="alert('Hello World')">Click Me</button>

/* This solution is less than ideal because we’re cluttering our HTML with JavaScript. Also, we can only set one “onclick” property per DOM element, so we’re unable to run multiple separate functions in response to a click event using this method. */

// Method 2
// <!-- the HTML file -->
// <button id="btn">Click Me</button>

// the JavaScript file
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

/* This is a little better. We’ve moved the JS out of the HTML and into a JS file, but we still have the problem that a DOM element can only have one “onclick” property. */

// Method 3
// <!-- the HTML file -->
// <button id="btn">Click Me Too</button>

// the JavaScript file
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello World");
// });

/* Now, we maintain separation of concerns, and we also allow multiple event listeners if the need arises. Method 3 is much more flexible and powerful, though it is a bit more complex to set up. */

/* Note that all three of these methods can be used with named functions like so: */

// <!-- the HTML file -->
// <!-- METHOD 1 -->
// <button onclick="alertFunction()">CLICK ME BABY</button>

// the JavaScript file
// METHOD 1
// function alertFunction() {
//   alert("YAY! YOU DID IT!");
// }

// <!-- the HTML file -->
// <!-- METHODS 2 & 3 -->
// <button id="btn">CLICK ME BABY</button>

// the JavaScript file
// METHODS 2 & 3
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

// METHOD 2
// btn.onclick = alertFunction;

// METHOD 3
// btn.addEventListener("click", alertFunction);

/* Using named functions can clean up your code considerably, and is a really good idea if the function is something that you are going to want to do in multiple places. */

/* With all three methods, we can access more information about the event by passing a parameter to the function that we are calling. Try this out on your own machine: */

// btn.addEventListener("click", function (e) {
//   console.log(e);
// });

/* The e parameter in that callback function contains an object that references the event itself. Within that object you have access to many useful properties and methods (functions that live inside an object) such as which mouse button or key was pressed, or information about the event’s target - the DOM node that was clicked.

Try this: */

// btn.addEventListener("click", function (e) {
//   console.log(e.target);
// });

/* and now this: */

// function setBlueBtn (e) {
//   e.target.style.background = "blue";
// }

// btn1.addEventListener("click", setBlueBtn);
// btn2.addEventListener("click", setBlueBtn);
// btn3.addEventListener("click", setBlueBtn);

/* This might seem like a lot of code if you’re attaching lots of similar event listeners to many elements. There are a few ways to go about doing that more efficiently. We learned above that we can get a NodeList of all of the items matching a specific selector with querySelectorAll('selector'). In order to add a listener to each of them, we need to iterate through the whole list, like so: */

// <div id="container">
//   <button id="1">Click Me</button>
//   <button id="2">Click Me</button>
//   <button id="3">Click Me</button>
// </div>

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

/* This is just the tip of the iceberg when it comes to DOM manipulation and event handling, but it’s enough to get you started with some exercises. In our examples so far, we have been using the ‘click’ event exclusively, but there are many more available to you.

Some useful events include:

click
dblclick
keydown
keyup

*/
