// DOM Mapping
let gridContainer = document.querySelector("#grid");

// let count = prompt("How many? ");

document.body.onload = gridMaker;

// Creates the grid with 16 rows
function gridMaker() {
  for (let x = 0; x < 16; x++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < 16; i++) {
      let block = document.createElement("div");
      block.classList.add("block");
      row.appendChild(block);
    }
    gridContainer.appendChild(row);
  }
}

let blockElement = document.querySelector(".block");

blockElement.addEventListener("click", () => {
  blockElement.style.background = "black";
});
