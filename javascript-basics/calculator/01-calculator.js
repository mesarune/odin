"use strict";

let firstNumber;
let secondNumber;
let operator;

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, opt) {
  if (opt === "+") {
    return add(num1, num2);
  } else if (opt === "-") {
    return subtract(num1, num2);
  } else if (opt === "*") {
    return multiply(num1, num2);
  } else if (opt === "/") {
    return divide(num1, num2);
  } else {
    return num1;
  }
}

function numberClick(button) {
  console.log(button.textContent);
}

let numberButtons = document.querySelector(".numberButtons");
let numberButtonList = numberButtons.querySelectorAll("button");

for (let button of numberButtonList) {
  button.onclick = "numberClick(this);";
}