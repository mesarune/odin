"use strict";

/*
We would like a way to define the "shape" of an object — the set of methods and the properties it can have — and then create as many objects as we like, just updating the values for the properties that are different.

The first version of this is just a function:
*/

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

/*
This function creates and returns a new object each time we call it. The object will have two members:

a property name
a method introduceSelf().
Note that createPerson() takes a parameter name to set the value of the name property, but the value of the introduceSelf() method will be the same for all objects created using this function. This is a very common pattern for creating objects.

Now we can create as many objects as we like, reusing the definition:
*/

// const salva = createPerson("Salva");
// salva.introduceSelf();
// "Hi! I'm Salva."

// const frankie = createPerson("Frankie");
// frankie.introduceSelf();
// "Hi! I'm Frankie."

/*
This works fine but is a bit long-winded: we have to create an empty object, initialize it, and return it. A better way is to use a constructor. A constructor is just a function called using the new keyword. When you call a constructor, it will:

create a new object
bind this to the new object, so you can refer to this in your constructor code
run the code in the constructor
return the new object.
Constructors, by convention, start with a capital letter and are named for the type of object they create. So we could rewrite our example like this:
*/

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

/*
To call Person() as a constructor, we use new:
*/

const salva = new Person("Salva");
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = new Person("Frankie");
frankie.introduceSelf();
// "Hi! I'm Frankie."

/*
Every time we've been working through an example that uses a built-in browser API or JavaScript object, we've been using objects, because such features are built using exactly the same kind of object structures that we've been looking at here, albeit more complex ones than in our own basic custom examples.

So when you used string methods like:
*/

// myString.split(",");

/*
You were using a method available on a String object. Every time you create a string in your code, that string is automatically created as an instance of String, and therefore has several common methods and properties available on it.

When you accessed the document object model using lines like this:
*/

// const myDiv = document.createElement("div");
// const myVideo = document.querySelector("video");

/*
You were using methods available on a Document object. For each webpage loaded, an instance of Document is created, called document, which represents the entire page's structure, content, and other features such as its URL. Again, this means that it has several common methods and properties available on it.

The same is true of pretty much any other built-in object or API you've been using — Array, Math, and so on.
*/

/*
Note that built in objects and APIs don't always create object instances automatically. As an example, the Notifications API — which allows modern browsers to fire system notifications — requires you to instantiate a new object instance using the constructor for each notification you want to fire. Try entering the following into your JavaScript console:
*/

const myNotification = new Notification("Hello!");
