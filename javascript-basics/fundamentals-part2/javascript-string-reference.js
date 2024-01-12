"use strict";

let carName1 = "Volvo XC60";
let carName2 = 'Volvo XC60';

// JavaScript string methods

// charAt()
let text = "HELLO WORLD";
let letter = text.charAt(0);

// charCodeAt()
let code = text.charCodeAt(0);
// The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string
// Unicode は、文字コードの業界標準規格。

// concat()
let text1 = "Hello";
let text2 = "world!";
let result = text1.concat(" ", text2); // "Hello world!"

// constractor
let message = "Hello World!";
text = message.constructor; // "function String() { [native code] }"
// The constructor property returns the function that created the String prototype

// endWith()
text = "Hello world"
result = text.endsWith("world"); // "true"
// The endsWith() method returns true if a string ends with a specified string

// fromCharCode()
let char = String.fromCharCode(65); // "A"
// The String.fromCharCode() method converts Unicode values to characters
// The syntax is always String.fromCharCode()

// includes()
text = "Hello world, welcome to the universe.";
result = text.includes("world"); // "true"
// he includes() method returns true if a string contains a specified string

// indexOf()
text = "Hello world, welcome to the universe.";
result = text.indexOf("welcome"); // "13"
// The indexOf() method returns the position of the first occurrence of a value in a string
result = text.indexOf("Welcome"); // "-1"
// The indexOf() method returns -1 if the value is not found
result = text.indexOf("e", 5); // "14"
// Find the first occurrence of "e", starting at position 5

// lastIndexOf()
text = "Hello planet earth, you are a great planet.";
result = text.lastIndexOf("planet"); // "36"
// The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string

// length
text = "Hello World!";
let length = text.length; // "12"
// The length property returns the length of a string

// localeCompare()
text1 = "ab";
text2 = "cd";
result = text1.localeCompare(text2); // "-1"
text1 = "cd";
text2 = "ab";
result = text1.localeCompare(text2); // "1"
// The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal)

// match()
text = "The rain in SPAIN stays mainly in the plain";
result = text.match("ain"); // [object Array] (1) ["ain"]
result = text.match(/ain/g); // [object Array] (3) ["ain","ain","ain"]
result = text.match(/ain/gi); // [object Array] (4) ["ain","AIN","ain","ain"]
// The match() method returns an array with the matches
// The match() method returns null if no match is found

// prototype
function employee(name, jobtitle, born) {
  this.name = name;
  this.jobtitle = jobtitle;
  this.born = born;
}
employee.prototype.salary = 2000;

const fred = new employee("Fred Flintstone", "Caveman", 1970);
// The prototype property allows you to add new properties and methods to strings

// repeat()
text = "Hello world!";
result = text.repeat(2); // "Hello world!Hello world!"

// replace()
text = "Visit Microsoft!";
result = text.replace("Microsoft", "W3Schools"); // "Visit W3Schools!"
text = "Mr Blue has a blue house and a blue car";
result = text.replace(/blue/g, "red"); // "Mr Blue has a red house and a red car"
result = text.replace(/blue/gi, "red"); // "Mr red has a red house and a red car"

// replaceAll()
text = "I love cats. Cats are very easy to love. Cats are very popular.";
result = text.replaceAll("Cats","Dogs"); // "I love cats. Dogs are very easy to love. Dogs are very popular."

// search()
text = "Mr. Blue has a blue house";
let position = text.search("Blue"); // "4"
position = text.search("blue"); // "15"
position = text.search(/blue/i); // "4"
// The search() method returns the index (position) of the first match
// The search() method returns -1 if no match is found

// slice()
text = "Hello world!";
result = text.slice(0, 5); // "Hello"
result = text.slice(3); // "lo world!"

// split()
text = "How are you doing today?";
let myArray = text.split(" ");
let word = myArray[1]; // "are"

// startsWith()
text = "Hello world, welcome to the universe.";
// Start at position 0 (true):
result = text.startsWith("Hello"); // "true"
// Start at position 1 (false):
result = text.startsWith("Hello", 1); // "false"

// substr()
text = "Hello world!";
result = text.substr(1, 4); // "ello"
result = text.substr(2); // "llo world!"

// substring()
text = "Hello world!";
result = text.substring(1, 4); // "ell"
result = text.substring(2); // "llo world!"

// toLocaleLowerCase()
text = "Hello World!";
result = text.toLocaleLowerCase(); // "hello world!"
// The toLocaleLowerCase() method converts a string to lowercase letters, using current locale

// toLocaleUpperCase()
text = "Hello World!";
result = text.toLocaleUpperCase(); // "HELLO WORLD!"
// The toLocaleUpperCase() method converts a string to uppercase letters, using current locale

// toLowerCase()
text = "Hello World!";
result = text.toLowerCase();

// toString()
text = "Hello World!";
result = text.toString();
// Same as:
result = text;
// The toString() method returns a string as a string

// toUpperCase()
text = "Hello World!";
result = text.toUpperCase();

// trim()
text = "       Hello World!        ";
result = text.trim();

// trimEnd()
text = "       Hello World!        ";
result = text.trimEnd();

// trimStart()
text = "       Hello World!        ";
result = text.trimStart();

// valueOf()
text = "Hello World!";
result = text.valueOf();
// Same as:
result = text;
// The valueOf() method returns the primitive value of a string

console.log(result);
