// Mercury page: weight calculator (Mercury gravity is 0.38 of Earth's)
const GRAVITY = 0.38;
const weightInput = document.getElementById("weight");
const result = document.getElementById("result");

document.getElementById("calc-btn").addEventListener("click", function () {
  const earthWeight = parseFloat(weightInput.value);

  // Check that the user typed a real number
  if (isNaN(earthWeight) || earthWeight <= 0) {
    result.textContent = "Please enter a weight greater than 0.";
    return;
  }

  const mercuryWeight = earthWeight * GRAVITY;
  result.textContent = "On Mercury you would weigh " + mercuryWeight.toFixed(1) + " (same units).";
});
