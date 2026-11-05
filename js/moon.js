// Moon page: choose a phase and move the dark shadow over the Moon
const phases = [
  { name: "New Moon", x: 0 },
  { name: "Waxing Crescent", x: -25 },
  { name: "First Quarter", half: "half-left" },
  { name: "Waxing Gibbous", x: -75 },
  { name: "Full Moon", x: -100 },
  { name: "Waning Gibbous", x: 75 },
  { name: "Last Quarter", half: "half-right" },
  { name: "Waning Crescent", x: 25 }
];

const shadow = document.getElementById("shadow");
const phaseName = document.getElementById("phase-name");
const buttonBox = document.getElementById("phase-buttons");

// Show one phase: reset the shadow, then apply the chosen position
function showPhase(phase) {
  shadow.className = "shadow";
  shadow.style.transform = "";
  if (phase.half) {
    shadow.classList.add(phase.half);
  } else {
    shadow.style.transform = "translateX(" + phase.x + "%)";
  }
  phaseName.textContent = phase.name;
}

// Build one button for each phase
phases.forEach(function (phase) {
  const btn = document.createElement("button");
  btn.textContent = phase.name;
  btn.addEventListener("click", function () {
    showPhase(phase);
  });
  buttonBox.appendChild(btn);
});

// Start on the Full Moon
showPhase(phases[4]);
