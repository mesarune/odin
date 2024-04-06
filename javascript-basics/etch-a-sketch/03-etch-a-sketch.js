"use strict";

const container = document.querySelector(".container");
const resetBtn = document.querySelector("#resetBtn");

createGrid();

resetBtn.addEventListener("click", () => {
  container.innerHTML = "";
  createGrid();
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
