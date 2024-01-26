// DOM Mapping
let gridContainer = document.querySelector("#grid");
let gridSizeSlider = document.querySelector("#grid-size-slider");

// load grid on page load
document.body.onload = gridMaker(16);

gridSizeSlider.addEventListener("input", () => {
  gridMaker(gridSizeSlider.value);
});

// Creates the grid with 16 rows
function gridMaker(gridSize) {
  // clear existing grid
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  // create new grid based on slider value
  for (let x = 0; x < gridSize; x++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < gridSize; i++) {
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

  gridMaker(16);
});
