"use strict"

/* To walk over all keys of an object, there exists a special form of the loop: for..in. This is a completely different thing from the for(;;) construct that we studied before.

The syntax: */

// for (key in object) {
//   // executes the body for each key among object properties
// }

/* For instance, let’s output all properties of user: */

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for (let key in user) {
//   // keys
//   alert( key );  // name, age, isAdmin
//   // values for the keys
//   alert( user[key] ); // John, 30, true
// }

/* Note that all “for” constructs allow us to declare the looping variable inside the loop, like let key here.

Also, we could use another variable name here instead of key. For instance, "for (let prop in obj)" is also widely used. */

/* Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?

The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.

As an example, let’s consider an object with the phone codes: */

// let codes = {
//   "49": "Germany",
//   "41": "Switzerland",
//   "44": "Great Britain",
//   // ..,
//   "1": "USA"
// };

// for (let code in codes) {
//   alert(code); // 1, 41, 44, 49
// }

/* The object may be used to suggest a list of options to the user. If we’re making a site mainly for a German audience then we probably want 49 to be the first.

But if we run the code, we see a totally different picture:

USA (1) goes first
then Switzerland (41) and so on.

The phone codes go in the ascending sorted order, because they are integers. So we see 1, 41, 44, 49. */

/* The “integer property” term here means a string that can be converted to-and-from an integer without a change.

So, "49" is an integer property name, because when it’s transformed to an integer number and back, it’s still the same. But "+49" and "1.2" are not: */

// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
// alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
// alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
// alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property

/* …On the other hand, if the keys are non-integer, then they are listed in the creation order, for instance: */

// let user = {
//   name: "John",
//   surname: "Smith"
// };
// user.age = 25; // add one more

// non-integer properties are listed in the creation order
// for (let prop in user) {
//   alert( prop ); // name, surname, age
// }

/* So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer. Adding a plus "+" sign before each code is enough.

Like this: */

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}

/* Now it works as intended. */