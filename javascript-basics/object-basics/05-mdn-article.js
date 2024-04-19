"use strict";

// const person = {
//   name: ["Bob", "Smith"],
//   age: 32,
//   bio: function () {
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//   },
//   introduceSelf: function () {
//     console.log(`Hi! I'm ${this.name[0]}.`);
//   },
// };

// console.log(person.name); // ["Bob","Smith"]
// console.log(person.name[0]); // "Bob"
// console.log(person.age); // 32
// console.log(person.bio()); // "Bob Smith is 32 years old."
// console.log(person.introduceSelf()); // "Hi! I'm Bob."

/* So what is going on here? Well, an object is made up of multiple members, each of which has a name (e.g. name and age above), and a value (e.g. ['Bob', 'Smith'] and 32). Each name/value pair must be separated by a comma, and the name and value in each case are separated by a colon. The syntax always follows this pattern: */

// const objectName = {
//   member1Name: member1Value,
//   member2Name: member2Value,
//   member3Name: member3Value,
// };

/* The value of an object member can be pretty much anything — in our person object we've got a number, an array, and two functions. The first two items are data items, and are referred to as the object's properties. The last two items are functions that allow the object to do something with that data, and are referred to as the object's methods. */

/* When the object's members are functions there's a simpler syntax. Instead of bio: function () we can write bio(). Like this: */

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

/* From now on, we'll use this shorter syntax. */

/* An object like this is referred to as an object literal — we've literally written out the object contents as we've come to create it. This is different compared to objects instantiated from classes, which we'll look at later on. */

/* It is very common to create an object using an object literal when you want to transfer a series of structured, related data items in some manner, for example sending a request to the server to be put into a database. Sending a single object is much more efficient than sending several items individually, and it is easier to work with than an array, when you want to identify individual items by name. */
