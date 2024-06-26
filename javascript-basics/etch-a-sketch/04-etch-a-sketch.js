"use strict";

const container = document.querySelector(".container");
const resetBtn = document.querySelector("#resetBtn");
const randomBtn = document.querySelector("#randomBtn");

let lastColor = [0, 0, 0,];

createGrid();

resetBtn.addEventListener("click", () => {
  container.innerHTML = "";
  createGrid();
})

randomBtn.addEventListener("click", () => {
  const grid = document.querySelectorAll(".grid");
  grid.forEach(element => element.addEventListener("mouseover", function() {
    element.style.backgroundColor = randomColor();
  }));
})

function createGrid() {
  for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    
    for (let j = 0; j < 16; j++) {
      const col = document.createElement("div");
      col.classList.add("grid");
      row.appendChild(col);
      
      col.addEventListener("mouseover", function() {
        col.style.backgroundColor = "black";
      });
    }
  }
}

function randomHex() {
  let number = Math.floor(Math.random() * 256);
  return number.toString(16);
}

function randomColor() {
  return "#" + randomHex() + randomHex() + randomHex();
}

function gradientColor(lastColor) {
  lastColor[0] = (lastColor[0] + Math.floor((Math.random() * 5))) % 256;
  lastColor[1] = (lastColor[1] + Math.floor((Math.random() * 5))) % 256;
  lastColor[2] = (lastColor[2] + Math.floor((Math.random() * 5))) % 256;
  return "rgb(" + lastColor[0] + "," + lastColor[1] + "," + lastColor[2] + ")";
}
