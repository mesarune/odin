"use strict";

const container = document.querySelector(".container");

function createGrid() {
  for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    container.appendChild(row);
    
    for (let j = 0; j < 16; j++) {
      const col = document.createElement("div");
      col.classList.add("grid");
      row.appendChild(col);
    }
  }
}

createGrid();