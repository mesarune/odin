"use strict";

// JavaScript string length

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

// Extracting string characters

text = "HELLO WORLD";
let char = text.charAt(0); // "H"
char = text.charAt(1); // "E"
char = text.charAt(11); // ""

const name = "W3Schools";
let letter = name.at(2);

text = "HELLO WORLD";
char = text[0];

// Extracting string parts

text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
part = text.slice(-12); // If a parameter is negative, the position is counted from the end of the string
part = text.slice(-12, -6); // "Banana"

part = text.substring(7, 13);
part = text.substring(-3, 5); // start and end values less than 0 are treated as 0 in substring()
part = text.substring(15) // If you omit the second parameter, substring() will slice out the rest of the string

part = text.substr(7, 6); // the second parameter specifies the length of the extracted part
part = text.substr(7); // If you omit the second parameter, substr() will slice out the rest of the string
part = text.substr(-4); // If the first parameter is negative, the position counts from the end of the string

// Converting to upper and lower case

let text1 = "Hello World!";
let text2 = text1.toUpperCase();

text2 = text1.toLowerCase();

// Concatenation

text1 = "Hello";
text2 = "World";
let text3 = text1.concat(" ", text2);
// The concat() method can be used instead of the plus operator. These two lines do the same
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");

// Trim

text1 = "      Hello World!      ";
text2 = text1.trim();
// "Hello World!"
text2 = text1.trimStart();
// "Hello World!      "
text2 = text1.trimEnd();
// "      Hello World!"

// Padding

text = "5";
// Pad a string with "0" until it reaches the length 4
let padded = text.padStart(4,"0");
// "0005"
padded = text.padStart(4,"x");
// "xxx5"
padded = text.padStart(4," ");
// "   5"

/* The padStart() method is a string method.

To pad a number, convert the number to a string first.

See the example below. */

let numb = 5;
// padded = numb.padStart(4,"0");
// "Uncaught TypeError: numb.padStart is not a function"

text = numb.toString();
padded = text.padStart(4,"0");
// "0005"

padded = text.padEnd(4,"0");
// "5000"
padded = text.padEnd(4,"x");
// "5xxx"
padded = text.padEnd(4," ");
// "5   "

// The padEnd() is a string method too
numb = 5;
text = numb.toString();
padded = text.padEnd(4,"0");
// "5000"

// padStart() and padEnd() is not supported in Internet Explorer

// Repeat

text = "Hello world!";
let result = text.repeat(2);
result = text.repeat(4);

// repeat() method is not supported in Internet Explorer

// Replacing string content

text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work
text = "Please visit Microsoft!";
newText = text.replace("MICROSOFT", "W3Schools");
// "Please visit Microsoft!"

// To replace case insensitive, use a regular expression with an /i flag (insensitive)
newText = text.replace(/MICROSOFT/i, "W3Schools");
// "Please visit W3Schools!"

// By default, the replace() method replaces only the first match
text = "Please visit Microsoft and Microsoft!";
newText = text.replace("Microsoft", "W3Schools");
// "please visit W3Schools and Microsoft!"

// To replace all matches, use a regular expression with a /g flag (global match)
newText = text.replace(/Microsoft/g, "W3Schools");
// "Please visit W3Schools and W3Schools!"

text = "I love cats. Cats are very easy to love. Cats are very popular.";
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
/* The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown */
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");

// Converting a string to an array

text.split(","); // Split on commas
text.split(" "); // Split on spaces
text.split("|"); // Split on pipe
// If the separator is omitted, the returned array will contain the whole string in index [0]

text.split("")
// If the separator is "", the returned array will be an array of single characters

console.log(text);
