// Home page: random space fact generator
const facts = [
  "A day on Venus is longer than its year.",
  "Neutron stars can spin hundreds of times per second.",
  "Jupiter's Great Red Spot is a storm bigger than Earth.",
  "Footprints on the Moon can last millions of years.",
  "Saturn is less dense than water.",
  "Olympus Mons on Mars is the tallest volcano known.",
  "Sunlight takes about 8 minutes to reach Earth.",
  "Uranus rotates on its side."
];

const factBtn = document.getElementById("fact-btn");
const factOutput = document.getElementById("fact-output");

// Pick a random fact each time the button is clicked
factBtn.addEventListener("click", function () {
  const index = Math.floor(Math.random() * facts.length);
  factOutput.textContent = facts[index];
});
