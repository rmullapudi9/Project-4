// SLIDER 6 COLOR

// Function to generate a random HSL color
function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 100);
  const lightness = Math.floor(Math.random() * 100);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Function to get a random set of divs
function getRandomDivs() {
  const allDivs = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
    "item8",
    "item9",
    "item10",
  ];
  const selectedDivs = allDivs
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.floor(Math.random() * allDivs.length));
  return selectedDivs;
}

// Get the slider element
var slider = document.getElementById("slider6");

// Event listener for when the slider value changes
slider.addEventListener("input", function () {
  // Generate a random color
  var color = getRandomColor();

  // Get a random set of divs to change color
  var divsToChange = getRandomDivs();

  // Apply the new background color to the randomly selected divs
  divsToChange.forEach(function (divId) {
    var div = document.getElementById(divId);
    if (div) {
      div.style.backgroundColor = color;
    }
  });
});

// SLIDER 10 BLUR

// Get the slider element
var slider = document.getElementById("slider10");

// Function to determine the level of blur
function sliderValueToBlur(value) {
  // Assuming the value is between 0 and 360
  // Map it to an appropriate blur range (e.g., 0px to 20px)
  var maxBlur = 20; // Maximum blur in pixels
  return (value / 360) * maxBlur + "px"; // Calculate blur value
}

// Event listener for when the slider value changes
slider.addEventListener("input", function () {
  // Get the new blur value based on the slider value
  var blurAmount = sliderValueToBlur(this.value);

  // Apply the blur effect to the whole page
  document.documentElement.style.filter = `blur(${blurAmount})`;
});

// Get the slider element
var slider = document.getElementById("slider8");

// Event listener for when the slider value changes
slider.addEventListener("input", function () {
  // Check if the slider value is at the maximum
  if (this.value == this.max) {
    // Trigger the print command
    window.print();
    // Reset the slider to its minimum value after printing
    this.value = this.min;
  }
});

// SLIDER 3 BODY TEXT

// Get the slider and textbox elements
var slider = document.getElementById("slider3");
var textBox = document.getElementById("textBox");

// Function to convert slider value to bottom position
function calculateBottomPosition(value, maxValue) {
  var screenHeight = window.innerHeight;
  var percentage = value / maxValue;
  // Calculate the bottom position based on percentage
  // When the slider is at max, the textbox should be in the middle of the screen
  var bottomPosition = (screenHeight / 2) * (1 - percentage);
  return bottomPosition;
}

// Function to handle the printability and visibility of the textbox
function updateTextBoxVisibilityAndPrintability(value, maxValue) {
  var bottomPos = calculateBottomPosition(value, maxValue);
  textBox.style.bottom = bottomPos + "px";

  if (value == maxValue) {
    // When the slider is at the end, make the textbox printable
    textBox.classList.add("printable");
  } else {
    // When the slider is not at the end, make the textbox non-printable
    textBox.classList.remove("printable");
    // If the slider is at the start, move the textbox off the screen
    if (value == 0) {
      // Reset position to off the bottom of the page
      textBox.style.bottom = "-100%";
    }
  }
}

// Event listener for when the slider value changes
slider.addEventListener("input", function () {
  updateTextBoxVisibilityAndPrintability(this.value, this.max);
});

//SLIDER 7 BORDER RADIUS

// Get the slider element
var slider = document.getElementById("slider7");

// Function to get a random set of divs
function getRandomDivIds() {
  var allDivIds = [
    "wrap1",
    "wrap2",
    "wrap3",
    "wrap4",
    "wrap5",
    "wrap6",
    "wrap7",
    "wrap8",
    "wrap9",
    "wrap10",
  ];
  var shuffledDivIds = allDivIds.sort(() => 0.5 - Math.random());
  var selectedDivIds = shuffledDivIds.slice(
    0,
    Math.floor(Math.random() * allDivIds.length)
  );
  return selectedDivIds;
}

// Function to update the border-radius of divs
function updateBorderRadius(value) {
  var maxRadius = 50; // Maximum border-radius in pixels
  var radius = (value / 20) * maxRadius;

  // Get a random set of divs each time
  var divIdsToUpdate = getRandomDivIds();

  // Update the border-radius of the selected divs
  divIdsToUpdate.forEach(function (divId) {
    var div = document.getElementById(divId);
    if (div) {
      div.style.borderRadius = radius + "px";
    }
  });
}

// Event listener for when the slider value changes
slider.addEventListener("input", function () {
  updateBorderRadius(this.value);
});

