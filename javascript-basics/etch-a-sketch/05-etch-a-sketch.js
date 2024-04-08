"use strict";

const grid = document.querySelector("#grid");
const resetBtn = document.querySelector("#resetBtn");
const randomBtn = document.querySelector("#randomBtn");
const resizeBtn = document.querySelector("#resizeBtn");

let lastColor = [0, 0, 0,];

createGrid();

resetBtn.addEventListener("click", () => {
  grid.innerHTML = "";
  createGrid();
})

randomBtn.addEventListener("click", () => {
  const col = document.querySelectorAll(".col");
  col.forEach(element => element.addEventListener("mouseover", function() {
    element.style.backgroundColor = randomColor();
  }));
})

function createGrid() {
  for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);
    
    for (let j = 0; j < 16; j++) {
      const col = document.createElement("div");
      col.classList.add("col");
      row.appendChild(col);
      
      col.addEventListener("mouseover", function() {
        col.style.backgroundColor = "black";
      });
    }
  }
}

function randomNum() {
  let number = Math.floor(Math.random() * 256);
  return number.toString();
}

function randomColor() {
  return "rgb(" + randomNum() + "," + randomNum() + "," + randomNum() + ")";
}

function gradientColor(lastColor) {
  lastColor[0] = (lastColor[0] + Math.floor((Math.random() * 5))) % 256;
  lastColor[1] = (lastColor[1] + Math.floor((Math.random() * 5))) % 256;
  lastColor[2] = (lastColor[2] + Math.floor((Math.random() * 5))) % 256;
  return "rgb(" + lastColor[0] + "," + lastColor[1] + "," + lastColor[2] + ")";
}
