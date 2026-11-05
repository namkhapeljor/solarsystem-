// Mars page: show/hide "Read more" section
const moreBtn = document.getElementById("more-btn");
const moreText = document.getElementById("more-text");

moreBtn.addEventListener("click", function () {
  // The "hidden" attribute hides the element; toggle it on each click
  moreText.hidden = !moreText.hidden;
  moreBtn.textContent = moreText.hidden ? "Read more" : "Read less";
});
