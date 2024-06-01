"use strict";

/*
In this task you are provided with an object literal, and your tasks are to

1.Store the value of the name property inside the catName variable, using bracket notation.
2.Run the greeting() method using dot notation (it will log the greeting to the browser's console).
3.Update the color property value to black.

Try updating the live code below to recreate the finished example:
*/

// const cat = {
//   name : 'Bertie',
//   breed : 'Cymric',
//   color : 'white',
//   greeting: function() {
//     console.log('Meow!');
//   }
// }

// Put your code here
// const catName = cat['name'];
// cat.greeting();
// cat.color = 'black';

// console.log(catName);
// console.log(cat.color);

// Don't edit the code below here

// let para1 = document.createElement('p');
// let para2 = document.createElement('p');

// para1.textContent = `The cat's name is ${ catName }.`;
// para2.textContent = `The cat's color is ${ cat.color }.`;

// section.appendChild(para1);
// section.appendChild(para2);

/*
In our next task, we want you to have a go at creating your own object literal to represent one of your favorite bands. The required properties are:

1.name: A string representing the band name.
2.nationality: A string representing the country the band comes from.
3.genre: What type of music the band plays.
4.members: A number representing the number of members the band has.
5.formed: A number representing the year the band formed.
6.split: A number representing the year the band split up, or false if they are still together.
7.albums: An array representing the albums released by the band. Each array item should be an object containing the following members:
 a.name: A string representing the name of the album.
 b.released: A number representing the year the album was released.
Include at least two albums in the albums array.

Once you've done this, you should then write a string to the variable bandInfo, which will contain a small biography detailing their name, nationality, years active, and style, and the title and release date of their first album.

Try updating the live code below to recreate the finished example:
*/

let bandInfo;

// Put your code here
const band = {
  name: 'AFX',
  nationality: 'England',
  genre: 'Electronica',
  members: '1',
  formed: '1991',
  split: false,
  albums: [{
    name: 'Analogue Bubblebath',
    released: 'September 1991',
  }, {
    nema: 'Hangable Auto Bulb',
    released: 'October 1995',
  }],
}

console.log(band.albums[0].released);

bandInfo = 'Richard David James (born 18 August 1971), known professionally as Aphex Twin,is a British musician, composer and DJ.He is known for his idiosyncratic work in electronic styles such as techno, ambient.James was raised in Cornwall and began DJing at free parties and clubs in the area and around the South West in the late 1980s.His debut EP Analogue Bubblebath, released in 1991 on Mighty Force Records.'

console.log(bandInfo);

// Don't edit the code below here

// let para1 = document.createElement('p');
// para1.textContent = bandInfo;
// section.appendChild(para1);

/*
In this task, we want you to return to the cat object literal from Task 1. We want you to rewrite the greeting() method so that it logs "Hello, said Bertie the Cymric." to the browser's console, but in a way that will work across any cat object of the same structure, regardless of its name or breed.

When you are done, write your own object called cat2, which has the same structure, exactly the same greeting() method, but a different name, breed, and color.

Call both greeting() methods to check that they log appropriate greetings to the console.

Try updating the live code below to recreate the finished example:
*/

const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
}

const cat2 = {
  name: 'Kuro',
  breed: 'unknown',
  color: 'black',
  greeting: function() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
}

cat.greeting();
cat2.greeting();

/*
In the code you wrote for Task 3, the greeting() method is defined twice, once for each cat. This isn't ideal (specifically, it violates a principle in programming sometimes called DRY or "Don't Repeat Yourself").

In this task we want you to improve the code so greeting() is only defined once, and every cat instance gets its own greeting() method. Hint: you should use a JavaScript constructor to create cat instances.

Try updating the live code below to recreate the finished example:
*/

function Cat(name, breed, color){
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.greeting = function() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  };
}

const cat3 = new Cat('Siro', 'japanese bobtail', 'white');
const cat4 = new Cat('Kicia', 'ragdoll', 'mike');

cat3.greeting();
cat4.greeting();