// SLIDER 5 EMOJIS

// Get the slider element
var slider = document.getElementById("slider5");
var emojisContainer = document.createElement("div");
emojisContainer.style.position = "fixed";
emojisContainer.style.top = "0";
emojisContainer.style.left = "0";
emojisContainer.style.width = "100%";
emojisContainer.style.height = "100%";
emojisContainer.style.pointerEvents = "none";
document.body.appendChild(emojisContainer);

// Emoji style
var emojiSize = "100px";
var emojiText = "🛝";

// Function to populate the page with random emojis
function populatePageWithRandomEmojis() {
  emojisContainer.innerHTML = "";
  var numEmojis = Math.floor(Math.random() * 10); // Random number of emojis (0-100)
  for (var i = 0; i < numEmojis; i++) {
    var span = document.createElement("span");
    span.style.position = "absolute";
    span.style.left = Math.random() * 100 + "vw";
    span.style.top = Math.random() * 100 + "vh";
    span.style.fontSize = emojiSize;
    span.textContent = emojiText;
    emojisContainer.appendChild(span);
  }
}

// Initialize the page with random emojis when slider thumb is moved
slider.addEventListener("input", function () {
  populatePageWithRandomEmojis();

  // Check if the slider is back to the beginning (value is '0')
  if (this.value === "0") {
    emojisContainer.innerHTML = ""; // Clear emojis
  }
});

// SLIDER 9 SIZE

document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("slider9");
  var itemDivs = document.querySelectorAll(".grid-container > div");
  var originalSizes = {};

  // Store the original sizes of the item divs
  itemDivs.forEach(function (div) {
    var wrapDiv = div.querySelector("div");
    originalSizes[div.id] = {
      width: div.offsetWidth,
      height: div.offsetHeight,
      wrapWidth: wrapDiv ? wrapDiv.offsetWidth : 0,
      wrapHeight: wrapDiv ? wrapDiv.offsetHeight : 0,
    };
  });

  slider.addEventListener("input", function () {
    var sliderValue = parseInt(this.value, 10);
    var scaleFactor = sliderValue / 100;

    if (sliderValue === 0) {
      // Reset to original sizes and positions if the slider is at the start
      itemDivs.forEach(function (div) {
        div.style.width = "";
        div.style.height = "";
        var wrapDiv = div.querySelector("div");
        if (wrapDiv) {
          wrapDiv.style.width = "";
          wrapDiv.style.height = "";
        }
      });
    } else {
      // Adjust sizes randomly based on the slider value
      itemDivs.forEach(function (div) {
        var randomFactor = Math.random() * scaleFactor + 0.5; // Random factor between 0.5 and 1.5

        // Calculate new sizes for the item div
        var newWidth = originalSizes[div.id].width * randomFactor;
        var newHeight = originalSizes[div.id].height * randomFactor;

        // Set new sizes for the item div
        div.style.width = newWidth + "px";
        div.style.height = newHeight + "px";

        // Set new sizes for the child wrapper div proportionally
        var wrapDiv = div.querySelector("div");
        if (wrapDiv) {
          var wrapWidthScale = newWidth / originalSizes[div.id].width;
          var wrapHeightScale = newHeight / originalSizes[div.id].height;

          wrapDiv.style.width =
            originalSizes[div.id].wrapWidth * wrapWidthScale + "px";
          wrapDiv.style.height =
            originalSizes[div.id].wrapHeight * wrapHeightScale + "px";
        }
      });
    }
  });
});

// SLIDER 4 GRAYSCALE

document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("slider4");

  slider.addEventListener("input", function () {
    var sliderValue = this.value;
    // Calculate the grayscale percentage
    var grayscaleValue = (sliderValue / this.max) * 100;
    // Apply the grayscale filter to the body of the webpage
    document.body.style.filter = `grayscale(${grayscaleValue}%)`;
  });
});

// SLIDER 5 TITLE

document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("slider1");
  var textBox = document.getElementById("titleTextBox");

  slider.addEventListener("input", function () {
    var sliderValue = this.value;
    var maxSliderValue = this.max;

    // Calculate the percentage of the slider's position
    var percentage = sliderValue / maxSliderValue;

    // Calculate the position of the text box based on the slider's percentage
    // The starting position of the text box is offscreen at the top (-100% of its height)
    // The ending position is at the top (0%)
    var topPosition =
      percentage === 1
        ? "0%"
        : percentage === 0
        ? "-100%"
        : `${-percentage * 100}%`;

    // Set the style for the text box to move it into position
    textBox.style.top = topPosition;
  });
});

