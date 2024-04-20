"use strict";

// const person = {
//   name: ["Bob", "Smith"],
//   age: 32,
//   bio() {
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//   },
//   introduceSelf() {
//     console.log(`Hi! I'm ${this.name[0]}.`);
//   },
// };

/* Above, you accessed the object's properties and methods using dot notation. The object name (person) acts as the namespace — it must be entered first to access anything inside the object. Next you write a dot, then the item you want to access — this can be the name of a simple property, an item of an array property, or a call to one of the object's methods, for example: */

// console.log(person.age);
// person.bio();

/* An object property can itself be an object. For example, try changing the name member from */

// const person = {
//   name: ["Bob", "Smith"],
// };

/* to */

// const person = {
//   name: {
//     first: "Bob",
//     last: "Smith",
//   },
//   // …
// };

/* To access these items you just need to chain the extra step onto the end with another dot. Try these in the JS console: */

// console.log(person.name.first);
// console.log(person.name.last);

/* If you do this, you'll also need to go through your method code and change any instances of */

// name[0];
// name[1];

/* to */

// name.first;
// name.last;

/* Otherwise, your methods will no longer work. */

const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  bio() {
    console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name.first}.`);
  },
};

person.bio();
person.introduceSelf();
