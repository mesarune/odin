"use strict";

/* Basic if...else syntax looks like this: */

/* if (condition) {
  code to run if condition is true
} else {
  run some other code instead
} */

/* Here we've got:

The keyword if followed by some parentheses.
A condition to test, placed inside the parentheses (typically "is this value bigger than this other value?", or "does this value exist?"). The condition makes use of the comparison operators we discussed in the last module and returns true or false.
A set of curly braces, inside which we have some code — this can be any code we like, and it only runs if the condition returns true.
The keyword else.
Another set of curly braces, inside which we have some more code — this can be any code we like, and it only runs if the condition is not true — or in other words, the condition is false.
This code is pretty human-readable — it is saying "if the condition returns true, run code A, else run code B" */

/* You should note that you don't have to include the else and the second curly brace block — the following is also perfectly legal code: */

/* if (condition) {
  code to run if condition is true
}

run some other code */

/* However, you need to be careful here — in this case, the second block of code is not controlled by the conditional statement, so it always runs, regardless of whether the condition returns true or false. This is not necessarily a bad thing, but it might not be what you want — often you want to run one block of code or the other, not both. */

/* To understand this syntax better, let's consider a real example. Imagine a child being asked for help with a chore by their mother or father. The parent might say "Hey sweetheart! If you help me by going and doing the shopping, I'll give you some extra allowance so you can afford that toy you wanted." In JavaScript, we could represent this like so: */

let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

/* There is a way to chain on extra choices/outcomes to your if...else — using else if. Each extra choice requires an additional block to put in between if () { } and else { } — check out the following more involved example, which could be part of a simple weather forecast application: */

const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}

/* Here we've got an HTML <select> element allowing us to make different weather choices, and a simple paragraph.
In the JavaScript, we are storing a reference to both the <select> and <p> elements, and adding an event listener to the <select> element so that when its value is changed, the setWeather() function is run.
When this function is run, we first set a variable called choice to the current value selected in the <select> element. We then use a conditional statement to show different text inside the paragraph depending on what the value of choice is. Notice how all the conditions are tested in else if () { } blocks, except for the first one, which is tested in an if () { } block.
The very last choice, inside the else { } block, is basically a "last resort" option — the code inside it will be run if none of the conditions are true. In this case, it serves to empty the text out of the paragraph if nothing is selected, for example, if a user decides to re-select the "--Make a choice--" placeholder option shown at the beginning. */



console.log();
