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



// document.addEventListener("DOMContentLoaded", function () {
//   var slider = document.getElementById("slider9");
//   var itemDivs = document.querySelectorAll(".grid-container > div");
//   var originalSizes = {};

//   // Store the original sizes of the item and wrapper divs
//   itemDivs.forEach(function (div) {
//     var wrapDiv = div.querySelector("div");
//     originalSizes[div.id] = {
//       width: div.offsetWidth,
//       height: div.offsetHeight,
//       wrapWidth: wrapDiv.offsetWidth,
//       wrapHeight: wrapDiv.offsetHeight,
//     };
//   });

//   slider.addEventListener("input", function () {
//     var sliderValue = parseInt(this.value, 10);
//     var scaleFactor = sliderValue / 100;

//     // Reset to original sizes if the slider is at the start
//     if (sliderValue === 0) {
//       for (let id in originalSizes) {
//         var itemDiv = document.getElementById(id);
//         var wrapDiv = itemDiv.querySelector("div");
//         itemDiv.style.width = originalSizes[id].width + "px";
//         itemDiv.style.height = originalSizes[id].height + "px";
//         wrapDiv.style.width = originalSizes[id].wrapWidth + "px";
//         wrapDiv.style.height = originalSizes[id].wrapHeight + "px";
//       }
//     } else {
//       // Adjust sizes randomly based on the slider value
//       itemDivs.forEach(function (div) {
//         var randomWidthScale = Math.random() * scaleFactor + 0.5; // 50% to 150% of original width
//         var randomHeightScale = Math.random() * scaleFactor + 0.5; // 50% to 150% of original height

//         var newWidth = originalSizes[div.id].width * randomWidthScale;
//         var newHeight = originalSizes[div.id].height * randomHeightScale;

//         // Set new sizes for the item div
//         div.style.width = newWidth + "px";
//         div.style.height = newHeight + "px";

//         // Set new sizes for the child wrapper div proportionally
//         var wrapDiv = div.querySelector("div");
//         var wrapWidthScale = newWidth / originalSizes[div.id].width;
//         var wrapHeightScale = newHeight / originalSizes[div.id].height;

//         wrapDiv.style.width =
//           originalSizes[div.id].wrapWidth * wrapWidthScale + "px";
//         wrapDiv.style.height =
//           originalSizes[div.id].wrapHeight * wrapHeightScale + "px";
//       });
//     }
//   });
// });


// slider.addEventListener("input", function () {
//   var sliderValue = parseInt(this.value, 10);
//   var scaleFactor = sliderValue / 100;

//   // Reset to original sizes if the slider is at the start
//   if (sliderValue === 0) {
//       itemDivs.forEach(function (div) {
//           var wrapDiv = div.querySelector("div");
//           div.style.width = originalSizes[div.id].width + "px";
//           div.style.height = originalSizes[div.id].height + "px";
//           wrapDiv.style.width = originalSizes[div.id].wrapWidth + "px";
//           wrapDiv.style.height = originalSizes[div.id].wrapHeight + "px";
//       });
//   } else {
//       // Adjust sizes randomly based on the slider value
//       itemDivs.forEach(function (div) {
//           var randomFactor = Math.random() * (1.5 - 0.5) + 0.5; // Random factor between 0.5 and 1.5
//           var newWidth = originalSizes[div.id].width * randomFactor * scaleFactor;
//           var newHeight = originalSizes[div.id].height * randomFactor * scaleFactor;

//           // Set new sizes for the item div
//           div.style.width = newWidth + "px";
//           div.style.height = newHeight + "px";

//           // Set new sizes for the child wrapper div proportionally
//           var wrapDiv = div.querySelector("div");
//           wrapDiv.style.width = newWidth + "px";
//           wrapDiv.style.height = newHeight + "px";
//       });
//   }
// });



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
      wrapHeight: wrapDiv ? wrapDiv.offsetHeight : 0
    };
  });

  slider.addEventListener("input", function () {
    var sliderValue = parseInt(this.value, 10);
    var scaleFactor = sliderValue / 100;

    if (sliderValue === 0) {
      // Reset to original sizes and positions if the slider is at the start
      itemDivs.forEach(function (div) {
        div.style.width = '';
        div.style.height = '';
        var wrapDiv = div.querySelector("div");
        if (wrapDiv) {
          wrapDiv.style.width = '';
          wrapDiv.style.height = '';
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
        div.style.width = newWidth + 'px';
        div.style.height = newHeight + 'px';

        // Set new sizes for the child wrapper div proportionally
        var wrapDiv = div.querySelector("div");
        if (wrapDiv) {
          var wrapWidthScale = newWidth / originalSizes[div.id].width;
          var wrapHeightScale = newHeight / originalSizes[div.id].height;

          wrapDiv.style.width = originalSizes[div.id].wrapWidth * wrapWidthScale + 'px';
          wrapDiv.style.height = originalSizes[div.id].wrapHeight * wrapHeightScale + 'px';
        }
      });
    }
  });
});


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


document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('slider2');
  const grainEffect = document.getElementById('grainEffect');

  slider.addEventListener('input', function() {
      const sliderValue = this.value;
      const opacity = sliderValue / 100;
      grainEffect.style.opacity = opacity;
  });
});
