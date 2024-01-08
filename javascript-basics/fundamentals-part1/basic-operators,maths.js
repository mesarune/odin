"use strict";

let num1 = ( 5 % 2 ); // 1, the remainder of 5 divided by 2
num1 = ( 8 % 3 ); // 2, the remainder of 8 divided by 3
num1 = ( 8 % 4 ); // 0, the remainder of 8 divided by 4

num1 = ( 2 ** 2 ); // 2² = 4
num1 = ( 2 ** 3 ); // 2³ = 8
num1 = ( 2 ** 4 ); // 2⁴ = 16

num1 = ( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
num1 = ( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

let s = "my" + "string";
s = ( '1' + 2 ); // "12"
s = ( 2 + '1' ); // "21"
s = (2 + 2 + '1' ); // "41" and not "221"
s = ('1' + 2 + 2); // "122" and not "14"

num1 = true + false
num1 = "4px" - 2
num1 = "  -9  " + 5
num1 = "  -9  " - 5
num1 = null + 1
num1 = undefined + 1
num1 = " \t \n" - 2

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
num1 = (a + b); // output is "12" (for default prompt values)
num1 = (Number(a) + Number(b)); // "3"

console.log(num1);
