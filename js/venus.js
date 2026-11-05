// Venus page: pop-up (modal) with a random fun fact
const funFacts = [
  "Venus spins backwards compared to most planets.",
  "A day on Venus is longer than a year on Venus.",
  "Venus is the hottest planet, even hotter than Mercury.",
  "The air pressure on Venus is about 92 times Earth's.",
  "Venus is the brightest planet in our night sky."
];

const dialog = document.getElementById("fact-dialog");
const dialogText = document.getElementById("dialog-text");

document.getElementById("open-btn").addEventListener("click", function () {
  const index = Math.floor(Math.random() * funFacts.length);
  dialogText.textContent = funFacts[index];
  dialog.showModal();   // built-in HTML dialog pop-up
});

document.getElementById("close-btn").addEventListener("click", function () {
  dialog.close();
});
