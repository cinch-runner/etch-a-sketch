// DOM Mapping
let gridContainer = document.querySelector("#grid");

// let count = prompt("How many? ");

document.body.onload = gridMaker;

// Returns a row of 16 blocks
function gridMaker() {
  for (let x = 0; x < 16; x++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < 16; i++) {
      let block = document.createElement("div");
      block.classList.add("block");
      block.textContent = "b";
      row.appendChild(block);
    }
    gridContainer.appendChild(row);
  }
}

// Creates the grid with 16 rows