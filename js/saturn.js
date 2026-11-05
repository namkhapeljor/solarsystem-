// Saturn page: convert Earth age to Saturn age (Saturn year = 29.46 Earth years)
const SATURN_YEAR = 29.46;
const ageInput = document.getElementById("age");
const ageResult = document.getElementById("age-result");

document.getElementById("age-btn").addEventListener("click", function () {
  const age = parseFloat(ageInput.value);

  if (isNaN(age) || age < 0) {
    ageResult.textContent = "Please enter a valid age.";
    return;
  }

  const saturnAge = age / SATURN_YEAR;
  ageResult.textContent = "You would be " + saturnAge.toFixed(2) + " years old on Saturn.";
});