// SLIDER 2 LAYOUT

document.addEventListener("DOMContentLoaded", function () {
  // Get the original grid areas from the CSS
  const originalGridAreas = {};
  const items = Array.from(
    document.querySelectorAll('.grid-container > [id^="item"]')
  );

  // Store the original grid-areas
  items.forEach((item) => {
    originalGridAreas[item.id] = getComputedStyle(item).gridArea;
  });

  // Function to set grid areas that fit together like a puzzle
  function setPuzzleGrid(sliderValue) {
    // Calculate the number of rows and columns
    const rows = 5;
    const columns = 8;
    let areaCounter = 0;

    // Create a matrix representing the grid
    let grid = [...Array(rows)].map((e) => Array(columns).fill(0));

    // Function to check if the area is free
    function isAreaFree(row, col, height, width) {
      for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
          if (grid[row + i] === undefined || grid[row + i][col + j] !== 0)
            return false;
        }
      }
      return true;
    }

    // Function to mark the area as filled
    function fillArea(item, row, col, height, width) {
      for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
          grid[row + i][col + j] = 1;
        }
      }
      item.style.gridArea = `${row + 1} / ${
        col + 1
      } / span ${height} / span ${width}`;
    }

    // Arrange items as puzzle pieces based on the slider value
    items.forEach((item) => {
      let placed = false;
      while (!placed) {
        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < columns; col++) {
            // Randomly decide the height and width for each item
            let height = Math.floor(Math.random() * 2) + 1;
            let width = Math.floor(Math.random() * 2) + 1;
            if (isAreaFree(row, col, height, width)) {
              fillArea(item, row, col, height, width);
              placed = true;
              break;
            }
          }
          if (placed) break;
        }
      }
    });
  }

  // Event listener for the slider
  const slider = document.getElementById("slider2");
  slider.addEventListener("input", function () {
    if (this.value == 0) {
      // Restore original grid areas
      items.forEach((item) => {
        item.style.gridArea = originalGridAreas[item.id];
      });
    } else {
      // Set new grid areas
      setPuzzleGrid(this.value);
    }
  });

  // Set initial grid areas to match the original layout
  items.forEach((item) => {
    item.style.gridArea = originalGridAreas[item.id];
  });

});



    //------------------------------------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   // Get the original grid areas from the CSS
//   const originalGridAreas = {};
//   const items = Array.from(
//     document.querySelectorAll('.grid-container > [id^="item"]')
//   );

//   // Store the original grid-areas and sizes
//   items.forEach((item) => {
//     originalGridAreas[item.id] = {
//       gridArea: getComputedStyle(item).gridArea,
//       width: item.offsetWidth,
//       height: item.offsetHeight
//     };
//   });

//   // Function to set grid areas that fit together like a puzzle
//   function setPuzzleGrid(sliderValue) {
//     // Calculate the number of rows and columns
//     const rows = 5;
//     const columns = 8;

//     // Create a matrix representing the grid
//     let grid = [...Array(rows)].map((e) => Array(columns).fill(0));

//     // Calculate scaling factor based on slider value
//     const scaleFactor = 1 + sliderValue * 0.1; // Adjust the 0.1 as needed for scaling

//     // Function to check if the area is free
//     function isAreaFree(row, col, height, width) {
//       for (let i = 0; i < height; i++) {
//         for (let j = 0; j < width; j++) {
//           if (grid[row + i] === undefined || grid[row + i][col + j] !== 0)
//             return false;
//         }
//       }
//       return true;
//     }


//     // Function to mark the area as filled
//     function fillArea(item, row, col, height, width) {
//       for (let i = 0; i < height; i++) {
//         for (let j = 0; j < width; j++) {
//           grid[row + i][col + j] = 1;
//         }
//       }
//       item.style.gridArea = `${row + 1} / ${col + 1} / span ${height} / span ${width}`;

//       // Scale the child wrapper divs
//       const childWrapper = item.querySelector('.child-wrapper'); // Adjust the selector as needed
//       if (childWrapper) {
//         childWrapper.style.width = `${originalGridAreas[item.id].width * scaleFactor}px`;
//         childWrapper.style.height = `${originalGridAreas[item.id].height * scaleFactor}px`;
//       }
//     }

