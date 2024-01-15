"use strict";

/* We know many comparison operators from maths.

In JavaScript they are written like this:

Greater/less than: a > b, a < b.
Greater/less than or equals: a >= b, a <= b.
Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b. */

/* All comparison operators return a boolean value:

true – means “yes”, “correct” or “the truth”.
false – means “no”, “wrong” or “not the truth”. */

let result = 5 > 4; 
result = 5 < 4;
result = 5 == 4;
result = 5 != 4;
// console.log(typeof(result)); // "boolean"

/* To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order. */

result = 'Z' > 'A'; // true
result = 'Glow' > 'Glee'; // true
result = 'Bee' > 'Be'; // true

/* The algorithm to compare two strings is simple:

Compare the first character of both strings.
If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
Repeat until the end of either string.
If both strings end at the same length, then they are equal. Otherwise, the longer string is greater. */

/* The comparison algorithm given above is roughly equivalent to the one used in dictionaries or phone books, but it’s not exactly the same.

For instance, case matters. A capital letter "A" is not equal to the lowercase "a". Which one is greater? The lowercase "a". Why? Because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode). We’ll get back to specific details and consequences of this in the chapter Strings. */

/* When comparing values of different types, JavaScript converts the values to numbers. */

result = '2' > 1; // true, string '2' becomes a number 2
result = '01' == 1; // true, string '01' becomes a number 1

/* For boolean values, true becomes 1 and false becomes 0. */

result = true == 1; // true
result = false == 0; // true

/* A regular equality check == has a problem. It cannot differentiate 0 from false: */

result = 0 == false; // true

/* The same thing happens with an empty string: */

result = '' == false; // true

/* This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

What to do if we’d like to differentiate 0 from false? */

/* A strict equality operator === checks the equality without type conversion. */

result = 0 === false; // false, because the types are different

/* There is also a “strict non-equality” operator !== analogous to !=. */

result = 0 !== false; // true, because the types are different

/* There’s a non-intuitive behavior when null or undefined are compared to other values. */

result = null === undefined; // false, because each of them is a different type

result = null == undefined; // true, There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value

/* For maths and other comparisons < > <= >=
null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN. */

result = null > 0; // false
result = null == 0; // false
result = null >= 0; // true

/* Mathematically, that’s strange. The last result states that "null is greater than or equal to zero", so in one of the comparisons above it must be true, but they are both false.

The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false. */

/* The value undefined shouldn’t be compared to other values: */

result = undefined > 0; // false (1)
result = undefined < 0; // false (2)
result = undefined == 0; // false (3)

/* We get these results because:

Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
The equality check (3) returns false because undefined only equals null, undefined, and no other value. */

/* Why did we go over these examples? Should we remember these peculiarities all the time? Well, not really. Actually, these tricky things will gradually become familiar over time, but there’s a solid way to avoid problems with them:

Treat any comparison with undefined/null except the strict equality === with exceptional care.
Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately. */

/* Summary
Comparison operators return a boolean value.
Strings are compared letter-by-letter in the “dictionary” order.
When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
The values null and undefined equal == each other and do not equal any other value.
Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea. */

/* Tasks */

5 > 4; // true
"apple" > "pineapple"; // false
"2" > "12"; // false x -> true o, These are strings and dictionary comparison, first char "2" is greater than the first char "1"
undefined == null; // true
undefined === null; // false
null == "\n0\n"; // false
null === +"\n0\n"; // false

console.log(result);
