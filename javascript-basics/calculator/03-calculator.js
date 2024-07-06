"use strict";

let firstNumber = "";
let secondNumber = "";
let operator = "";
let display = document.querySelector("#display");
let numberButtons = document.querySelectorAll(".numberButtons");
let operatorButtons = document.querySelectorAll(".operatorButtons");

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

function operate(num1, num2, op) {
  if (op === "+") {
    return add(num1, num2);
  } else if (op === "-") {
    return subtract(num1, num2);
  } else if (op === "*") {
    return multiply(num1, num2);
  } else if (op === "/") {
    if (num2 === 0) {
      return "error";
    }
    return divide(num1, num2);
  } else {
    return num1;
  }
}

function onNumberButtonClick(number) {
  if (operator === "") {
    firstNumber += number;
  } else {
    secondNumber += number;
  }
}

function onOperatorButtonClick(op) {
  if (operator === "") {
    operator = op;
  } else if (operator !== "") {
    if (secondNumber !== "") {
      firstNumber = operate(Number(firstNumber), Number(secondNumber), operator).toString();
      secondNumber = "";
      operator = op;
    } else {
      operator = op;
    }
  }
}

function updateDisplay() {
  if (secondNumber === "") {
    if (firstNumber === "") {
      display.textContent = "0"
    } else if (firstNumber === "error") {
      display.textContent = firstNumber;
      firstNumber = "";
    } else {
      display.textContent = firstNumber;
    }
  } else {
    display.textContent = secondNumber;
  }
}

function clear() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

function setUpNumberButtons() {
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      onNumberButtonClick(button.textContent);
      updateDisplay();
    })
  })
}

function setUpOperatorButtons() {
  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.textContent === "clear") {
        clear();
      } else {
        onOperatorButtonClick(button.textContent);
      }
      updateDisplay();
    })
  })
}

setUpOperatorButtons();
setUpNumberButtons();
clear();
updateDisplay();