//     // Arrange items as puzzle pieces based on the slider value
//     items.forEach((item) => {
//       let placed = false;
//       while (!placed) {
//         for (let row = 0; row < rows; row++) {
//           for (let col = 0; col < columns; col++) {
//             // Randomly decide the height and width for each item
//             let height = Math.floor(Math.random() * 2) + 1;
//             let width = Math.floor(Math.random() * 2) + 1;
//             if (isAreaFree(row, col, height, width)) {
//               fillArea(item, row, col, height, width);
//               placed = true;
//               break;
//             }
//           }
//           if (placed) break;
//         }
//       }
//     });
//   }

//   // Event listener for the slider
//   const slider = document.getElementById("slider2");
//   slider.addEventListener("input", function () {
//     if (this.value == 0) {
//       // Restore original grid areas
//       items.forEach((item) => {
//         item.style.gridArea = originalGridAreas[item.id].gridArea;
//       });
//     } else {
//       // Set new grid areas
//       setPuzzleGrid(this.value);
//     }
//   });

//   // Set initial grid areas to match the original layout
//   items.forEach((item) => {
//     item.style.gridArea = originalGridAreas[item.id].gridArea;
//   });
// });

    //------------------------------------------------------------



//-------

// document.addEventListener('DOMContentLoaded', function() {
//   const items = document.querySelectorAll('.grid-container > [id^="item"]');
//   const originalGridAreas = Array.from(items, item => item.style.gridArea);

//   // Predefined patterns for the grid layout
//   const patterns = [
//     // Example pattern 1
//     ["1 / 1 / 3 / 2" , "1 / 2 / 3 / 9", "3 / 8 / 5 / 9", "3 / 1 / 5 / 2",  "3 / 2 / 5 / 4", "3 / 6 / 4 / 8", "4 / 6 / 5 / 8", "3 / 4 / 6 / 6", "5 / 1 / 6 / 4", "5 / 6 / 6 / 9"],
//     // Example pattern 2
//     ["1 / 1 / 3 / 6", "1 / 6 / 2 / 8", "1 / 8 / 6 / 9", "3 / 1 / 4 / 3", "3 / 3 / 4 / 6", "4 / 5 / 6 / 6", "2 / 6 / 5 / 8", "4 / 4 / 6 / 5", "4 / 1 / 6 / 4", "5 / 6 / 6 / 8"]
//     // Add more patterns as needed
//   ];

//   // Function to apply a random pattern
//   function applyRandomPattern() {
//     const patternIndex = Math.floor(Math.random() * patterns.length);
//     const pattern = patterns[patternIndex];

//     items.forEach((item, index) => {
//       item.style.gridArea = pattern[index % pattern.length];
//     });
//   }

//   // Function to restore the original layout
//   function restoreOriginalLayout() {
//     items.forEach((item, index) => {
//       item.style.gridArea = originalGridAreas[index];
//     });
//   }

//   // Event listener for the slider
//   const slider = document.getElementById('slider2');
//   slider.addEventListener('input', function() {
//     if (this.value == 0) {
//       restoreOriginalLayout();
//     } else {
//       applyRandomPattern();
//     }
//   });

//   // Set the initial layout
//   restoreOriginalLayout();
// });

// ------

// document.addEventListener('DOMContentLoaded', function() {
//   const gridContainer = document.querySelector('.grid-container');
//   const slider = document.getElementById('slider2');
//   const items = Array.from(gridContainer.querySelectorAll('[id^="item"]'));

//   // Original grid-area positions for reset
//   const originalGridAreas = items.map(item => item.style.gridArea);

//   // Predefined patterns for grid-area positions
//   const patterns = [
// // Example pattern 1
// ["1 / 1 / 3 / 2" , "1 / 2 / 3 / 9", "3 / 8 / 5 / 9", "3 / 1 / 5 / 2",  "3 / 2 / 5 / 4", "3 / 6 / 4 / 8", "4 / 6 / 5 / 8", "3 / 4 / 6 / 6", "5 / 1 / 6 / 4", "5 / 6 / 6 / 9"],
// // Example pattern 2
// ["1 / 1 / 3 / 6", "1 / 6 / 2 / 8", "1 / 8 / 6 / 9", "3 / 1 / 4 / 3", "3 / 3 / 4 / 6", "4 / 5 / 6 / 6", "2 / 6 / 5 / 8", "4 / 4 / 6 / 5", "4 / 1 / 6 / 4", "5 / 6 / 6 / 8"]
//  // Add more patterns as needed
// ];

//   slider.addEventListener('input', function() {
//     const patternIndex = this.value > 50 ? 1 : 0;

