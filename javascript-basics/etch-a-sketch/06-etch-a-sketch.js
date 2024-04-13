"use strict";

const grid = document.querySelector("#grid");
const resetBtn = document.querySelector("#resetBtn");
const randomBtn = document.querySelector("#randomBtn");
const resizeBtn = document.querySelector("#resizeBtn");

let lastColor = [0, 0, 0,];

createGrid(16);

resetBtn.addEventListener("click", () => {
  grid.innerHTML = "";
  createGrid(16);
})

randomBtn.addEventListener("click", () => {
  const col = document.querySelectorAll(".col");
  col.forEach(element => element.addEventListener("mouseover", function() {
    element.style.backgroundColor = randomColor();
  }));
})

resizeBtn.addEventListener("click", () => {
  const count = prompt("Number of squares per side for the new grid (16 - 100)", 16);
  
  if (isNaN(count)) {
    alert("Not a number");
  } else if (count < 16 || count > 100) {
    alert("The number should 16 - 100");
  } else {
    grid.innerHTML = "";
    createGrid(count);
  };
})

function createGrid(count) {
  const size = 360 / count;
  
  for (let i = 0; i < count; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);
    
    for (let j = 0; j < count; j++) {
      const col = document.createElement("div");
      col.style.width = size + "px";
      col.style.height = size + "px";
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