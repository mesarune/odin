"use strict";

/* Example A:

const x = function (z) {
  let w = 0;z.forEach(
function (q) {
    w += q;
});return w;
};

x([2, 2, 2]);

*/

/* Example B:

const sumArray = function (array) {
  let sum = 0;
  array.forEach(function (number) {
    sum += number;
  });
  return sum;
};

sumArray([2, 2, 2]);

*/

/* Which of these examples do you find easier to read? It’s immediately clear that the latter one is more meaningful. Surprisingly, both of these functions perform the exact same task (in the exact same way!), and both are valid code. But the second one is much more readable. Why?

In the first example, single-letter variables are used, there is a semicolon in the middle of lines, and the indentation is inconsistent. The result is a piece of code that is confusing and messy.

Imagine you’re collaborating on a project with someone who has written the first function. How long will it take you to decipher what’s going on so you can continue with your work? Or perhaps you’ve written it yourself some time ago and completely forgot that it even existed. In both situations, you will eventually understand what is happening, but it’s not going to be fun.

Example B represents clean code. While you may not know what each part does, it’s much easier to guess what is happening because the function and variables are named clearly. The indentation follows a consistent and logical pattern and there are no semicolons interrupting the code within a line.

Single characters can be used as variable names in the context of a loop or a callback function, but avoid them elsewhere. */

/* A good name is descriptive
In our good example we have a variable sum, to which each new number from the array is added. The function is named sumArray and the function does what the name suggests (if you’re thinking “what even is an array”, don’t worry - you’ll learn about them soon). Nice, clean and understandable.

Now, try picturing a conversation with someone about the bad example. The function is named x with variables like z, w and q. Oof, not nice. */

/* Use a consistent vocabulary
Variables of the same type should have consistent naming. Consider the following examples from a game:

 // Good
function getPlayerScore();
function getPlayerName();
function getPlayerTag();

// Bad
function getUserScore();
function fetchPlayerName();
function retrievePlayer1Tag();

*/

/* In the bad example, three different names are used to refer to the player and the actions taken. Additionally, three different verbs are used to describe these actions. The good example maintains consistency in both variable naming and the verbs used. */

/* Another set of examples can illustrate why this matters:

// Good
const numberOfThings = 10;
const myName = "Thor";
const selected = true;

// Bad (these start with verbs, could be confused for functions)
const getCount = 10;
const isSelected = true;

// Good
function getCount() {
  return numberOfThings;
}

// Bad (it's a noun)
function myName() {
  return "Thor";
}

*/

/* Sometimes, it can be tempting to use an undeclared variable. Let’s take another look at an example:

setTimeout(stopTimer, 3600000);

The problem is obvious. What does the undeclared variable 3600000 mean and how long is this timeout going to count down before executing stopTimer? Even if you know that JavaScript understands time in milliseconds, a calculator is needed. */

/* Now, let’s make this code more meaningful by introducing a descriptive variable:

const MILLISECONDS_PER_HOUR = 60 * 60 * 1000; // 3,600,000;

setTimeout(stopTimer, MILLISECONDS_PER_HOUR);

Much better, isn’t it? The variable is declared with a descriptive name, and you don’t need to perform any calculations when reading this code.

You might wonder why this variable is declared with all caps, when we have recommended camelCase earlier. This is a convention to be used when the programmer is absolutely sure that the variable is truly a constant. We know that the milliseconds in an hour will never change, so it’s appropriate here. */

/* Generally your code will be easier to read if you manually break lines that are longer than about 80 characters. Many code editors have a line in the display to show when you have crossed this threshold. When manually breaking lines, you should try to break immediately after an operator or comma.

Then, there are a few ways to format continuation lines. For example, you can:

// This line is a bit too long
let reallyReallyLongLine = something + somethingElse + anotherThing + howManyTacos + oneMoreReallyLongThing;

// You could format it like this
let reallyReallyLongLine =
  something +
  somethingElse +
  anotherThing +
  howManyTacos +
  oneMoreReallyLongThing;

// Or maybe like this
   let anotherReallyReallyLongLine = something + somethingElse + anotherThing +
                                     howManyTacos + oneMoreReallyLongThing;

*/

/* Don’t comment when you should be using git
It might be tempting to have comments in your code that explain the changes or additions you have made. For example:

/**
 * 2023-01-10: Removed unnecessary code that was causing confusion (RM)
 * 2023-03-05: Simplified the code (JP)
 * 2023-05-15: Removed functions that were causing bugs in production (LI)
 * 2023-06-22: Added a new function to combine values (JR)
 */

/* The problem is that you already have a tool to track changes - git! Keeping track of these comments will become a chore and you will have an incomplete picture of what has happened. Your files will also contain bloat that doesn’t belong there.

By using git, all this information will be neatly organized in the repository and readily accessible with git log. */

/* The same applies to code that is no longer used. If you need it again in the future, just turn to your git commits. Commenting out something while testing something else is of course ok but once a piece of code is not needed, just delete it. Don’t have something like this hanging around in your files:

theFunctionInUse();
// oldFunction();
// evenOlderUselessFunction();
// whyAmIEvenHereImAncient():

*/

/* Tell why, not how
The purpose of comments is not to provide pseudo code that duplicates your code. Good comments explain the reasons behind a piece of code.

Let’s look at an example to see this in practice:

// Bad Example - comment doesn't tell why, only what and how

// This function increments the value of i by 1
function incrementI(i) {
  i = i + 1; // Add one to i
  return i;
}

// Better Example - comment tells a why

// This function increments the value of index to move to the next element
function incrementI(i) {
  i = i + 1;
  return i;
}

// Good Example - the code tells all that is needed

function moveToNextElement(index) {
  index = index + 1;
  return index;
}

In the bad example, the comments explain twice what the code does. But for this, you could’ve just read the code, so the comments are redundant.

In the better example, the comment clarifies the purpose of the function: moving to the next element. That’s good but we can do even better.

In the good example, no comments are needed at all. The use of descriptive function and variable names eliminates the need for additional explanations. Pretty neat, huh? */

/* Let’s look at one final example, where a comment serves a good purpose:

function calculateBMI(height, weight) {
    // The formula for BMI is weight in kilograms divided by height in meters squared
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi;
}

This comment helps to refresh the reader on how BMI is calculated in plain English, helping the reader to see why the height needs to be converted and what the following calculation is doing. We are almost there just with the naming but the comment still adds further clarity. */

/* In conclusion
Now that we’ve covered these ideas, it’s good to return to the reminder we shared at the start. Don’t try to write perfectly clean code, this will only lead to frustration. Writing “spaghetti” is inevitable, everyone does it sometimes. Just keep these ideas in mind and with time and patience, your code will start to get cleaner.

Learning to write clean code is a process of constant improvement. One that will extend beyond you completing The Odin Project. This lesson is meant to serve as a primer, a starting point for that journey. */

