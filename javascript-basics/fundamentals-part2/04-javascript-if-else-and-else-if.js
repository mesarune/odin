"use strict";

/* In JavaScript we have the following conditional statements:

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed */

/* if statement

if (condition) {
  //  block of code to be executed if the condition is true
}

*/

/* Make a "Good day" greeting if the hour is less than 18:00: */

let greeting;

let hour = 15;

if (hour < 18) {
  greeting = "Good day";
}

/* else statement

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}

*/

/* If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening": */

hour = 21;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

/* else if statement

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

*/

/* If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening": */

hour = 17

if (hour < 10) {
  greeting = "Good morning";
} else if (hour < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

/* Exercise */

let x = 3;
let y = 1;

if (x > y){
  greeting = "Hello world";
}

x = 6;
y = 18;

if (x > y){
  greeting = "Hello world";
} else {
  greeting = "Good bye";
}

console.log(greeting);
