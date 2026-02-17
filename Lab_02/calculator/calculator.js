// Get display element
var display = document.getElementById("display");

// Append value to display
function appendToDisplay(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Calculate result
function calculate() {
  try {
    if (display.value === "") {
      return;
    }
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
