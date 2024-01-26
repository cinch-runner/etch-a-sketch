// Disable scroll for mobile
function disableMobileScroll() {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    document.body.classList.add("no-scroll");
  }
}

// DOM Mapping
let gridContainer = document.querySelector("#grid");
let gridSizeSlider = document.querySelector("#grid-size-slider");

gridSizeSlider.addEventListener("input", () => {
  gridMaker(gridSizeSlider.value);
});

// Creates the grid with default 16 rows
function gridMaker(gridSize) {
  // clear existing grid
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  // Calculate block size
  let gridWidth = gridContainer.clientWidth;
  let blockSize = gridWidth / gridSize;

  // create new grid based on gridSize
  for (let x = 0; x < gridSize; x++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < gridSize; i++) {
      let block = document.createElement("div");
      block.classList.add("block");
      block.style.width = `${blockSize}px`;
      block.style.height = `${blockSize}px`;

      // Listen for mouse event
      block.addEventListener("mouseenter", changeBlock);

      // Listen for touch events
      block.addEventListener("touchstart", changeBlock, { passive: false });
      block.addEventListener("touchmove", handleTouch, { passive: false });

      row.appendChild(block);
    }
    gridContainer.appendChild(row);
  }
}

function changeBlock(event) {
  event.target.style.backgroundColor = "white";
  event.target.style.border = "none";
}

function handleTouch(event) {
  event.preventDefault();
  let touch = event.touches[0];
  for (let i = 0; i < event.touches.length; i++) {
    let touch = event.touches[i];
    let touchedElement = document.elementFromPoint(
      touch.clientX,
      touch.clientY
    );

    if (touchedElement && touchedElement.classList.contains("block")) {
      touchedElement.style.backgroundColor = "white";
      touchedElement.style.border = "none";
    }
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

window.addEventListener("resize", () => {
  gridMaker(gridSizeSlider.value);
});

// load grid on page load
document.body.onload = gridMaker(16);
gridSizeSlider.addEventListener("input", () => {
  gridMaker(gridSizeSlider.value);
});
