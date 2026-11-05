// Jupiter page: slider changes how fast the planet spins
const jupiterImg = document.getElementById("planet-img");
const speedSlider = document.getElementById("speed");
const speedValue = document.getElementById("speed-value");

// Jupiter spins from the start
jupiterImg.style.animationPlayState = "running";

speedSlider.addEventListener("input", function () {
  jupiterImg.style.animationDuration = speedSlider.value + "s";
  speedValue.textContent = speedSlider.value;
});
