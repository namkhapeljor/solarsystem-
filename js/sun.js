// Sun page: start/stop the pulsing glow animation
const sunImg = document.getElementById("planet-img");

// "running" lets the CSS animation play, "paused" freezes it
document.getElementById("start-btn").addEventListener("click", function () {
  sunImg.style.animationPlayState = "running";
});

document.getElementById("stop-btn").addEventListener("click", function () {
  sunImg.style.animationPlayState = "paused";
});
