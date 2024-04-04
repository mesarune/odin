"use strict";

const container = document.querySelector(".container");

function createGrid() {
  for (let i = 0; i <= 256; i++) {
    document.createElement("div");
  }
}

createGrid();
const div = document.querySelector("div");
div.setAttribute("class", "grid");
container.appendChild(div);