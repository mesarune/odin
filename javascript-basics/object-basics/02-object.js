"use strict";

/* We can use square brackets in an object literal, when creating an object. That’s called computed properties.

For instance: */

// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag.apple ); // 5 if fruit="apple"

/* The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.

So, if a visitor enters "apple", bag will become {apple: 5}.

Essentially, that works the same as: */

// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {};

// take property name from the fruit variable
// bag[fruit] = 5;

/* We can use more complex expressions inside square brackets: */

// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };

/* Square brackets are much more powerful than dot notation. They allow any property names and variables. But they are also more cumbersome to write.

So most of the time, when property names are known and simple, the dot is used. And if we need something more complex, then we switch to square brackets. */

/* In real code, we often use existing variables as values for property names.

For instance: */

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
    // ...other properties
//   };
// }

// let user = makeUser("John", 30);
// alert(user.name); // John

/* In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.

Instead of name:name we can just write name, like this: */

// function makeUser(name, age) {
//   return {
//     name, // same as name: name
//     age,  // same as age: age
    // ...
//   };
// }

/* We can use both normal properties and shorthands in the same object: */

// let user = {
//   name,  // same as name:name
//   age: 30
// };

/* As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

But for an object property, there’s no such restriction: */

// these properties are all right
// let obj = {
//   for: 1,
//   let: 2,
//   return: 3
// };

// alert( obj.for + obj.let + obj.return );  // 6

/* In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later).

Other types are automatically converted to strings.

For instance, a number 0 becomes a string "0" when used as a property key: */

// let obj = {
//   0: "test" // same as "0": "test"
// };

// both alerts access the same property (the number 0 is converted to string "0")
// alert( obj["0"] ); // test
// alert( obj[0] ); // test (same property)

/* There’s a minor gotcha with a special property named __proto__. We can’t set it to a non-object value: */

// let obj = {};
// obj.__proto__ = 5; // assign a number
// alert(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

/* As we see from the code, the assignment to a primitive 5 is ignored.

We’ll cover the special nature of __proto__ in subsequent chapters, and suggest the ways to fix such behavior. */

/* A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist!

Reading a non-existing property just returns undefined. So we can easily test whether the property exists: */

// let user = {};

// alert( user.noSuchProperty === undefined ); // true means "no such property"

/* There’s also a special operator "in" for that.

The syntax is: */

// "key" in object

/* For instance: */

// let user = { name: "John", age: 30 };

// alert( "age" in user ); // true, user.age exists
// alert( "blabla" in user ); // false, user.blabla doesn't exist

/* Please note that on the left side of in there must be a property name. That’s usually a quoted string.

If we omit quotes, that means a variable should contain the actual name to be tested. For instance: */

// let user = { age: 30 };

// let key = "age";
// alert( key in user ); // true, property "age" exists

/* Why does the in operator exist? Isn’t it enough to compare against undefined?

Well, most of the time the comparison with undefined works fine. But there’s a special case when it fails, but "in" works correctly.

It’s when an object property exists, but stores undefined: */

// let obj = {
//   test: undefined
// };

// alert( obj.test ); // it's undefined, so - no such property?

// alert( "test" in obj ); // true, the property does exist!

/* In the code above, the property obj.test technically exists. So the in operator works right.

Situations like this happen very rarely, because undefined should not be explicitly assigned. We mostly use null for “unknown” or “empty” values. So the in operator is an exotic guest in the code. */