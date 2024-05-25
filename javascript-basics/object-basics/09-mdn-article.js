"use strict";

/* Bracket notation provides an alternative way to access object properties. */

// person["age"];
// person["name"]["first"];

/* This looks very similar to how you access the items in an array, and it is basically the same thing — instead of using an index number to select an item, you are using the name associated with each member's value. It is no wonder that objects are sometimes called associative arrays — they map strings to values in the same way that arrays map numbers to values. */

/* Dot notation is generally preferred over bracket notation because it is more succinct and easier to read. However there are some cases where you have to use square brackets. For example, if an object property name is held in a variable, then you can't use dot notation to access the value, but you can access the value using bracket notation. */

/* In the example below, the logProperty() function can use person[propertyName] to retrieve the value of the property named in propertyName. */

const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  age: 32,
  introduceSelf() {
    console.log(`Hi! I'm ${this.name.first}.`);
  },
};

const myDataName = "height";
const myDataValue = "1.75m";
person[myDataName] = myDataValue;

function logProperty(propertyName) {
  console.log(person[propertyName]);
}

logProperty("name");
// {
//   "first": "Bob",
//   "last": "Smith"
// }
logProperty("age");
// 32

/* So far we've only looked at retrieving (or getting) object members — you can also set (update) the value of object members by declaring the member you want to set (using dot or bracket notation), like this: */

person.age = 45;
person["name"]["last"] = "Cratchit";

console.log(person.age);
// 45
console.log(person.name.last);
// "Cratchit"

/* Setting members doesn't just stop at updating the values of existing properties and methods; you can also create completely new members. Try these in the JS console: */

person["eyes"] = "hazel";
person.farewell = function () {
  console.log("Bye everybody!");
};

console.log(person.eyes);
// "hazel"
person.farewell();
// "Bye everybody!"

/* One useful aspect of bracket notation is that it can be used to set not only member values dynamically, but member names too. Let's say we wanted users to be able to store custom value types in their people data, by typing the member name and value into two text inputs. We could get those values like this: */

// const myDataName = nameInput.value;
// const myDataValue = nameValue.value;

/* We could then add this new member name and value to the person object like this: */

// person[myDataName] = myDataValue;

console.log(person.height);
// "1.75m"

/* Adding a property to an object using the method above isn't possible with dot notation, which can only accept a literal member name, not a variable value pointing to a name. */

/* You may have noticed something slightly strange in our methods. Look at this one for example: */

// introduceSelf() {
//   console.log(`Hi! I'm ${this.name[0]}.`);
// }

/* You are probably wondering what "this" is. The this keyword refers to the current object the code is being written inside — so in this case this is equivalent to person. So why not just write person instead? */

/* Well, when you only have to create a single object literal, it's not so useful. But if you create more than one, this enables you to use the same method definition for every object you create. */

/* Let's illustrate what we mean with a simplified pair of person objects: */

const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

/* In this case, person1.introduceSelf() outputs "Hi! I'm Chris."; person2.introduceSelf() on the other hand outputs "Hi! I'm Deepti.", even though the method's code is exactly the same in each case. This isn't hugely useful when you are writing out object literals by hand, but it will be essential when we start using constructors to create more than one object from a single object definition, and that's the subject of the next section. */

