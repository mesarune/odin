"use strict";

// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

// Statement 3: The two passwords match
const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi';

//test
let weightComparison = eleWeight < mouseWeight;
let heightComparison = ostrichHeight > duckHeight;
let pwdMatch = pwd1 == pwd2;

console.log(pwdMatch);
