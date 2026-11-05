// Earth page: start/stop the Moon orbiting Earth
const arm = document.getElementById("orbit-arm");

document.getElementById("start-btn").addEventListener("click", function () {
  arm.style.animationPlayState = "running";
});

document.getElementById("stop-btn").addEventListener("click", function () {
  arm.style.animationPlayState = "paused";
});
