"use strict";

/* Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled” */

// !IT'S NOT WORKING!

let name = prompt("What is your name?", "");

if (name === "Admin") {
  let pw = prompt("Enter the password.", "");
} else if (name === " " || name === null) {
  alert("Canceled.");
} else {
  alert("I don't Know you.");
} if (pw === "TheMaster") {
  // Uncaught ReferenceError: pw is not defined
  alert("Welcome.");
} else if (pw === " " || pw === null) {
  alert("Canceled.");
} else {
  alert("Wrong password.")
}

console.log();