//     // Apply predefined pattern or restore original positions
//     if (this.value == 0) {
//       items.forEach((item, index) => {
//         item.style.gridArea = originalGridAreas[index];
//       });
//     } else {
//       const selectedPattern = patterns[patternIndex];
//       items.forEach((item, index) => {
//         item.style.gridArea = selectedPattern[index];
//       });
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', function() {
//   // Predefined patterns for grid-area positions
//   const patterns = [
//     ["1 / 1 / 3 / 2" , "1 / 2 / 2 / 6", "1 / 7 / 5 / 9", "3 / 1 / 6 / 2",  "2 / 2 / 6 / 3", "2 / 3 / 3 / 6",  "1 / 6 / 3 / 7", "3 / 3 / 5 / 7", "5 / 3 / 6 / 5", "5 / 5 / 6 / 9"],
//     ["1 / 1 / 4 / 2", "1 / 2 / 2 / 9", "3 / 8 / 6 / 9", "4 / 1 / 6 / 2", "3 / 2 / 6 / 4", "2 / 6 / 3 / 9", "3 / 7 / 6 / 8", "2 / 2 / 3 / 6", "3 / 4 / 5 / 7", "5 / 4 / 6 / 7"],
//     ["1 / 1 / 5 / 3", "1 / 3 / 2 / 6", "1 / 6 / 4 / 7", "3 / 3 / 6 / 5", "3 / 5 / 6 / 6", "2 / 3 / 3 / 6", "1 / 7 / 4 / 9", "5 / 1 / 6 / 3", "4 / 6 / 5 / 9", "5 / 6 / 6 / 9"]
//     ];

//   // Original grid-area positions
//   const originalGridAreas = {};
//   const items = document.querySelectorAll('.grid-container [id^="item"]');
//   items.forEach(item => {
//     originalGridAreas[item.id] = item.style.gridArea;
//   });

//   const slider = document.getElementById('slider2');
//   slider.addEventListener('input', function() {
//     if (this.value == 0) {
//       // Restore original grid areas
//       items.forEach(item => {
//         item.style.gridArea = originalGridAreas[item.id];
//       });
//     } else {
//       // Select a random pattern
//       const randomPatternIndex = Math.floor(Math.random() * patterns.length);
//       const selectedPattern = patterns[randomPatternIndex];
//       // Apply the random pattern to the items
//       items.forEach((item, index) => {
//         const newGridArea = selectedPattern[index];
//         item.style.gridArea = newGridArea;
//       });
//     }
//   });
// });

// -----
// document.addEventListener('DOMContentLoaded', function() {
//   // Predefined patterns for grid-area positions
//   const patterns = [
//     ["1 / 1 / 3 / 2", "1 / 2 / 2 / 6", "1 / 7 / 5 / 9", "3 / 1 / 6 / 2", "2 / 2 / 6 / 3", "2 / 3 / 3 / 6", "1 / 6 / 3 / 7", "3 / 3 / 5 / 7", "5 / 3 / 6 / 5", "5 / 5 / 6 / 9"],
//     ["1 / 1 / 4 / 2", "1 / 2 / 2 / 9", "3 / 8 / 6 / 9", "4 / 1 / 6 / 2", "3 / 2 / 6 / 4", "2 / 6 / 3 / 9", "3 / 7 / 6 / 8", "2 / 2 / 3 / 6", "3 / 4 / 5 / 7", "5 / 4 / 6 / 7"],
//     ["1 / 1 / 5 / 3", "1 / 3 / 2 / 6", "1 / 6 / 4 / 7", "3 / 3 / 6 / 5", "3 / 5 / 6 / 6", "2 / 3 / 3 / 6", "1 / 7 / 4 / 9", "5 / 1 / 6 / 3", "4 / 6 / 5 / 9", "5 / 6 / 6 / 9"]
//   ];

//   // Original grid-area positions
//   const originalGridAreas = {};
//   const items = document.querySelectorAll('.grid-container [id^="item"]');
//   items.forEach(item => {
//     originalGridAreas[item.id] = item.style.gridArea;
//   });

//   const slider = document.getElementById('slider2');
//   slider.addEventListener('input', function() {
//     if (this.value == 0) {
//       // Restore original grid areas
//       items.forEach(item => {
//         item.style.gridArea = originalGridAreas[item.id];
//       });
//     } else {
//       // Adjust this line to use the slider value to select the pattern
//       const selectedPattern = patterns[this.value - 1];
//       // Apply the selected pattern to the items
//       items.forEach((item, index) => {
//         const newGridArea = selectedPattern[index];
//         item.style.gridArea = newGridArea;
//       });
//     }
//   });
// });
