"use strict";

// An empty object (“empty cabinet”) can be created using one of two syntaxes:
// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax
// Usually, the figure brackets {...} are used. That declaration is called an object literal.

// We can immediately put some properties into {...} as “key: value” pairs:
// let user = {     // an object
//   name: "John",  // by key "name" store value "John"
//   age: 30        // by key "age" store value 30
// };
// A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.
// In the user object, there are two properties:
// 1.The first property has the name "name" and the value "John".
// 2.The second one has the name "age" and the value 30.

// We can add, remove and read files from it at any time.
// Property values are accessible using the dot notation:
// // get property values of the object:
// alert( user.name ); // John
// alert( user.age ); // 30

// The value can be of any type. Let’s add a boolean one:
// user.isAdmin = true;

// To remove a property, we can use the delete operator:
// delete user.age;

// We can also use multiword property names, but then they must be quoted:
// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true  // multiword property name must be quoted
// };

// The last property in the list may end with a comma:
// let user = {
//   name: "John",
//   age: 30,
// }
// That is called a “trailing” or “hanging” comma.

// For multiword properties, the dot access doesn’t work:
// // this would give a syntax error
// user.likes birds = true
// JavaScript doesn’t understand that. It thinks that we address user.likes, and then gives a syntax error
// when comes across unexpected birds.
// The dot requires the key to be a valid variable identifier. That implies: contains no spaces, doesn’t start with a
// digit and doesn’t include special characters ($ and _ are allowed).

// There’s an alternative “square bracket notation” that works with any string:
// let user = {};
//
// // set
// user["likes birds"] = true;
//
// // get
// alert(user["likes birds"]); // true
//
// // delete
// delete user["likes birds"];
// Now everything is fine. Please note that the string inside the brackets is properly quoted (any type of quotes
// will do).

// Square brackets also provide a way to obtain the property name as the result of any expression – as opposed
// to a literal string – like from a variable as follows:
// let key = "likes birds";
//
// // same as user["likes birds"] = true;
// user[key] = true;
// Here, the variable key may be calculated at run-time or depend on the user input. And then we use it to
// access the property. That gives us a great deal of flexibility.

// For instance:
// let user = {
//   name: "John",
//   age: 30
// };
//
// let key = prompt("What do you want to know about the user?", "name");
//
// // access by variable
// alert( user[key] ); // John (if enter "name")

// The dot notation cannot be used in a similar way:
// let user = {
//   name: "John",
//   age: 30
// };
//
// let key = "name";
// alert( user.key ) // undefined
