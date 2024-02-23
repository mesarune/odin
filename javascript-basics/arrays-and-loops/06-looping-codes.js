"use strict";

/* Let's look at a real example so we can visualize what these do more clearly.

const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));

This code calculates squares for the numbers from 1 to 9, and writes out the result. The core of the code is the for loop that performs the calculation.

Let's break down the for (let i = 1; i < 10; i++) line into its three pieces:

1.let i = 1: the counter variable, i, starts at 1. Note that we have to use let for the counter, because we're reassigning it each time we go round the loop.
2.i < 10: keep going round the loop for as long as i is smaller than 10.
3.i++: add one to i each time round the loop.

Inside the loop, we calculate the square of the current value of i, that is: i * i. We create a string expressing the calculation we made and the result, and add this string to the output text. We also add \n, so the next string we add will begin on a new line. So:

1.During the first run, i = 1, so we will add 1 x 1 = 1.
2.During the second run, i = 2, so we will add 2 x 2 = 4.
3.And so on…
4.When i becomes equal to 10 we will stop running the loop and move straight to the next bit of code below the loop, printing out the Finished! message on a new line.

*/

/* You can use a for loop to iterate through a collection, instead of a for...of loop.

Let's look again at our for...of example above:

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}

We could rewrite that code like this:

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

In this loop we're starting i at 0, and stopping when i reaches the length of the array. Then inside the loop, we're using i to access each item in the array in turn.

This works just fine, and in early versions of JavaScript, for...of didn't exist, so this was the standard way to iterate through an array. However, it offers more chances to introduce bugs into your code. For example:

1.you might start i at 1, forgetting that the first array index is zero, not 1.
2.you might stop at i <= cats.length, forgetting that the last array index is at length - 1.

For reasons like this, it's usually best to use for...of if you can. */

/* Sometimes you still need to use a for loop to iterate through an array. For example, in the code below we want to log a message listing our cats:

const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "

The final output sentence isn't very well-formed:

My cats are called Pete, Biggles, Jasmine,

We'd prefer it to handle the last cat differently, like this:

My cats are called Pete, Biggles, and Jasmine.

But to do this we need to know when we are on the final loop iteration, and to do that we can use a for loop and examine the value of i:

const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // We are at the end of the array
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

/* If you want to exit a loop before all the iterations have been completed, you can use the break statement. We already met this in the previous article when we looked at switch statements — when a case is met in a switch statement that matches the input expression, the break statement immediately exits the switch statement and moves on to the code after it.

It's the same with loops — a break statement will immediately exit the loop and make the browser move on to any code that follows it.

Say we wanted to search through an array of contacts and telephone numbers and return just the number we wanted to find? First, some simple HTML — a text <input> allowing us to enter a name to search for, a <button> element to submit a search, and a <p> element to display the results in:

<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>

Now on to the JavaScript:

const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});

1.First of all, we have some variable definitions — we have an array of contact information, with each item being a string containing a name and phone number separated by a colon.

2.Next, we attach an event listener to the button (btn) so that when it is pressed some code is run to perform the search and return the results.

3.We store the value entered into the text input in a variable called searchName, before then emptying the text input and focusing it again, ready for the next search. Note that we also run the toLowerCase() method on the string, so that searches will be case-insensitive.

4.Now on to the interesting part, the for...of loop:

I.Inside the loop, we first split the current contact at the colon character, and store the resulting two values in an array called splitContact.

II.We then use a conditional statement to test whether splitContact[0] (the contact's name, again lower-cased with toLowerCase()) is equal to the inputted searchName. If it is, we enter a string into the paragraph to report what the contact's number is, and use break to end the loop.

5.After the loop, we check whether we set a contact, and if not we set the paragraph text to "Contact not found.".

*/

/* The continue statement works similarly to break, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop. Let's look at another example that takes a number as an input, and returns only the numbers that are squares of integers (whole numbers).

The HTML is basically the same as the last example — a simple numeric input, and a paragraph for output.

<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>

The JavaScript is mostly the same too, although the loop itself is a bit different:

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "Output: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});

1.In this case, the input should be a number (num). The for loop is given a counter starting at 1 (as we are not interested in 0 in this case), an exit condition that says the loop will stop when the counter becomes bigger than the input num, and an iterator that adds 1 to the counter each time.

2.Inside the loop, we find the square root of each number using Math.sqrt(i), then check whether the square root is an integer by testing whether it is the same as itself when it has been rounded down to the nearest integer (this is what Math.floor() does to the number it is passed).

3.If the square root and the rounded down square root do not equal one another (!==), it means that the square root is not an integer, so we are not interested in it. In such a case, we use the continue statement to skip on to the next loop iteration without recording the number anywhere.

4.If the square root is an integer, we skip past the if block entirely, so the continue statement is not executed; instead, we concatenate the current i value plus a space at the end of the paragraph content.
