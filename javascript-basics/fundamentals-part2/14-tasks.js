"use strict";

if ("0") {
  alert( 'Hello' );
}

if (0) {
  alert( 'Hello' );
}

/* A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
Other values become true, so they are called “truthy”. */

let name = prompt('What is the “official” name of JavaScript?');

if (name === "ECMAScript") {
  alert("Right!");
} else {
  alert("You don’t know? ECMAScript!");
}

let number = prompt("Enter your favorite number.", "0");

if (number == 0) {
  alert("0");
} else if (number > 0) {
  alert("1");
} else {
  alert("-1");
}

let a = 3;
let b = 4;

let result = (a + b < 4) ? 'Below' : 'Over';

let login = prompt("Who are you?", "");

let message = (login == "Employee") ? "Hello." :
(login == "Director") ? "Greetings." :
(login == "") ? "No login." :
"";

console.log(message);