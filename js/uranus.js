// Uranus page: slider tips the planet over to show its axial tilt
const planet = document.getElementById("planet-img");
const tiltSlider = document.getElementById("tilt");
const tiltValue = document.getElementById("tilt-value");

// Rotate the picture and update the label
function setTilt(degrees) {
  planet.style.transform = "rotate(" + degrees + "deg)";
  tiltValue.textContent = degrees;
  tiltSlider.value = degrees;
}

tiltSlider.addEventListener("input", function () {
  setTilt(tiltSlider.value);
});

document.getElementById("earth-btn").addEventListener("click", function () {
  setTilt(23.5);
});

document.getElementById("uranus-btn").addEventListener("click", function () {
  setTilt(98);
});
