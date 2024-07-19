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

function modifyNumber(number, digit) {
  if (number.includes(".") && digit === ".") {
    return number;
  } else {
    return number + digit;
  }
}

function onNumberButtonClick(number) {
  if (firstNumber === "error") {
    clear();
  }
  if (operator === "") {
    firstNumber = modifyNumber(firstNumber, number);
  } else {
    secondNumber = modifyNumber(secondNumber, number);
  }
}

function onOperatorButtonClick(op) {
  if (firstNumber === "error") {
    clear();
  }
  if (operator !== "" && secondNumber !== "") {
    firstNumber = operate(Number(firstNumber), Number(secondNumber), operator).toString();
    secondNumber = "";
  }
  operator = op;
}

function updateDisplay() {
  if (secondNumber !== "") {
    display.textContent = secondNumber;
  } else if (firstNumber !== "") {
    display.textContent = firstNumber;
  } else {
    display.textContent = "0";
  }
}

function clear() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

function backSpace() {
  if (secondNumber !== "") {
    secondNumber = secondNumber.slice(0, -1);
  } else {
    firstNumber = firstNumber.slice(0, -1);
    operator = "";
  }
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
      } else if (button.textContent === "<") {
        backSpace();
      } else {
        onOperatorButtonClick(button.textContent);
      }
      updateDisplay();
    })
  })
}

function setUpKeyboardButtons() {
  const validNumberButtons = [".", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const validOperatorButtons = ["Escape", "Backspace", "Enter", "=", "/", "*", "-", "+"];
  
  window.addEventListener("keydown", (event) => {
    if (validNumberButtons.includes(event.key)) {
      onNumberButtonClick(event.key);
      updateDisplay();
    }
    if (validOperatorButtons.includes(event.key)) {
      if (event.key === "Escape") {
        clear();
      } else if (event.key === "Backspace") {
        backSpace();
      } else {
        onOperatorButtonClick(event.key);
      }
      updateDisplay();
    }
  })
}

setUpOperatorButtons();
setUpNumberButtons();
setUpKeyboardButtons();
clear();
updateDisplay();