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
      // add event listener here
      block.addEventListener("click", function () {
        block.style.backgroundColor = "white";
        block.style.border = "none";
      });
      row.appendChild(block);
    }
    gridContainer.appendChild(row);
  }
}

// reset button -> resets grid

const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  gridMaker();
});
